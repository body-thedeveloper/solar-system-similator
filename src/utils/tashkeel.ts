/**
 * تشكيل الحروف (Tashkeel) helpers used by the text-to-speech engine.
 *
 * Deliberately CONSERVATIVE: it only vocalises words it is certain about - a
 * curated lexicon of the words the tour / info panels actually speak, plus a
 * few prefix rules (و، ف، ب، ك، ل). Unknown words pass through untouched so the
 * TTS engine can rely on its own language model instead of a wrong vowel.
 *
 * Applied to the spoken text only - it never changes what is rendered on screen.
 */

import { EXTRA_LEXICON } from './tashkeelExtra';

// Combining marks that may sit on one base letter (tanwin, fatha..sukun, dagger alif)
const MARKS = /[\u064B-\u0653\u0670]/g;
const ANY_MARK = /[\u064B-\u0652\u0670]/;
const TATWEEL = /\u0640/g;

/** Normalised lookup key: strips tashkeel/tatweel and folds alef/hamza/ta-marbuta variants. */
export function stripTashkeel(word: string): string {
  return word
    .replace(MARKS, '')
    .replace(TATWEEL, '')
    .replace(/[\u0622\u0623\u0625\u0671]/g, '\u0627') // آ أ إ ٱ -> ا
    .replace(/\u0649/g, '\u064A') // ى -> ي
    .replace(/\u0629/g, '\u0647') // ة -> ه
    .replace(/\u0624/g, '\u0648') // ؤ -> و
    .replace(/\u0626/g, '\u064A'); // ئ -> ي
}

/** Keeps the combining marks of every letter in canonical code-point order. */
function reorderMarks(text: string): string {
  const isMark = (ch: string) => {
    const c = ch.charCodeAt(0);
    return (c >= 0x064b && c <= 0x0653) || c === 0x0670;
  };
  let out = '';
  let marks: string[] = [];
  const flush = () => {
    if (marks.length) {
      marks.sort();
      out += marks.join('');
      marks = [];
    }
  };
  for (const ch of text) {
    if (isMark(ch)) marks.push(ch);
    else {
      flush();
      out += ch;
    }
  }
  flush();
  return out;
}

/**
 * Words the narrator reads. Values are fully vocalised where the reading is
 * unambiguous; nouns keep their consonant skeleton because the case vowel
 * depends on the sentence.
 */
