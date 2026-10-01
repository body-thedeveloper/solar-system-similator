import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Sparkles, Disc, Radio } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const CosmicRadio: React.FC = () => {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [currentMode, setCurrentMode] = useState<'deep' | 'nebula' | 'solar'>('deep');
  
  // Widget hover expand / auto-minimize state
  const [isExpanded, setIsExpanded] = useState(false);
  const minimizeTimeoutRef = useRef<any>(null);

  // Web Audio API refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const filterNodeRef = useRef<BiquadFilterNode | null>(null);
  const oscillatorsRef = useRef<OscillatorNode[]>([]);
  const gainNodesRef = useRef<GainNode[]>([]);
  const intervalRef = useRef<any>(null);

  // Sound mode presets (frequencies for gorgeous cinematic cosmic chords)
  const presets = {
    deep: {
      chord: [65.41, 98.00, 130.81, 155.56, 196.00], // C minor 7 (C2, G2, C3, Eb3, G3)
      filterFreq: 220,
      filterQ: 3,
      type: 'sawtooth' as OscillatorType,
      chimeScale: [523.25, 587.33, 622.25, 698.46, 783.99, 932.33, 1046.50] // C minor pentatonic scale for twinkling star chimes
    },
    nebula: {
      chord: [73.42, 110.00, 146.83, 185.00, 220.00], // D Major 7 (D2, A2, D3, F#3, A3)
      filterFreq: 300,
      filterQ: 5,
      type: 'triangle' as OscillatorType,
      chimeScale: [587.33, 659.25, 739.99, 880.00, 987.77, 1174.66] // D major pentatonic scale
    },
    solar: {
      chord: [58.27, 87.31, 116.54, 138.59, 174.61], // Bb minor 7 (Bb1, F2, Bb2, Db3, F3)
      filterFreq: 180,
      filterQ: 4,
      type: 'sine' as OscillatorType,
      chimeScale: [466.16, 523.25, 554.37, 622.25, 698.46, 830.61, 932.33] // Bb minor pentatonic
    }
  };

  const initAudio = async () => {
    if (audioCtxRef.current) {
      if (audioCtxRef.current.state === 'suspended') {
        await audioCtxRef.current.resume();
      }
      return;
    }

    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();
      audioCtxRef.current = ctx;

      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      // Master Gain
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.15, ctx.currentTime); // keep overall synth quiet & atmospheric
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Lowpass filter to keep drone warm and deep
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(presets[currentMode].filterFreq, ctx.currentTime);
      filter.Q.setValueAtTime(presets[currentMode].filterQ, ctx.currentTime);
      filter.connect(masterGain);
      filterNodeRef.current = filter;

      // Create drone oscillators
      const activeChord = presets[currentMode].chord;
      const activeType = presets[currentMode].type;

      activeChord.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        // Slightly detune to create lush chorus/beating effect
        osc.type = activeType;
        osc.frequency.setValueAtTime(freq + (Math.random() * 0.8 - 0.4), ctx.currentTime);

        // Slow breathing volume envelopes
        const breathingVolume = 0.12 + Math.random() * 0.08;
        gainNode.gain.setValueAtTime(breathingVolume, ctx.currentTime);

        osc.connect(gainNode);
        gainNode.connect(filter);
        osc.start();

        oscillatorsRef.current.push(osc);
        gainNodesRef.current.push(gainNode);
      });

      // Periodic modulation loop (creates evolving "breathing" space pads and twinkles star chimes)
      startModulationLoop();
    } catch (err) {
      console.error('Failed to initialize space audio synth:', err);
    }
  };

  const startModulationLoop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      const ctx = audioCtxRef.current;
      const filter = filterNodeRef.current;
      const gains = gainNodesRef.current;

      if (!ctx || ctx.state === 'suspended' || !filter) return;

      const now = ctx.currentTime;

      // 1. Slow filter cutoff frequency sweep (simulates cosmic winds shifting)
      const baseFreq = presets[currentMode].filterFreq;
      const randomSweep = baseFreq + (Math.sin(now * 0.1) * (baseFreq * 0.4));
      filter.frequency.exponentialRampToValueAtTime(Math.max(80, randomSweep), now + 3);

      // 2. Slow breathing gains
      gains.forEach((gn) => {
        const targetGain = 0.08 + Math.random() * 0.12;
        gn.gain.linearRampToValueAtTime(targetGain, now + 3.5);
      });

      // 3. Twinkling celestial star chimes (45% chance every 3.5 seconds)
      if (Math.random() < 0.45) {
        triggerCelestialChime();
      }
    }, 3500);
  };

  const triggerCelestialChime = () => {
    const ctx = audioCtxRef.current;
    const masterGain = masterGainRef.current;
    if (!ctx || !masterGain) return;

    const now = ctx.currentTime;
    const scale = presets[currentMode].chimeScale;
    const randomFreq = scale[Math.floor(Math.random() * scale.length)];

    const chimeOsc = ctx.createOscillator();
    const chimeGain = ctx.createGain();
    const delayNode = ctx.createDelay();
    const delayFeedback = ctx.createGain();

    chimeOsc.type = 'sine';
    chimeOsc.frequency.setValueAtTime(randomFreq, now);

    // Gorgeous bell/triangle envelope
    chimeGain.gain.setValueAtTime(0.015, now);
    chimeGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

    // Create a beautiful spatial space echo delay
    delayNode.delayTime.setValueAtTime(0.35, now);
    delayFeedback.gain.setValueAtTime(0.4, now);

    // Connections: Osc -> Gain -> Echo Delay Line -> Master Gain
    chimeOsc.connect(chimeGain);
    chimeGain.connect(masterGain);

    // Feed delay back to delay feedback
    chimeGain.connect(delayNode);
    delayNode.connect(delayFeedback);
    delayFeedback.connect(delayNode);
    delayFeedback.connect(masterGain);

    chimeOsc.start(now);
    chimeOsc.stop(now + 2.0);
  };

  const stopAudio = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Fade out smoothly before stopping
    const ctx = audioCtxRef.current;
    const masterGain = masterGainRef.current;
    if (ctx && masterGain) {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
      setTimeout(() => {
        oscillatorsRef.current.forEach((osc) => {
          try { osc.stop(); } catch (e) {}
        });
        oscillatorsRef.current = [];
        gainNodesRef.current = [];
        audioCtxRef.current = null;
        masterGainRef.current = null;
        filterNodeRef.current = null;
      }, 500);
    }
  };

  const handlePlayToggle = () => {
    if (isPlaying) {
      stopAudio();
      setIsPlaying(false);
    } else {
      initAudio();
      setIsPlaying(true);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.linearRampToValueAtTime(val * 0.15, audioCtxRef.current.currentTime + 0.1);
    }
  };

  const changeMode = (mode: 'deep' | 'nebula' | 'solar') => {
    setCurrentMode(mode);
    if (!isPlaying) return;

    // Smoothly transition chord frequencies
    const ctx = audioCtxRef.current;
    if (ctx) {
      const now = ctx.currentTime;
      const filter = filterNodeRef.current;
      if (filter) {
        filter.frequency.exponentialRampToValueAtTime(presets[mode].filterFreq, now + 1.5);
        filter.Q.setValueAtTime(presets[mode].filterQ, now + 1.5);
      }

      // Re-route drone oscillators to new chord
      const newChord = presets[mode].chord;
      const newType = presets[mode].type;

      oscillatorsRef.current.forEach((osc, idx) => {
        if (newChord[idx]) {
          osc.type = newType;
          osc.frequency.exponentialRampToValueAtTime(newChord[idx] + (Math.random() * 0.8 - 0.4), now + 1.5);
        }
      });
    }
  };

  // Hover expand / collapse management
  const handleMouseEnter = () => {
    setIsExpanded(true);
    if (minimizeTimeoutRef.current) {
      clearTimeout(minimizeTimeoutRef.current);
      minimizeTimeoutRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    minimizeTimeoutRef.current = setTimeout(() => {
      setIsExpanded(false);
    }, 3500); // collapse after 3.5 seconds of mouse leaving
  };

  useEffect(() => {
    return () => {
      stopAudio();
      if (minimizeTimeoutRef.current) clearTimeout(minimizeTimeoutRef.current);
    };
  }, []);

  // Standard minimized state widget
  if (!isExpanded) {
    return (
      <button
        onMouseEnter={handleMouseEnter}
        onClick={handleMouseEnter}
        className={`liquid-glass text-white p-3 rounded-full flex items-center gap-2.5 shadow-lg border border-cyan-500/30 cursor-pointer animate-pulse-glow transition-all duration-300 hover:scale-110 active:scale-95 ${
          language === 'ar' ? 'rtl' : 'ltr'
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Disc className={`w-5 h-5 text-cyan-400 ${isPlaying ? 'animate-spin-slow' : ''}`} />
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
          )}
        </div>
        <span className="text-xs font-bold tracking-wider whitespace-nowrap pr-1 select-none">
          {language === 'ar' ? 'الراديو الكوني' : 'COSMIC DJ'}
        </span>

        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.2); border-color: rgba(6, 182, 212, 0.3); }
            50% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.5); border-color: rgba(6, 182, 212, 0.6); }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2.5s infinite;
          }
        `}</style>
      </button>
    );
  }

  // Fully expanded state widget on hover
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`liquid-glass text-white p-4 rounded-2xl flex flex-col gap-3 min-w-[240px] shadow-2xl border border-cyan-500/40 animate-scaleIn transition-all duration-300 ${language === 'ar' ? 'rtl' : 'ltr'}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Radio className={`w-5 h-5 text-cyan-400 ${isPlaying ? 'animate-pulse' : ''}`} />
          <h3 className="font-bold text-sm tracking-wider flex flex-col">
            <span>COSMIC RADIO DJ</span>
            <span className="text-[10px] text-cyan-300 font-arabic">الراديو الكوني الموسيقي</span>
          </h3>
        </div>
        <button
          onClick={handlePlayToggle}
          className={`p-2 rounded-full transition-all duration-300 border ${
            isPlaying
              ? 'bg-red-500/20 border-red-500/40 text-red-300 scale-105 shadow-md shadow-red-500/20'
              : 'bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:scale-105 hover:bg-cyan-500/30'
          }`}
          title={isPlaying ? (language === 'ar' ? 'إيقاف الموسيقى' : 'Stop Music') : (language === 'ar' ? 'تشغيل الموسيقى' : 'Start Music')}
        >
          {isPlaying ? (
            <div className="flex items-center gap-1.5 px-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              <span className="text-xs font-semibold">OFF</span>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 px-0.5">
              <Music size={14} className="animate-bounce" />
              <span className="text-xs font-semibold">ON</span>
            </div>
          )}
        </button>
      </div>

      <div className="w-full h-[1px] bg-white/10"></div>

      {/* Synth Presets */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] text-gray-400 font-semibold tracking-wider flex justify-between">
          <span>ATMOSPHERE MODE</span>
          <span className="font-arabic text-gray-500">وضع الغلاف الموسيقي</span>
        </span>
        <div className="grid grid-cols-3 gap-1">
          <button
            onClick={() => changeMode('deep')}
            className={`text-[10px] py-1.5 rounded-lg transition-all duration-200 border font-semibold ${
              currentMode === 'deep'
                ? 'bg-cyan-500/30 border-cyan-400 text-cyan-300 scale-105'
                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Deep Space
          </button>
          <button
            onClick={() => changeMode('nebula')}
            className={`text-[10px] py-1.5 rounded-lg transition-all duration-200 border font-semibold ${
              currentMode === 'nebula'
                ? 'bg-purple-500/30 border-purple-400 text-purple-300 scale-105'
                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Nebula Dream
          </button>
          <button
            onClick={() => changeMode('solar')}
            className={`text-[10px] py-1.5 rounded-lg transition-all duration-200 border font-semibold ${
              currentMode === 'solar'
                ? 'bg-amber-500/30 border-amber-400 text-amber-300 scale-105'
                : 'bg-white/5 border-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            Solar Wind
          </button>
        </div>
      </div>

      {/* Volume control */}
      <div className="flex items-center gap-3 mt-1">
        {volume === 0 ? <VolumeX size={15} className="text-gray-400" /> : <Volume2 size={15} className="text-cyan-300" />}
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          onChange={handleVolumeChange}
          className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-cyan-400 outline-none"
        />
        <span className="text-[10px] font-mono text-cyan-300">{Math.round(volume * 100)}%</span>
      </div>

      {isPlaying && (
        <div className="flex items-center justify-center gap-1 text-[9px] text-cyan-300/80 animate-pulse mt-0.5 font-mono">
          <Sparkles size={10} className="animate-spin text-cyan-400" />
          <span>REAL-TIME DYNAMIC SYNTHESIZER ACTIVE</span>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92) translateY(5px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default CosmicRadio;