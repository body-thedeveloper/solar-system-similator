import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PlanetData } from '../data/planetData';
import { useLanguage } from '../context/LanguageContext';
import { getPlanetTranslationKeys } from '../i18n/translations';

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
  const isStanding = !!solarApi && ((solarApi.getFollowingPlanetId && solarApi.getFollowingPlanetId() === planet.id));

  const parentId = (planet as any).parentId;
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

  return (
    <div className="absolute top-20 right-5 w-80 liquid-glass liquid-glass-glow text-white rounded-2xl overflow-hidden z-20 animate-slideIn transition-all duration-500">
      <div className="relative">
        <button 
          onClick={onClose}
          className={`absolute top-3 ${language === 'ar' ? 'left-3' : 'right-3'} p-1 liquid-glass-button shiny-border-hover`}
        >
          <X size={20} />
        </button>
        
        <div className="p-5">
          <div className="flex items-center justify-between mb-1">
            <h2 className="text-2xl font-bold">{isMoon ? displayName : (t(planet.id as any) || planet.name)}{parentLabel}</h2>
            {!isMoon && planet.id !== 'sun' && solarApi && (
              <button
                onClick={() => {
                  if (solarApi.getFollowingPlanetId && solarApi.getFollowingPlanetId() === planet.id) {
                    solarApi.stopFollowPlanet?.();
                  } else {
                    const height = Math.max(1, planet.radius + 0.6);
                    solarApi.followPlanet?.(planet.id, height, true);
                  }
                }}
                className="ml-2 px-3 py-1 liquid-glass-button shiny-border-hover text-sm"
              >
                {solarApi.getFollowingPlanetId && solarApi.getFollowingPlanetId() === planet.id ? t('stopStanding') || 'Stop Standing' : t('stand') || 'Stand'}
              </button>
            )}
          </div>
          <div className="w-full h-0.5 bg-white/20 mb-4"></div>
          
          {showComparison && (
            <div className="flex gap-2 mb-4">
              <button
                className={`px-3 py-1 liquid-glass-button shiny-border-hover text-xs font-semibold disabled:opacity-50`}
                onClick={() => onChooseAsA && onChooseAsA(planet)}
                disabled={comparisonPlanets?.planetA?.id === planet.id}
              >
                {comparisonPlanets?.planetA?.id === planet.id ? t('chosenAsA') : t('chooseAsA')}
              </button>
              <button
                className={`px-3 py-1 liquid-glass-button shiny-border-hover text-xs font-semibold disabled:opacity-50`}
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
                <div className="flex flex-wrap gap-1">
                  {planet.moons.slice(0, 5).map((moon, index) => (
                    <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                      {language === 'ar' ? (t(moon.name.toLowerCase().replace(/\s+/g, '') as any) || moon.name) : moon.name}
                    </span>
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
                className={`inline-flex items-center gap-2 mt-2 px-4 py-2 liquid-glass-button shiny-border-hover text-white font-semibold ${loading ? 'opacity-70 pointer-events-none' : ''}`}
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