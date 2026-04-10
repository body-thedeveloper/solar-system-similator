import React from 'react';
import { X } from 'lucide-react';
import { PlanetData } from '../data/planetData';
import { useLanguage } from '../context/LanguageContext';

interface ComparisonPanelProps {
  planetA: PlanetData | null;
  planetB: PlanetData | null;
  onReset: () => void;
  onClose: () => void;
}

const ComparisonPanel: React.FC<ComparisonPanelProps> = ({ 
  planetA, 
  planetB, 
  onReset, 
  onClose 
}) => {
  const { t } = useLanguage();
  
  // Function to translate time values
  const translateTimeValue = (value: string): string => {
    let translated = value;
    // Replace English time units with translated ones (longer strings first)
    translated = translated.replace(/Earth years/g, t('earthYears'));
    translated = translated.replace(/Earth days/g, t('earthDays'));
    translated = translated.replace(/hours/g, t('hours'));
    translated = translated.replace(/minutes/g, t('minutes'));
    translated = translated.replace(/seconds/g, t('seconds'));
    translated = translated.replace(/days/g, t('days'));
    return translated;
  };
  
  // Calculate speed ratio if both planets are selected
  const speedRatio = planetA && planetB 
    ? (planetA.orbitSpeed / planetB.orbitSpeed).toFixed(2)
    : null;
  
  // Calculate distance difference if both planets are selected
  const distanceDifference = planetA && planetB 
    ? Math.abs(planetA.distanceFromSun - planetB.distanceFromSun) * 0.1
    : null;

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[600px] max-w-[90vw] bg-black/80 backdrop-blur-md text-white rounded-lg overflow-hidden z-20 transition-all duration-300 ease-in-out animate-slideIn">
      <div className="relative">
        <div className="flex justify-between items-center p-4 border-b border-white/20">
          <h2 className="text-xl font-bold">{t('planetComparison')}</h2>
          <div className="flex gap-2">
            <button 
              onClick={onReset}
              className="px-3 py-1 text-sm rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              {t('reset')}
            </button>
            <button 
              onClick={onClose}
              className="p-1 rounded-full hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-5">
          {!planetA && !planetB ? (
            <div className="text-center py-8">
              <p className="text-gray-300">{t('selectTwoPlanets')}</p>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <h3 className="text-gray-400 border-b border-gray-700 pb-2 mb-2">{t('property')}</h3>
                  <div className="space-y-3">
                    <p className="py-1">{t('name')}</p>
                    <p className="py-1">{t('diameter')}</p>
                    <p className="py-1">{t('mass')}</p>
                    <p className="py-1">{t('dayLength')}</p>
                    <p className="py-1">{t('yearLength')}</p>
                    <p className="py-1">{t('distanceFromSun')}</p>
                    <p className="py-1">{t('orbitalSpeed')}</p>
                    <p className="py-1">{t('avgTemperature')}</p>
                    <p className="py-1">{t('moons')}</p>
                  </div>
                </div>
                
                <div className="col-span-1">
                  <h3 className={`text-center border-b border-gray-700 pb-2 mb-2 ${planetA ? 'text-white' : 'text-gray-500'}`}>
                    {planetA ? t(planetA.id) || planetA.name : t('selectPlanetA')}
                  </h3>
                  {planetA ? (
                    <div className="space-y-3">
                      <p className="py-1 text-center">{t(planetA.id) || planetA.name}</p>
                      <p className="py-1 text-center">{planetA.diameter.toLocaleString()} km</p>
                      <p className="py-1 text-center">{planetA.mass}</p>
                      <p className="py-1 text-center">{translateTimeValue(planetA.dayLength)}</p>
                      <p className="py-1 text-center">{translateTimeValue(planetA.yearLength)}</p>
                      <p className="py-1 text-center">{(planetA.distanceFromSun * 0.1).toFixed(1)} {t('millionKm')}</p>
                      <p className="py-1 text-center">{planetA.orbitSpeed.toFixed(4)}</p>
                      <p className="py-1 text-center">{planetA.avgTemp}</p>
                      <p className="py-1 text-center">{planetA.moons?.length || 0}</p>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">{t('clickAPlanet')}</p>
                    </div>
                  )}
                </div>
                
                <div className="col-span-1">
                  <h3 className={`text-center border-b border-gray-700 pb-2 mb-2 ${planetB ? 'text-white' : 'text-gray-500'}`}>
                    {planetB ? t(planetB.id) || planetB.name : t('selectPlanetB')}
                  </h3>
                  {planetB ? (
                    <div className="space-y-3">
                      <p className="py-1 text-center">{t(planetB.id) || planetB.name}</p>
                      <p className="py-1 text-center">{planetB.diameter.toLocaleString()} km</p>
                      <p className="py-1 text-center">{planetB.mass}</p>
                      <p className="py-1 text-center">{translateTimeValue(planetB.dayLength)}</p>
                      <p className="py-1 text-center">{translateTimeValue(planetB.yearLength)}</p>
                      <p className="py-1 text-center">{(planetB.distanceFromSun * 0.1).toFixed(1)} {t('millionKm')}</p>
                      <p className="py-1 text-center">{planetB.orbitSpeed.toFixed(4)}</p>
                      <p className="py-1 text-center">{planetB.avgTemp}</p>
                      <p className="py-1 text-center">{planetB.moons?.length || 0}</p>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">{t('clickAPlanet')}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Comparison results */}
              {planetA && planetB && planetA.id !== planetB.id && (
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">{t('comparisonResults')}</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="text-gray-300">{t('sizeDifference')}:</span>{' '}
                      {planetA.diameter > planetB.diameter && planetB.diameter !== 0
                        ? `${t(planetA.id) || planetA.name} ${t('is')} ${(planetA.diameter / planetB.diameter).toFixed(1)}x ${t('larger')} ${t('than')} ${t(planetB.id) || planetB.name}`
                        : planetB.diameter > planetA.diameter && planetA.diameter !== 0
                        ? `${t(planetB.id) || planetB.name} ${t('is')} ${(planetB.diameter / planetA.diameter).toFixed(1)}x ${t('larger')} ${t('than')} ${t(planetA.id) || planetA.name}`
                        : t('sameSizeMoons')}
                    </p>
                    <p>
                      <span className="text-gray-300">{t('orbitalSpeedRatio')}:</span>{' '}
                      {speedRatio && planetB.orbitSpeed !== 0
                        ? `${t(planetA.id) || planetA.name} ${t('is')} ${speedRatio}x ${parseFloat(speedRatio) > 1 ? t('faster') : t('slower')} ${t('than')} ${t(planetB.id) || planetB.name}`
                        : 'N/A'}
                    </p>
                    <p>
                      <span className="text-gray-300">{t('distanceBetweenPlanets')}:</span>{' '}
                      {distanceDifference && `${t('approximately')} ${distanceDifference.toFixed(1)} ${t('million')} ${t('kilometers')}`}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonPanel;