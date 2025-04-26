import React, { useEffect, useRef, useState } from 'react';
import { setupSolarSystem } from './components/SolarSystem';
import InfoPanel from './components/InfoPanel';
import SpeedControl from './components/SpeedControl';
import ComparisonPanel from './components/ComparisonPanel';
import { PlanetData } from './assets/textures/planetData';
import { Sun } from 'lucide-react';

function App() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [simulationSpeed, setSimulationSpeed] = useState<number>(0.5);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [comparisonPlanets, setComparisonPlanets] = useState<{
    planetA: PlanetData | null;
    planetB: PlanetData | null;
  }>({ planetA: null, planetB: null });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (canvasRef.current) {
      // Initialize the solar system
      const { 
        selectPlanet, 
        updateSimulationSpeed, 
        cleanupScene 
      } = setupSolarSystem(canvasRef.current, (planet) => {
        setSelectedPlanet(prev => prev?.id === planet.id ? null : planet);
        
        // Update comparison planets if needed
        if (showComparison) {
          if (!comparisonPlanets.planetA) {
            setComparisonPlanets({ ...comparisonPlanets, planetA: planet });
          } else if (!comparisonPlanets.planetB && comparisonPlanets.planetA.id !== planet.id) {
            setComparisonPlanets({ ...comparisonPlanets, planetB: planet });
          }
        }
      });

      // Update simulation speed when the slider changes
      updateSimulationSpeed(simulationSpeed);

      // Set loading to false after initialization
      setTimeout(() => setIsLoading(false), 2000);

      return () => {
        cleanupScene();
      };
    }
  }, []);
  
  useEffect(() => {
    // Update simulation speed when slider changes
    if (canvasRef.current) {
      const scene = window.solarSystem;
      if (scene && scene.updateSimulationSpeed) {
        scene.updateSimulationSpeed(simulationSpeed);
      }
    }
  }, [simulationSpeed]);

  const handleSpeedChange = (speed: number) => {
    setSimulationSpeed(speed);
  };

  const handleToggleComparison = () => {
    setShowComparison(!showComparison);
    // Reset comparison planets when closing
    if (showComparison) {
      setComparisonPlanets({ planetA: null, planetB: null });
    }
  };

  const handleResetComparison = () => {
    setComparisonPlanets({ planetA: null, planetB: null });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Loading screen */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
          <Sun className="w-16 h-16 animate-spin text-yellow-500" />
          <h1 className="mt-4 text-2xl font-bold">Loading Solar System...</h1>
        </div>
      )}

      {/* Three.js canvas container */}
      <div 
        ref={canvasRef} 
        className="absolute inset-0 z-0" 
      />

      {/* UI Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center">
        <SpeedControl 
          speed={simulationSpeed} 
          onChange={handleSpeedChange} 
        />
      </div>

      {/* Info Panel - shows when a planet is selected */}
      {selectedPlanet && !showComparison && (
        <InfoPanel 
          planet={selectedPlanet} 
          onClose={() => setSelectedPlanet(null)}
        />
      )}

      {/* Top navigation buttons */}
      <div className="absolute top-5 right-5 z-10 flex space-x-3">
        <button 
          className={`px-4 py-2 rounded-lg font-semibold text-sm ${
            showComparison ? 'bg-blue-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          onClick={handleToggleComparison}
        >
          Compare Planets
        </button>
      </div>

      {/* Comparison Panel */}
      {showComparison && (
        <ComparisonPanel 
          planetA={comparisonPlanets.planetA}
          planetB={comparisonPlanets.planetB}
          onReset={handleResetComparison}
          onClose={handleToggleComparison}
        />
      )}

      {/* Instructions Overlay - only visible initially */}
      <div className="absolute bottom-20 left-0 right-0 z-10 flex justify-center pointer-events-none">
        <div className="bg-black/50 text-white p-3 rounded-lg text-sm max-w-md text-center backdrop-blur-sm">
          <p>Click on planets to view details. Use your mouse to rotate the view (drag) and zoom (scroll).</p>
        </div>
      </div>
    </div>
  );
}

export default App;