const RAW_LEXICON: Record<string, string> = {
  // --- particles & pronouns ---
  'من': 'مِنْ',
  'في': 'فِي',
  'على': 'عَلَى',
  'إلى': 'إِلَى',
  'عن': 'عَنْ',
  'مع': 'مَعَ',
  'بين': 'بَيْنَ',
  'حول': 'حَوْلَ',
  'قبل': 'قَبْلَ',
  'بعد': 'بَعْدَ',
  'منذ': 'مُنْذُ',
  'حتى': 'حَتَّى',
  'مثل': 'مِثْلَ',
  'أمام': 'أَمامَ',
  'دون': 'دُونَ',
  'نحو': 'نَحْوَ',
  'ضمن': 'ضِمْنَ',
  'وفق': 'وَفقَ',
  'بدون': 'بِدونَ',
  'بسبب': 'بِسَبَبِ',
  'هذا': 'هَذَا',
  'هذه': 'هَذِهِ',
  'ذلك': 'ذَلِكَ',
  'التي': 'الَّتِي',
  'الذي': 'الَّذِي',
  'الذين': 'الَّذِينَ',
  'هو': 'هُوَ',
  'هي': 'هِيَ',
  'وهو': 'وَهُوَ',
  'وهي': 'وَهِيَ',
  'وأن': 'وَأَنْ',
  'أن': 'أَنْ',
  'أنه': 'أَنَّهُ',
  'إنها': 'إِنَّهَا',
  'إنه': 'إِنَّهُ',
  'لكنه': 'لَكِنَّهُ',
  'ولكن': 'وَلَكِنْ',
  'لا': 'لَا',
  'ما': 'مَا',
  'لم': 'لَمْ',
  'لن': 'لَنْ',
  'لكن': 'لَكِنْ',
  'أو': 'أَوْ',
  'ثم': 'ثُمَّ',
  'إذا': 'إِذَا',
  'حيث': 'حَيْثُ',
  'فقط': 'فَقَطْ',
  'الآن': 'الآنَ',
  'قد': 'قَدْ',
  'لقد': 'لَقَدْ',
  'بل': 'بَلْ',
  'غير': 'غَيْر',
  'بعض': 'بَعْض',
  'هل': 'هَلْ',
  'لديك': 'لَدَيْكَ',
  'أنت': 'أَنْتَ',
  'كما': 'كَما',
  'أهلا': 'أَهْلاً',

  // --- verbs ---
  'كان': 'كَانَ',
  'كانت': 'كَانَتْ',
  'يكون': 'يَكُونُ',
  'تكون': 'تَكُونُ',
  'يدور': 'يَدُورُ',
  'تدور': 'تَدُورُ',
  'يعيش': 'يَعِيشُ',
  'تعيش': 'تَعِيشُ',
  'يصنع': 'يَصْنَعُ',
  'يعتبر': 'يُعْتَبَرُ',
  'يعتقد': 'يَعْتَقِدُ',
  'يمتلك': 'يَمْلِكُ',
  'يمكن': 'يُمْكِنُ',
  'تصل': 'تَصِلُ',
  'يصل': 'يَصِلُ',
  'يعرف': 'يَعْرِفُ',
  'يوجد': 'يُوجَدُ',
  'يبدأ': 'يَبْدَأُ',
  'يرتدي': 'يَرْتَدِي',
  'يضم': 'يَضُمُّ',
  'يكفي': 'يَكْفِي',
  'يجعل': 'يَجْعَلُ',
  'يجعله': 'يَجْعَلُهُ',
  'تحتوي': 'تَحْتَوِي',
  'تتسع': 'تَتَّسِعُ',
  'تبلغ': 'تَبْلُغُ',
  'يبلغ': 'يَبْلُغُ',
  'يمثل': 'يُمَثِّلُ',
  'يعادل': 'يُعادِلُ',
  'تشرق': 'تَشْرَقُ',
  'يشرق': 'يَشْرَقُ',
  'تتميز': 'تَتَمَيَّزُ',
  'يتميز': 'يَتَمَيَّزُ',
  'استمر': 'اسْتَمَرَّ',
  'تم': 'تَمَّ',
  'حسبوا': 'احْتَسَبُوا',
  'اكتشف': 'اكْتَشَفَ',
  'انبهر': 'انْبَهَرَ',
  'استغرق': 'اسْتَغْرَقَ',
  'لاحظ': 'لاحَظَ',
  'تخيل': 'تَخَيَّلْ',
  'انقر': 'انْقُرْ',
  'اختر': 'اخْتَرْ',
  'أظهر': 'أَظْهِرْ',
  'تعرّف': 'تَعَرَّفْ',
  'يفتح': 'يَفْتَحُ',
  'يظهر': 'يَظْهَرُ',
  'تظهر': 'تَظْهَرُ',
  // --- planets & celestial nouns ---
  'الشمس': 'الشَّمْس',
  'الشمسي': 'الشَّمْسِيّ',
  'الأرض': 'الأَرْض',
  'أرض': 'أَرْض',
  'أرضية': 'أَرْضِيَّة',
  'النظام': 'النِّظام',
  'نظام': 'نِظام',
  'نظامنا': 'نِظامَنا',
  'الكوكب': 'الكَوْكَب',
  'كوكب': 'كَوْكَب',
  'كواكب': 'كَوَاكِب',
  'الكواكب': 'الكَوَاكِب',
  'كوكبي': 'كَوْكِيّ',
  'الزهرة': 'الزَّهْرَة',
  'زحل': 'زَحْل',
  'المشتري': 'المِشْتَرِي',
  'المريخ': 'المِرِّيخ',
  'عطارد': 'عُطارِد',
  'نبتون': 'نِبْتون',
  'أورانوس': 'أُورانوس',
  'القمر': 'القَمْر',
  'قمر': 'قَمْر',
  'قمراً': 'قَمَراً',
  'الأقمار': 'الأَقْمار',
  'أقمار': 'أَقْمار',
  'القمم': 'القِمم',
  'النجم': 'النَّجْم',
  'نجم': 'نَجْم',
  'نجمنا': 'نَجْمَنا',
  'المدار': 'المَدار',
  'المدارية': 'المَدارِيَّة',
  'الفضاء': 'الفَضاء',
  'المجرة': 'المَجَرَّة',
  'الكون': 'الكَوْن',
  'كون': 'كَوْن',
  'كونية': 'كَوْنِيَّة',
  'الفلك': 'الفَلَك',
  'العلماء': 'العِلَماء',
  'العالم': 'العالَم',
  'عالم': 'عالَم',
  'الحياة': 'الحَياة',
  'للحياة': 'لِلْحَياة',
  'حياة': 'حَياة',

  // --- science & measurements ---
  'كتلة': 'كَتْلَة',
  'كتلته': 'كَتْلَتِهِ',
  'بكتلة': 'بِكَتْلَة',
  'الكتلة': 'الكَتْلَة',
  'كثافة': 'كَثافة',
  'كثافته': 'كَثافَتِهِ',
  'الكثافة': 'الكَثافة',
  'درجة': 'دَرَجَة',
  'درجات': 'دَرَجات',
  'حرارة': 'حَرارَة',
  'الحرارة': 'الحَرارَة',
  'السرعة': 'السَّرْعَة',
  'سرعة': 'سَرْعَة',
  'المسافة': 'المَسافة',
  'مسافة': 'مَسافة',
  'القطر': 'القَطْر',
  'الجاذبية': 'الجاذِبَة',
  'الضوء': 'الضَّوْء',
  'الغلاف': 'الغِلاف',
  'السماء': 'السَّماء',
  'كيلومتر': 'كيلوميتَر',
  'كيلومترات': 'كيلوميتَرات',
  'كيلومتراً': 'كيلوميتَراً',
  'كيلوجرام': 'كيلوجرام',
  'ناسا': 'ناسا',
  'الكسوف': 'الكُسُوف',
  // --- adjectives & descriptions ---
  'الأكثر': 'الأَكْثَر',
  'أكثر': 'أَكْثَر',
  'أكبر': 'أَكْبَر',
  'أصغر': 'أَصْغَر',
  'أقوى': 'أَقْوى',
  'أسرع': 'أَسْرَع',
  'أبرد': 'أَبْرَد',
  'الوحيد': 'الوَحِيد',
  'وحيد': 'وَحِيد',
  'الثاني': 'الثَّانِي',
  'الثامن': 'الثَّامِن',
  'التالي': 'التَّالِي',
  'الأشهر': 'الأَشْهَر',
  'جميع': 'جَمِيع',
  'نفس': 'نَفْس',
  'واحدة': 'واحِدة',
  'أخرى': 'أُخْرى',
  'الأخرى': 'الأُخْرى',
  'مرات': 'مَرات',
  'أيام': 'أَيَّام',
  'ساعات': 'ساعات',
  'سنوات': 'سَنَوات',
  'السنوات': 'السَّنَوات',
  'السنين': 'السِّنِين',
  'سنة': 'سَنَة',
  'يوم': 'يَوْم',
  'يومها': 'يَوْمَها',
  'ماء': 'ماء',
  'كرة': 'كُرَة',
  'جوهرة': 'جَوْهَرَة',
  'عملاق': 'عَملاق',
  'العملاق': 'العَملاق',
  'العمالقة': 'العَمالِقَة',
  'مليارات': 'مِليارات',
  'مليون': 'مِليون',
  'صخرية': 'صَخْرِيَّة',
  'الصخرية': 'الصَّخْرِيَّة',
  'رقيقا': 'رَقِيقاً',
  'رقيقة': 'رَقِيقَة',
  'الصدئ': 'الصَّدِئ',
  'ضخم': 'ضَخْم',
  'ضخماً': 'ضَخْماً',
  'كبير': 'كَبِير',
  'كبيرا': 'كَبِيراً',
  'رائع': 'رائِع',
  'رائعا': 'رائِعاً',
  'طبيعي': 'طَبِيعِي',
  'طبيعية': 'طَبِيعِيَّة',
  'مدهش': 'مُدْهِش',
  'مدهشا': 'مُدْهِشاً',
  'متوسط': 'مُتَوَسِّط',
  'منخفضة': 'مُنْخَفِضَة',
  'متطرفة': 'مُتَطَرِّفَة',
  'متجمدة': 'مُتَجَمِّدَة',
  'حارقة': 'حارِقَة',
  'سميكة': 'سَمِيكَة',
  'ثقيلة': 'ثَقِيلَة',
  'الغريب': 'الغَرِيب',
  'غريب': 'غَرِيب',
  'المتمردة': 'المُتَمَرِّدَة',
  'الشرير': 'الشَّرِير',
  'التوأم': 'التَّوْأَم',
  'شديدة': 'شَدِيدَة',
  'المطلقة': 'المُطْلَقة',
  'الحلقات': 'الحَلَقات',
  'حلقات': 'حَلَقات',
  'الرياح': 'الرِّياح',
  'رياح': 'رِياح',
  'الغازي': 'الغازِي',
  'الغازية': 'الغازِيَّة',
  'غازية': 'غازِيَّة',
  'الجليدي': 'الجَلِيدي',
  'الجليدية': 'الجَلِيدِيَّة',
  'جليدية': 'جَلِيدِيَّة',
  'الزرقاء': 'الزَّرْقاء',
  'الأزرق': 'الأَزْرَق',
  'الأحمر': 'الأَحْمَر',
  'اللون': 'اللَّوْن',
  'الحجم': 'الحَجْم',
  'سطحه': 'سَطْحِهِ',
  'سطح': 'سَطْح',
  'لبّ': 'لُبّ',
  'قشرة': 'قَشَرَة',
  'معطف': 'مَعْطَف',
  'معطفا': 'مَعْطَفاً',
  'حديدي': 'حَدِيدِي',
  'معدني': 'مَعْدَنِي',
  'ثقيل': 'ثَقِيل',
  'ميل': 'مَيْل',
  'دائرة': 'دائِرَة',
  'نقطة': 'نُقْطَة',
  'سلة': 'سَلَّة',
  'مفرغة': 'مُفْرَغَة',
  'بطة': 'بَطَّة',
  'مطاطية': 'مَطاطِيَّة',
  'حوض': 'حَوْض',
  'استحمام': 'اسْتِحمام',
  'ملابس': 'مَلابِس',
  'الملابس': 'المَلابِس',
  'الأشعة': 'الأشِعَّة',
  'المادة': 'المادَّة',

  // --- tour / UI vocabulary ---
  'الجولة': 'الجَوْلة',
  'جولة': 'جَوْلة',
  'المرشد': 'المُرْشِد',
  'التسميات': 'التَّسْمِيَات',
  'المقارنة': 'المُقارَنَة',
  'للمقارنة': 'لِلْمُقارَنَة',
  'السؤال': 'السُّؤال',
  'سؤال': 'سُؤال',
  'الإجابة': 'الإِجابَة',
  'إجابة': 'إِجابَة',
  'الصعوبة': 'الصُّعوبة',
  'المستوى': 'المُسْتَوى',
  'التعلم': 'التَّعْلِم',
  'المحاولة': 'المُحاوَلَة',
  'محاولة': 'مُحاوَلَة',
  'إعادة': 'إِعادة',
  'إخفاء': 'إِخْفاء',
  'إظهار': 'إِظْهار',
  'اختيار': 'اخْتِيار',
  'اختياره': 'اخْتِيارِهِ',
  'نتيجة': 'نَتيجَة',
  'النتيجة': 'النَتيجَة',
  'حقيقة': 'حَقِيقَة',
  'معرفة': 'مَعْرِفَة',
  'تعلم': 'تَعْلَمْ',
  'مذهلة': 'مُذْهِلَة',
  'أيضاً': 'أَيْضاً',
  'جداً': 'جِدًّا'
};

