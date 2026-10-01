import React, { useState, useEffect } from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';
import { PlanetData } from '../data/planetData';
import { useLanguage } from '../context/LanguageContext';
import { getPlanetTranslationKeys } from '../i18n/translations';
import { isSpeechSupported, speakText, stopSpeech } from '../utils/speech';

interface InfoPanelProps {
  planet: PlanetData;
  onClose: () => void;
  showComparison?: boolean;
  comparisonPlanets?: {
    planetA: PlanetData | null;
    planetB: PlanetData | null;
  };
  onChooseAsA?: (planet: PlanetData) => void;
  onChooseAsB?: (planet: PlanetData) => void;
  solarApi?: any;
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  planet,
  onClose,
  showComparison,
  comparisonPlanets,
  onChooseAsA,
  onChooseAsB,
  solarApi
}) => {
  // NASA links for planets and sun
  const nasaLinks: Record<string, string> = {
    mercury: 'https://science.nasa.gov/mercury/',
    venus: 'https://science.nasa.gov/venus/',
    earth: 'https://science.nasa.gov/earth/',
    mars: 'https://science.nasa.gov/mars/',
    jupiter: 'https://science.nasa.gov/jupiter/',
    saturn: 'https://science.nasa.gov/saturn/',
    uranus: 'https://science.nasa.gov/uranus/',
    neptune: 'https://science.nasa.gov/neptune/',
    sun: 'https://science.nasa.gov/sun/'
  };
  let nasaUrl = nasaLinks[planet.id.toLowerCase()] || 'https://science.nasa.gov/solar-system/';
  // For moons, prefer a NASA search link for the moon name (better coverage)
  if ((planet as any).isMoon || (planet as any).parentId) {
    nasaUrl = `https://www.nasa.gov/search?q=${encodeURIComponent(planet.name)}`;
  }
  
  const { t, language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);
  
  const parentId = (planet as any).parentId;

  // Cosmic sound synthesizer
  const playSpaceChime = (type: 'beep' | 'swoosh' | 'chime') => {
    if (!('AudioContext' in window || 'webkitAudioContext' in window)) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;
      
      if (type === 'chime') {
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(880, now); 
        osc1.frequency.exponentialRampToValueAtTime(1760, now + 0.15); 
        
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(1320, now); 
        
        gainNode.gain.setValueAtTime(0.12, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        
        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.8);
        osc2.stop(now + 0.8);
      } else if (type === 'swoosh') {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gainNode = ctx.createGain();
        
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(100, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.5);
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(300, now);
        filter.frequency.exponentialRampToValueAtTime(1500, now + 0.4);
        filter.Q.setValueAtTime(5, now);
        
        gainNode.gain.setValueAtTime(0.06, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
        
        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.6);
      } else if (type === 'beep') {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, now);
        
        gainNode.gain.setValueAtTime(0.04, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(now);
        osc.stop(now + 0.15);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Text-To-Speech Narrator with multi-language capability
  const handleNarrateToggle = () => {
    if (!isSpeechSupported()) {
      alert(language === 'ar' ? 'متصفحك لا يدعم توليد الصوت.' : 'Text-to-speech is not supported in your browser.');
      return;
    }

    if (isNarrating) {
      stopSpeech();
      setIsNarrating(false);
      playSpaceChime('beep');
      return;
    }

    playSpaceChime('chime');

    // Build speech text
    const pName = isMoon ? displayName : (t(planet.id as any) || planet.name);
    const factsLabel = language === 'ar' ? 'معلومات سريعة' : 'Quick Facts';
    const diameterLabel = t('diameter');
    const dVal = `${planet.diameter.toLocaleString()} ${t('km')}`;
    const funFactLabel = t('funFact');
    
    // Full narration - periods help the shared engine split into natural pauses
    const fullSpokenText = `${pName}. ${displayDescription}. ${factsLabel}. ${diameterLabel} ${dVal}. ${funFactLabel} ${displayFunFact}.`;

    // Legacy inline TTS removed - shared engine (tashkeel + male voice) handles it

    setIsNarrating(true);
    speakText(fullSpokenText, {
      lang: language === 'ar' ? 'ar' : 'en',
      onEnd: () => setIsNarrating(false),
    });
  };

  // Stop narration on unmount or when selected planet changes
  useEffect(() => {
    stopSpeech();
    setIsNarrating(false);
  }, [planet]);

  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);
  const isMoon = (planet as any).isMoon || parentId;
  
  // For moons, translate the moon name based on current language
  let displayName = planet.name;
  let translatedDescription = planet.description;
  let translatedFunFact = planet.funFact;
  
  if (isMoon) {
    // Translate moon name
    const moonNameKey = planet.name.toLowerCase().replace(/\s+/g, '');
    const translatedMoonName = t(moonNameKey as any);
    // Only use translation if we got back something different (actual translation found)
    if (translatedMoonName && translatedMoonName !== moonNameKey) {
      displayName = translatedMoonName;
    }
    
    // Translate description and fun fact
    translatedDescription = `${t('moonOf')} ${t(parentId as any) || parentId}.`;
    translatedFunFact = `${t('clickLearnMore')}.`;
  }
  
  const parentLabel = parentId ? ` • ${t('moonOf')} ${t(parentId as any) || parentId}` : '';
  
  const translationKeys = getPlanetTranslationKeys(planet.id);
  const displayDescription = translationKeys ? t(translationKeys.description) : (isMoon ? translatedDescription : planet.description);
  const displayFunFact = translationKeys ? t(translationKeys.funFact) : (isMoon ? translatedFunFact : planet.funFact);
  
  // Function to translate time values
  const translateTimeValue = (value: string): string => {
    let translated = value;
    // Replace English time units with translated ones (longer strings first to avoid partial replacements)
    translated = translated.replace(/Earth years/g, t('earthYears'));
    translated = translated.replace(/Earth days/g, t('earthDays'));
    translated = translated.replace(/hours/g, t('hours'));
    translated = translated.replace(/minutes/g, t('minutes'));
    translated = translated.replace(/seconds/g, t('seconds'));
    translated = translated.replace(/days/g, t('days'));
    return translated;
  };

  // Pin/follow planet when panel opens
  useEffect(() => {
    if (solarApi && planet) {
      // Stop any existing following
      solarApi?.stopFollowPlanet?.();
      
      // Check if this is a moon
      const isMoon = (planet as any).isMoon;
      const parentId = (planet as any).parentId;
      const moonKey = isMoon && parentId ? `${parentId}:${planet.name}` : null;
      
      if (isMoon && moonKey && solarApi?.followMoon) {
        // Pause the moon's orbital movement (keep self-rotation)
        solarApi?.pauseMoonOrbit?.(moonKey);
        
        // Follow the moon
        const height = Math.max(1.5, planet.radius + 0.8);
        setTimeout(() => {
          solarApi?.followMoon?.(moonKey, height, true);
        }, 100);
      } else {
        // Select and follow the planet
        solarApi?.selectPlanet?.(planet.id);
        const height = Math.max(1.5, planet.radius + 0.8);
        setTimeout(() => {
          solarApi?.followPlanet?.(planet.id, height, true);
        }, 100);
      }
    }
    
    // Cleanup: stop following and resume moon orbital movement when panel closes
    return () => {
      if (solarApi) {
        solarApi?.stopFollowPlanet?.();
        solarApi?.resumeMoonOrbit?.();
      }
    };
  }, [planet, solarApi]);

  return (
    <div className={`absolute top-20 ${language === 'ar' ? 'left-5' : 'right-5'} w-80 liquid-glass text-white rounded-2xl overflow-hidden z-20 animate-slideIn transition-all duration-500`}>
      <div className="relative">
        <button 
          onClick={onClose}
          className={`absolute top-3 ${language === 'ar' ? 'left-3' : 'right-3'} p-1 liquid-glass-button`}
        >
          <X size={20} />
        </button>
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-1 gap-2">
            <h2 className="text-2xl font-bold pr-6">{isMoon ? displayName : (t(planet.id as any) || planet.name)}{parentLabel}</h2>
            {/* Narrator Button */}
            <button
              onClick={handleNarrateToggle}
              className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center relative ${
                isNarrating
                  ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 scale-110 shadow-lg shadow-cyan-500/25 pulse-glow'
                  : 'bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 hover:scale-105'
              }`}
              title={isNarrating ? (language === 'ar' ? 'إيقاف السرد' : 'Stop Narrator') : (language === 'ar' ? 'تشغيل السرد الصوتي' : 'Play Narrator')}
            >
              {isNarrating ? (
                <div className="flex items-center gap-1.5 px-1">
                  {/* CSS Audio Waveform */}
                  <div className="flex items-end gap-0.5 h-4 w-5">
                    <span className="w-0.5 bg-cyan-300 rounded-full animate-wave-1 origin-bottom h-full" />
                    <span className="w-0.5 bg-cyan-300 rounded-full animate-wave-2 origin-bottom h-3/4" />
                    <span className="w-0.5 bg-cyan-300 rounded-full animate-wave-3 origin-bottom h-full" />
                    <span className="w-0.5 bg-cyan-300 rounded-full animate-wave-4 origin-bottom h-1/2" />
                  </div>
                  <Volume2 size={16} className="text-cyan-300" />
                </div>
              ) : (
                <VolumeX size={18} />
              )}
            </button>
          </div>
          <div className="w-full h-0.5 bg-white/20 mb-4"></div>

          {/* Add CSS keyframes dynamically for waveform bounce */}
          <style>{`
            @keyframes bounce-wave {
              0%, 100% { transform: scaleY(0.3); }
              50% { transform: scaleY(1); }
            }
            .animate-wave-1 { animation: bounce-wave 0.6s ease-in-out infinite; }
            .animate-wave-2 { animation: bounce-wave 0.5s ease-in-out infinite 0.15s; }
            .animate-wave-3 { animation: bounce-wave 0.7s ease-in-out infinite 0.3s; }
            .animate-wave-4 { animation: bounce-wave 0.4s ease-in-out infinite 0.45s; }
            
            @keyframes pulse-glow {
              0%, 100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.2); }
              50% { box-shadow: 0 0 15px rgba(6, 182, 212, 0.6); }
            }
            .pulse-glow {
              animation: pulse-glow 2s infinite;
            }
          `}</style>
          
          {showComparison && (
            <div className="flex gap-2 mb-4">
              <button
                className={`px-3 py-1 liquid-glass-button text-xs font-semibold disabled:opacity-50`}
                onClick={() => onChooseAsA && onChooseAsA(planet)}
                disabled={comparisonPlanets?.planetA?.id === planet.id}
              >
                {comparisonPlanets?.planetA?.id === planet.id ? t('chosenAsA') : t('chooseAsA')}
              </button>
              <button
                className={`px-3 py-1 liquid-glass-button text-xs font-semibold disabled:opacity-50`}
                onClick={() => onChooseAsB && onChooseAsB(planet)}
                disabled={
                  comparisonPlanets?.planetB?.id === planet.id ||
                  comparisonPlanets?.planetA?.id === planet.id
                }
              >
                {comparisonPlanets?.planetB?.id === planet.id ? t('chosenAsB') : t('chooseAsB')}
              </button>
            </div>
          )}

          <div className="space-y-4">
            <p className="text-sm text-gray-300">{displayDescription}</p>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <h3 className="text-gray-400">{t('diameter')}</h3>
                <p>{planet.diameter.toLocaleString()} {t('km')}</p>
              </div>
              <div>
                <h3 className="text-gray-400">{t('mass')}</h3>
                <p>{language === 'ar' ? planet.mass.replace(/\bkg\b/gi, 'كغ') : planet.mass}</p>
              </div>
              <div>
                <h3 className="text-gray-400">{t('dayLength')}</h3>
                <p>{translateTimeValue(planet.dayLength).replace(/\(equator\)/g, ` ${t('equator')}`)}</p>
              </div>
              <div>
                <h3 className="text-gray-400">{t('yearLength')}</h3>
                <p>{translateTimeValue(planet.yearLength)}</p>
              </div>
              <div>
                <h3 className="text-gray-400">{t('avgTemp')}</h3>
                <p>{planet.avgTemp.replace(/\(surface\)/g, ` ${t('surface')}`)}</p>
              </div>
              <div>
                <h3 className="text-gray-400">{t('distanceFromSun')}</h3>
                <p>{(planet.distanceFromSun * 0.1).toFixed(1)} {t('millionKm')}</p>
              </div>
            </div>
            
            {planet.moons && planet.moons.length > 0 && (
              <div>
                <h3 className="text-gray-400 mb-1">{t('moons')} ({planet.moons.length})</h3>
                <div className={`flex flex-wrap gap-1 ${language === 'ar' ? 'justify-end' : 'justify-start'}`}>
                  {planet.moons.slice(0, 5).map((moon, index) => (
                    <button
                      key={index}
                      onClick={() => solarApi?.selectMoon?.(planet.id, moon.name)}
                      className="bg-white/10 hover:bg-white/25 active:bg-white/35 px-2 py-1 rounded-full text-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer text-white border border-white/5 hover:border-white/20"
                    >
                      {language === 'ar' ? (t(moon.name.toLowerCase().replace(/\s+/g, '') as any) || moon.name) : moon.name}
                    </button>
                  ))}
                  {planet.moons.length > 5 && (
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs">
                      +{planet.moons.length - 5} {t('more')}
                    </span>
                  )}
                </div>
              </div>
            )}
            
            <div>
              <h3 className="text-gray-400 mb-1">{t('funFact')}</h3>
              <p className="text-sm italic">{displayFunFact}</p>
            </div>

            <div>
              <a
                href={nasaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-2 px-4 py-2 liquid-glass-button text-white font-semibold ${loading ? 'opacity-70 pointer-events-none' : ''}`}
                onClick={() => setLoading(true)}
              >
                {loading && (
                  <svg className="animate-spin h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                )}
                {t('learnMore')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
