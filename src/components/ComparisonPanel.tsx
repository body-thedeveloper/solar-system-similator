import React from 'react';
import { X } from 'lucide-react';
import { PlanetData } from '../assets/textures/planetData';

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
          <h2 className="text-xl font-bold">Planet Comparison</h2>
          <div className="flex gap-2">
            <button 
              onClick={onReset}
              className="px-3 py-1 text-sm rounded bg-white/10 hover:bg-white/20 transition-colors"
            >
              Reset
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
              <p className="text-gray-300">Click on planets to select them for comparison</p>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <h3 className="text-gray-400 border-b border-gray-700 pb-2 mb-2">Property</h3>
                  <div className="space-y-3">
                    <p className="py-1">Name</p>
                    <p className="py-1">Diameter</p>
                    <p className="py-1">Mass</p>
                    <p className="py-1">Day Length</p>
                    <p className="py-1">Year Length</p>
                    <p className="py-1">Distance from Sun</p>
                    <p className="py-1">Orbital Speed</p>
                    <p className="py-1">Average Temperature</p>
                    <p className="py-1">Number of Moons</p>
                  </div>
                </div>
                
                <div className="col-span-1">
                  <h3 className={`text-center border-b border-gray-700 pb-2 mb-2 ${planetA ? 'text-white' : 'text-gray-500'}`}>
                    {planetA ? planetA.name : 'Select Planet A'}
                  </h3>
                  {planetA ? (
                    <div className="space-y-3">
                      <p className="py-1 text-center">{planetA.name}</p>
                      <p className="py-1 text-center">{planetA.diameter.toLocaleString()} km</p>
                      <p className="py-1 text-center">{planetA.mass}</p>
                      <p className="py-1 text-center">{planetA.dayLength}</p>
                      <p className="py-1 text-center">{planetA.yearLength}</p>
                      <p className="py-1 text-center">{(planetA.distanceFromSun * 0.1).toFixed(1)} million km</p>
                      <p className="py-1 text-center">{planetA.orbitSpeed.toFixed(4)}</p>
                      <p className="py-1 text-center">{planetA.avgTemp}</p>
                      <p className="py-1 text-center">{planetA.moons?.length || 0}</p>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Click a planet</p>
                    </div>
                  )}
                </div>
                
                <div className="col-span-1">
                  <h3 className={`text-center border-b border-gray-700 pb-2 mb-2 ${planetB ? 'text-white' : 'text-gray-500'}`}>
                    {planetB ? planetB.name : 'Select Planet B'}
                  </h3>
                  {planetB ? (
                    <div className="space-y-3">
                      <p className="py-1 text-center">{planetB.name}</p>
                      <p className="py-1 text-center">{planetB.diameter.toLocaleString()} km</p>
                      <p className="py-1 text-center">{planetB.mass}</p>
                      <p className="py-1 text-center">{planetB.dayLength}</p>
                      <p className="py-1 text-center">{planetB.yearLength}</p>
                      <p className="py-1 text-center">{(planetB.distanceFromSun * 0.1).toFixed(1)} million km</p>
                      <p className="py-1 text-center">{planetB.orbitSpeed.toFixed(4)}</p>
                      <p className="py-1 text-center">{planetB.avgTemp}</p>
                      <p className="py-1 text-center">{planetB.moons?.length || 0}</p>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Click a planet</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Comparison results */}
              {planetA && planetB && (
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <h3 className="text-lg font-bold mb-3">Comparison Results</h3>
                  <div className="space-y-2">
                    <p>
                      <span className="text-gray-300">Size difference:</span>{' '}
                      {planetA.diameter > planetB.diameter 
                        ? `${planetA.name} is ${(planetA.diameter / planetB.diameter).toFixed(1)}x larger than ${planetB.name}`
                        : `${planetB.name} is ${(planetB.diameter / planetA.diameter).toFixed(1)}x larger than ${planetA.name}`
                      }
                    </p>
                    <p>
                      <span className="text-gray-300">Orbital speed ratio:</span>{' '}
                      {speedRatio && `${planetA.name}'s orbital speed is ${speedRatio}x ${parseFloat(speedRatio) > 1 ? 'faster' : 'slower'} than ${planetB.name}'s`}
                    </p>
                    <p>
                      <span className="text-gray-300">Distance between planets:</span>{' '}
                      {distanceDifference && `Approximately ${distanceDifference.toFixed(1)} million kilometers`}
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