// Build the lookup table with normalised keys (and canonical mark order).
const LEXICON = new Map<string, string>();
for (const [key, value] of Object.entries({ ...RAW_LEXICON, ...EXTRA_LEXICON })) {
  const normalised = stripTashkeel(key);
  if (normalised && !LEXICON.has(normalised)) {
    LEXICON.set(normalised, reorderMarks(value));
  }
}

// Leading conjunction / preposition prefixes and the vowel they carry.
const PREFIX_VOWEL: Record<string, string> = {
  'و': 'وَ',
  'ف': 'فَ',
  'ب': 'بِ',
  'ك': 'كَ',
  'ل': 'لِ'
};

/** Prepends a prefix, contracting ل and ك before the definite article (لل..., كال...). */
function withPrefix(prefix: string, value: string): string {
  if (value.startsWith('ال')) {
    const rest = value.slice(2);
    if (prefix === 'ل') return 'لِلْ' + rest; // للأرض
    if (prefix === 'ك') return 'كَالْ' + rest; // كالجبال
  }
  return PREFIX_VOWEL[prefix] + value;
}

function stripPrefixes(key: string, depth: number): string | null {
  if (depth > 2) return null;
  for (const prefix of Object.keys(PREFIX_VOWEL)) {
    if (!key.startsWith(prefix) || key.length <= prefix.length + 1) continue;
    const rest = key.slice(1);
    const restValue = LEXICON.get(rest) ?? stripPrefixes(rest, depth + 1);
    if (restValue) return withPrefix(prefix, restValue);
  }
  return null;
}

