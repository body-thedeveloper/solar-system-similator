import React from 'react';
import { X } from 'lucide-react';
import { PlanetData } from '../assets/textures/planetData';

interface InfoPanelProps {
  planet: PlanetData;
  onClose: () => void;
}

const InfoPanel: React.FC<InfoPanelProps> = ({ planet, onClose }) => {
  return (
    <div className="absolute top-20 right-5 w-80 bg-black/80 backdrop-blur-md text-white rounded-lg overflow-hidden z-20 transition-all duration-300 ease-in-out animate-slideIn">
      <div className="relative">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/20 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-1">{planet.name}</h2>
          <div className="w-full h-0.5 bg-white/20 mb-4"></div>
          
          <div className="space-y-4">
            <p className="text-sm text-gray-300">{planet.description}</p>
            
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <h3 className="text-gray-400">Diameter</h3>
                <p>{planet.diameter.toLocaleString()} km</p>
              </div>
              <div>
                <h3 className="text-gray-400">Mass</h3>
                <p>{planet.mass}</p>
              </div>
              <div>
                <h3 className="text-gray-400">Day Length</h3>
                <p>{planet.dayLength}</p>
              </div>
              <div>
                <h3 className="text-gray-400">Year Length</h3>
                <p>{planet.yearLength}</p>
              </div>
              <div>
                <h3 className="text-gray-400">Avg. Temp</h3>
                <p>{planet.avgTemp}</p>
              </div>
              <div>
                <h3 className="text-gray-400">Distance from Sun</h3>
                <p>{(planet.distanceFromSun * 0.1).toFixed(1)} million km</p>
              </div>
            </div>
            
            {planet.moons && planet.moons.length > 0 && (
              <div>
                <h3 className="text-gray-400 mb-1">Moons ({planet.moons.length})</h3>
                <div className="flex flex-wrap gap-1">
                  {planet.moons.slice(0, 5).map((moon, index) => (
                    <span key={index} className="bg-white/10 px-2 py-1 rounded-full text-xs">
                      {moon.name}
                    </span>
                  ))}
                  {planet.moons.length > 5 && (
                    <span className="bg-white/10 px-2 py-1 rounded-full text-xs">
                      +{planet.moons.length - 5} more
                    </span>
                  )}
                </div>
              </div>
            )}
            
            <div>
              <h3 className="text-gray-400 mb-1">Fun Fact</h3>
              <p className="text-sm italic">{planet.funFact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;