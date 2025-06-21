import React, { useState } from 'react';
import { X } from 'lucide-react';
import { PlanetData } from '../data/planetData';

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
}

const InfoPanel: React.FC<InfoPanelProps> = ({
  planet,
  onClose,
  showComparison,
  comparisonPlanets,
  onChooseAsA,
  onChooseAsB
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
  const nasaUrl = nasaLinks[planet.id.toLowerCase()] || 'https://science.nasa.gov/solar-system/';

  const [loading, setLoading] = useState(false);

  return (
    <div className="absolute top-20 right-5 w-80 bg-black/90 backdrop-blur-md text-white rounded-2xl overflow-hidden z-20 shadow-2xl border border-white/10 animate-slideIn transition-all duration-500">
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
          
          {showComparison && (
            <div className="flex gap-2 mb-4">
              <button
                className={`px-3 py-1 rounded bg-blue-500 text-white text-xs font-semibold disabled:bg-gray-600`}
                onClick={() => onChooseAsA && onChooseAsA(planet)}
                disabled={comparisonPlanets?.planetA?.id === planet.id}
              >
                {comparisonPlanets?.planetA?.id === planet.id ? 'Chosen as A' : 'Choose as A'}
              </button>
              <button
                className={`px-3 py-1 rounded bg-green-500 text-white text-xs font-semibold disabled:bg-gray-600`}
                onClick={() => onChooseAsB && onChooseAsB(planet)}
                disabled={
                  comparisonPlanets?.planetB?.id === planet.id ||
                  comparisonPlanets?.planetA?.id === planet.id
                }
              >
                {comparisonPlanets?.planetB?.id === planet.id ? 'Chosen as B' : 'Choose as B'}
              </button>
            </div>
          )}

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

            <div>
              <a
                href={nasaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-2 px-4 py-2 bg-black border border-white/20 hover:border-blue-400 hover:shadow-[0_0_12px_0_rgba(59,130,246,0.4)] text-white font-semibold rounded-lg transition-all duration-300 focus:ring-2 focus:ring-blue-400 focus:outline-none ${loading ? 'opacity-70 pointer-events-none' : ''}`}
                onClick={() => setLoading(true)}
              >
                {loading && (
                  <svg className="animate-spin h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                )}
                Learn More on NASA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;