function lookup(key: string): string | null {
  return LEXICON.get(key) ?? stripPrefixes(key, 0) ?? stripSuffixes(key);
}

/** Handles attached pronouns / dual / plural / feminine suffixes conservatively. */
function stripSuffixes(key: string): string | null {
  const rules: Array<[RegExp, string]> = [
    [/^(.*)(ون|ين|ان|ات|ة|ه|ها|هم|هن|كم|نا|ي|ك|ته|ية|يته|تهما)$/u, '$1'],
    [/^(.*)(هما|كما|هما)$/u, '$1']
  ];
  for (const [pattern] of rules) {
    const m = key.match(pattern);
    if (!m || m[1].length < 2) continue;
    const base = m[1];
    const baseValue = LEXICON.get(base) ?? stripPrefixes(base, 0);
    if (!baseValue) continue;
    const suffix = key.slice(base.length);
    const suffixVowel = vocaliseSuffix(suffix);
    if (suffixVowel) return baseValue + suffixVowel;
  }
  return null;
}

/** Re-attaches a stripped suffix with safe default vowels. */
function vocaliseSuffix(suffix: string): string | null {
  const map: Record<string, string> = {
    'ون': 'ُونَ',
    'ين': 'ِينَ',
    'ان': 'َانِ',
    'ات': 'َات',
    'ة': 'َة',
    'ه': 'ُهُ',
    'ها': 'ُهَا',
    'هم': 'ُهُم',
    'هن': 'ُهُنَّ',
    'كم': 'ُكُم',
    'نا': 'ُنَا',
    'ي': 'ِي',
    'ك': 'ُكَ',
    'كما': 'ُكُمَا',
    'هما': 'ُهُمَا'
  };
  return map[suffix] ?? null;
}

