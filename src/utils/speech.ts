/**
 * Shared narration engine for the Tour Guide and the planet info panel.
 *
 * Arabic runs through a two-stage pipeline:
 *   1. a cloud neural voice (Google's TTS endpoint) - a far more developed model
 *      than the robotic system voices - with تشكيل applied to the text;
 *   2. automatic fallback to the best local Web Speech voice whenever the
 *      network, the endpoint or autoplay is unavailable.
 *
 * Numbers, units, symbols and emojis are rewritten first so nothing is ever
 * spelled out letter by letter.
 */

import { tashkeel } from './tashkeel';

export type SpeechLang = 'ar' | 'en';

export interface SpeakOptions {
  lang: SpeechLang;
  onEnd?: () => void;
}

const CLOUD_TTS_URL = 'https://translate.google.com/translate_tts';
const CLOUD_TTS_MAX = 180; // the endpoint rejects queries longer than ~200 chars

let sessionToken = 0;
let currentAudio: HTMLAudioElement | null = null;
let keepAliveId: number | null = null;

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && ('speechSynthesis' in window || typeof Audio !== 'undefined');
}

/** Stops whatever is being read (audio element and/or speech synthesis). */
export function stopSpeech(): void {
  sessionToken += 1;
  clearKeepAlive();
  if (currentAudio) {
    const audio = currentAudio;
    currentAudio = null;
    audio.onended = null;
    audio.onerror = null;
    try {
      audio.pause();
    } catch {
      /* noop */
    }
    audio.removeAttribute('src');
    try {
      audio.load();
    } catch {
      /* noop */
    }
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

/** Reads the given text out loud. Calling it again replaces the current reading. */
export function speakText(rawText: string, options: SpeakOptions): void {
  stopSpeech();
  const token = sessionToken;
  const chunks = prepareChunks(rawText, options.lang);
  if (!chunks.length) {
    options.onEnd?.();
    return;
  }
  const finish = () => {
    if (token !== sessionToken) return;
    clearKeepAlive();
    options.onEnd?.();
  };
  if (options.lang === 'ar') speakCloud(chunks, 0, token, options, finish);
  else speakLocal(chunks, 0, token, options, finish);
}

/* ------------------------------------------------------------------ *
 * Stage 1 - cloud neural voice, falling back to the local engine
 * ------------------------------------------------------------------ */
function speakCloud(
  chunks: string[],
  index: number,
  token: number,
  options: SpeakOptions,
  finish: () => void
): void {
  if (token !== sessionToken) return;
  if (index >= chunks.length) {
    finish();
    return;
  }
  const url =
    `${CLOUD_TTS_URL}?ie=UTF-8&client=tw-ob&tl=${options.lang}` +
    `&q=${encodeURIComponent(chunks[index])}`;

  const audio = new Audio();
  currentAudio = audio;
  let settled = false;
  const release = () => {
    settled = true;
    if (currentAudio === audio) currentAudio = null;
    audio.onended = null;
    audio.onerror = null;
  };
  const next = () => {
    if (settled) return;
    release();
    speakCloud(chunks, index + 1, token, options, finish);
  };
  const toLocalEngine = () => {
    if (settled) return;
    release();
    if (token !== sessionToken) return;
    // Play the remaining text with the best available system voice instead.
    speakLocal(chunks.slice(index), 0, token, options, finish);
  };

  audio.onended = next;
  audio.onerror = toLocalEngine;
  audio.src = url;
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(toLocalEngine);
  }
}

/* ------------------------------------------------------------------ *
 * Stage 2 - local Web Speech engine (voice ranking + chunk queue)
 * ------------------------------------------------------------------ */
async function speakLocal(
  chunks: string[],
  index: number,
  token: number,
  options: SpeakOptions,
  finish: () => void
): Promise<void> {
  if (token !== sessionToken) return;
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    finish();
    return;
  }
  const voices = await resolveVoices();
  if (token !== sessionToken) return;

  const voice = pickVoice(options.lang, voices);
  startKeepAlive(token);

  for (let i = index; i < chunks.length; i++) {
    if (token !== sessionToken) return;
    const ok = await speakChunk(chunks[i], voice, options.lang);
    if (!ok) break;
  }
  finish();
}

function speakChunk(text: string, voice: SpeechSynthesisVoice | null, lang: SpeechLang): Promise<boolean> {
  return new Promise((resolve) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === 'ar' ? 'ar-SA' : 'en-US';
    if (voice) utterance.voice = voice;
    utterance.rate = lang === 'ar' ? 0.92 : 1.05;
    utterance.pitch = lang === 'ar' ? 0.75 : 1.0; // lower pitch => more masculine narrator

    let settled = false;
    const settle = (value: boolean) => {
      if (settled) return;
      settled = true;
      resolve(value);
    };
    utterance.onend = () => settle(true);
    utterance.onerror = () => settle(false);

    window.speechSynthesis.speak(utterance);

    // Safety net: some engines never fire `onend` - never hang forever.
    window.setTimeout(() => {
      if (settled) return;
      try {
        window.speechSynthesis.cancel();
      } catch {
        /* noop */
      }
      settle(false);
    }, text.length * 150 + 12000);
  });
}

/* ------------------------------------------------------------------ *
 * Voice discovery & ranking
 * ------------------------------------------------------------------ */
function resolveVoices(): Promise<SpeechSynthesisVoice[]> {
  const synth = window.speechSynthesis;
  const existing = synth.getVoices();
  if (existing.length) return Promise.resolve(existing);

  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      synth.removeEventListener('voiceschanged', finish);
      resolve(synth.getVoices());
    };
    synth.addEventListener('voiceschanged', finish);
    window.setTimeout(finish, 1500);
  });
}

/** Picks the highest quality voice for a language (online/neural voices win). */
function pickVoice(lang: SpeechLang, voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const prefix = lang;
  const matching = voices.filter((v) =>
    (v.lang || '').toLowerCase().replace('_', '-').startsWith(prefix)
  );
  if (!matching.length) return null;

  const score = (v: SpeechSynthesisVoice): number => {
    const name = (v.name || '').toLowerCase();
    const native = (v.lang || '').toLowerCase().replace('_', '-');
    let value = 0;
    if (!v.localService) value += 60; // cloud voices (neural in Edge / Chrome)
    if (/natural|neural|online|premium|enhanced/.test(name)) value += 40;
    if (/google/.test(name)) value += 25;
    if (prefix === 'ar') {
      if (/hoda|salma|amira|zariyah|zira|jenny|aria|jenny|female|نساء|أنثى/.test(name)) value -= 45; // prefer masculine narrator for Arabic
      if (/majed|hamed|naayf|طارق|ماجد|حامد|نايف|male|رجل|ذكر/.test(name)) value += 50; // known masculine Arabic voices
      if (/microsoft (laid|majed|hamad|naif|tariq)/.test(name)) value += 20;
    } else if (/hoda|hamed|salma|majed|zariyah|amira|david|zira|aria|jenny/.test(name)) value += 10;
    if (/naayf|hazel/.test(name)) value -= 15; // older robotic SAPI voices
    if (native.startsWith(`${prefix}-sa`) || native.startsWith(`${prefix}-us`) || native.startsWith(`${prefix}-gb`)) {
      value += 8;
    }
    if (v.default) value += 3;
    return value;
  };

  return matching.slice().sort((a, b) => score(b) - score(a))[0];
}

/* ------------------------------------------------------------------ *
 * Chrome keeps pausing long utterances - this unsticks them
 * ------------------------------------------------------------------ */
function startKeepAlive(token: number): void {
  clearKeepAlive();
  keepAliveId = window.setInterval(() => {
    if (token !== sessionToken) {
      clearKeepAlive();
      return;
    }
    const synth = window.speechSynthesis;
    if (synth.speaking && !synth.paused) {
      synth.pause();
      synth.resume();
    }
  }, 9000);
}

function clearKeepAlive(): void {
  if (keepAliveId !== null) {
    window.clearInterval(keepAliveId);
    keepAliveId = null;
  }
}

/* ------------------------------------------------------------------ *
 * Text preparation: cleaning -> normalisation -> تشكيل -> chunking
 * ------------------------------------------------------------------ */
function prepareChunks(rawText: string, lang: SpeechLang): string[] {
  const cleaned = cleanForSpeech(rawText);
  if (!cleaned) return [];
  const normalised = normalizeForTTS(cleaned, lang);
  const ready = lang === 'ar' ? tashkeel(normalised) : normalised;

  const sentences = ready.match(/[^.!?؟]+[.!?؟]*/g) || [ready];
  const chunks: string[] = [];
  for (const sentence of sentences) {
    let rest = sentence.trim();
    if (!rest) continue;
    // keep every request well under the cloud endpoint limit
    while (rest.length > CLOUD_TTS_MAX) {
      let cut = rest.lastIndexOf(' ', CLOUD_TTS_MAX);
      if (cut < 40) cut = CLOUD_TTS_MAX;
      chunks.push(rest.slice(0, cut).trim());
      rest = rest.slice(cut).trim();
    }
    if (rest) chunks.push(rest);
  }
  return chunks;
}

/** Removes emojis and the emphatic "boooom" the tour adds after extreme facts. */
// eslint-disable-next-line no-misleading-character-class
function cleanForSpeech(text: string): string {
  return text
    .replace(/[\u{1F000}-\u{1FAFF}\u{2190}-\u{2BFF}\u{FE0F}]/gu, ' ')
    .replace(/Booooooom!!?/gi, ' ')
    .replace(/بو+وم!?/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Rewrites numbers, units and symbols so nothing is spelled out letter by letter. */
function normalizeForTTS(text: string, lang: SpeechLang): string {
  const ar = lang === 'ar';
  let out = text;

  const temperature = (raw: string) => {
    const negative = raw.startsWith('-');
    const value = negative ? raw.slice(1) : raw;
    if (ar) return `${negative ? 'سالب ' : ''}${value} درجة مئوية`;
    return `${negative ? 'minus ' : ''}${value} degrees Celsius`;
  };

  // -180°C / 430°C / 224°C
  out = out.replace(/(-?\d+(?:[.,]\d+)?)\s*°\s*C/gi, (_, n: string) => temperature(n));
  out = out.replace(/(-?\d+(?:[.,]\d+)?)\s*°/g, (_, n: string) => temperature(n));
  // 71% / 99.86%
  out = out.replace(/(\d+(?:[.,]\d+)?)\s*%/g, (_, n: string) => (ar ? `${n} بالمئة` : `${n} percent`));
  // 2,100 km/h | 2100 كم/س
  out = out.replace(/(\d+(?:[.,]\d+)?)\s*كم\/س/g, '$1 كيلومتر في الساعة');
  out = out.replace(
    /(\d+(?:[.,]\d+)?)\s*km\/h/gi,
    ar ? '$1 كيلومتر في الساعة' : '$1 kilometres per hour'
  );
  // 40 كم | 40 km (only right after a number)
  out = out.replace(/(\d)\s*كم(?=\s|$|[.,،!?؟])/g, '$1 كيلومتر');
  out = out.replace(/(\d)\s*km(?=\s|$|[.,!?])/gi, ar ? '$1 كيلومتر' : '$1 kilometres');
  out = out.replace(/كغ/g, ar ? 'كيلوجرام' : 'kilograms');
  out = out.replace(/\bkg\b/gi, ar ? 'كيلوجرام' : 'kilograms');
  // scientific notation: 3.3 × 10²³ -> 3.3 في عشرة أس 23
  out = out.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (d) => String('⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(d)));
  out = out.replace(/×\s*10\s*(\d+)/g, ar ? 'في عشرة أس $1' : 'times ten to the power of $1');
  out = out.replace(/×/g, ar ? 'في' : 'times');
  out = out.replace(/\^(\d+)/g, ar ? 'أس $1' : 'power $1');
  // thousands separators: 75,000 -> 75000
  out = out.replace(/(\d),(\d{3})\b/g, '$1$2');
  // dashes, slashes and brackets
  out = out.replace(/[—–]+/g, ar ? '، ' : ', ');
  out = out.replace(/\//g, ar ? ' أو ' : ' or ');
  out = out.replace(/[[\](){}«»"]/g, ' ');

  return out.replace(/\s+/g, ' ').trim();
}