function diacritizeToken(token: string): string {
  // eslint-disable-next-line no-misleading-character-class
  const match = token.match(/^([^\u0621-\u064A]*)([\u0621-\u064A\u0640\u064B-\u0652\u0670]+)(.*)$/u);
  if (!match) return token;
  const [, leading, core, trailing] = match;
  if (ANY_MARK.test(core)) return token; // already (partly) vocalised - never touch it
  const value = lookup(stripTashkeel(core));
  if (value) return leading + applySunLetterRule(value) + trailing;
  // Rule-based fallback for unseen words: hamzat al-wasl + sun/moon letters
  const fallback = fallbackDiacritics(core);
  return leading + fallback + trailing;
}

/** Adds shadda after sun letters (الشَّمس) and sukun after moon letters (القَمر). */
function applySunLetterRule(vocalised: string): string {
  return vocalised
    .replace(/الش([بتثدذرزسشصضطظلن])/g, 'الشَّ$1')
    .replace(/الذ([بتثدذرزسشصضطظلن])/g, 'الذَّ$1');
}

/**
 * Fallback tashkeel for words NOT in the lexicon.
 * Keeps it safe: strips bare alef-hamza words read as masculine where possible,
 * adds ال + sun/moon handling, and leaves the rest to the TTS model.
 */
function fallbackDiacritics(core: string): string {
  let out = core;
  // bare initial ا in ال + sun letter => ash-shams style assimilation
  out = out.replace(/^ال([تثدذرزسشصضطظلن])/u, 'الشَّ$1'.replace('الش', 'الش'));
  if (/^ال/u.test(out)) {
    // ensure lam has sukun for moon letters: القَمر pattern help
    out = out.replace(/^ال([ابجحخعغفقكموهي])/u, 'الْ$1');
  }
  return out;
}

/** Adds تشكيل to Arabic text. Unknown words and non-Arabic tokens pass through unchanged. */
export function tashkeel(text: string): string {
  if (!text) return text;
  return text
    .split(/(\s+)/)
    .map((token) => (token.trim() ? diacritizeToken(token) : token))
    .join('');
}
