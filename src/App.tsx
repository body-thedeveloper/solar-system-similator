import React, { useEffect, useRef, useState } from 'react';
import { setupSolarSystem } from './components/SolarSystem';
import InfoPanel from './components/InfoPanel';
import SpeedControl from './components/SpeedControl';
import ComparisonPanel from './components/ComparisonPanel';
import LanguageModal from './components/LanguageModal';
import LanguageSwitcher from './components/LanguageSwitcher';
import TourGuide from './components/TourGuide';
import QuizStageSelection from './components/QuizStageSelection';
import Quiz from './components/Quiz';
import QuizResults from './components/QuizResults';
import { PlanetData } from './data/planetData';
import { QuizStage } from './data/quizData';
import { Sun, ZoomIn, ZoomOut, Sparkles } from 'lucide-react';
import { useLanguage } from './context/LanguageContext';

function App() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [simulationSpeed, setSimulationSpeed] = useState<number>(0.5);
  const [showComparison, setShowComparison] = useState<boolean>(false);
  const [comparisonPlanets, setComparisonPlanets] = useState<{
    planetA: PlanetData | null;
    planetB: PlanetData | null;
  }>({ planetA: null, planetB: null });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showLanguageModal, setShowLanguageModal] = useState<boolean>(() => {
    // Always show modal on first load to ensure language selection works
    return true;
  });
  const [paused, setPaused] = useState<boolean>(false);
  const [hideMoons, setHideMoons] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [planetScale, setPlanetScale] = useState(1);
  const [solarApi, setSolarApi] = useState<any>(null);
  const [galaxyVisible, setGalaxyVisible] = useState(false);
  const [showTour, setShowTour] = useState(false);
  const [showQuizSelection, setShowQuizSelection] = useState(false);
  const [selectedQuizStage, setSelectedQuizStage] = useState<QuizStage | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    if (canvasRef.current) {
      const api = setupSolarSystem(
        canvasRef.current,
        (planet) => {
          if (planet.id === 'sun') {
            setSelectedPlanet({
              id: 'sun',
              name: 'Sun',
              radius: 8.5,
              distanceFromSun: 0,
              orbitSpeed: 0,
              texture: 'sun.jpg',
              description: 'The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma and is by far the most important source of energy for life on Earth.',
              diameter: 1391400,
              mass: '1.989 × 10^30 kg',
              dayLength: '25 days (equator)',
              yearLength: '—',
              avgTemp: '5,505°C (surface)',
              funFact: 'The Sun contains 99.86% of the mass in the Solar System!',
              moons: []
            });
            return;
          }
          if (showComparison) {
            // Only allow valid PlanetData (not the sun) for comparison
            if (planet.id === 'sun') {
              return;
            }
            // Type guard: ensure planet is PlanetData (not just {id: string})
            if (
              typeof planet.name === 'string' &&
              typeof planet.radius === 'number' &&
              typeof planet.distanceFromSun === 'number'
            ) {
              setComparisonPlanets(prev => {
                // Type guard: ensure planet is PlanetData
                if (
                  typeof planet.name === 'string' &&
                  typeof planet.radius === 'number' &&
                  typeof planet.distanceFromSun === 'number'
                ) {
                  if (prev.planetA?.id === planet.id || prev.planetB?.id === planet.id) {
                    return prev;
                  }
                  if (!prev.planetA) {
                    return { ...prev, planetA: planet as PlanetData };
                  }
                  if (!prev.planetB && prev.planetA.id !== planet.id) {
                    return { planetA: prev.planetA, planetB: planet as PlanetData };
                  }
                }
                return prev;
              });
            }
          } else {
            setSelectedPlanet(planet as PlanetData);
          }
        },
        { hideMoons, showLabels, planetScale, tFunc: t, currentLanguage: language }
      );
      setSolarApi(api);

      // ensure tour is closed when scene is (re)initialized
      setShowTour(false);

      api.updateSimulationSpeed(paused ? 0 : simulationSpeed);

      // Sync moons/labels/scale on mount
      api.setMoonsVisible?.(!hideMoons);
      api.setLabelsVisible?.(showLabels);
      api.setPlanetScale?.(planetScale);

      setTimeout(() => setIsLoading(false), 2000);

      return () => {
        api.cleanupScene();
      };
    }
  }, [showComparison, hideMoons, showLabels, planetScale, paused, simulationSpeed, t, language]);
  
  useEffect(() => {
    // Update simulation speed when slider changes
    if (canvasRef.current) {
      const scene = window.solarSystem;
      if (scene && scene.updateSimulationSpeed) {
        scene.updateSimulationSpeed(paused ? 0 : simulationSpeed);
      }
    }
  }, [simulationSpeed, paused]);

  // --- Galaxy overlay effect ---
  useEffect(() => {
    if (!solarApi) return;
    let raf: number;
    function checkGalaxy() {
      if (solarApi.isGalaxyVisible) {
        setGalaxyVisible(solarApi.isGalaxyVisible());
      }
      raf = requestAnimationFrame(checkGalaxy);
    }
    checkGalaxy();
    return () => {
      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, [solarApi]);

  const handleSpeedChange = (speed: number) => {
    setSimulationSpeed(speed);
  };

  const handlePauseToggle = () => {
    setPaused((prev) => !prev);
  };

  const handleLanguageSelect = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setShowLanguageModal(false);
  };

  const handleToggleComparison = () => {
    setShowComparison((prev) => {
      if (!prev) {
        // Opening comparison: clear selection
        setComparisonPlanets({ planetA: null, planetB: null });
        setSelectedPlanet(null);
      } else {
        // Closing comparison: clear selection
        setComparisonPlanets({ planetA: null, planetB: null });
      }
      return !prev;
    });
  };

  const handleResetComparison = () => {
    setComparisonPlanets({ planetA: null, planetB: null });
  };

  const handleChooseAsA = (planet: PlanetData) => {
    setComparisonPlanets(prev => ({ ...prev, planetA: planet }));
    if (!showComparison) setShowComparison(true);
  };

  const handleChooseAsB = (planet: PlanetData) => {
    setComparisonPlanets(prev => ({ ...prev, planetB: planet }));
    if (!showComparison) setShowComparison(true);
  };

  // Quiz handlers
  const handleQuizClick = () => {
    setShowTour(false);
    setSelectedPlanet(null);
    setShowQuizSelection(true);
  };

  const handleQuizStageSelect = (stage: QuizStage) => {
    setSelectedQuizStage(stage);
    setShowQuizSelection(false);
    setShowQuiz(true);
  };

  const handleQuizComplete = (score: number, totalQuestions: number) => {
    setQuizScore(score);
    setShowQuiz(false);
    setShowQuizResults(true);
  };

  const handleQuizClose = () => {
    setShowQuizSelection(false);
    setShowQuiz(false);
    setShowQuizResults(false);
    setSelectedQuizStage(null);
  };

  const handleQuizRetry = () => {
    if (selectedQuizStage) {
      setShowQuizResults(false);
      setShowQuiz(true);
    }
  };

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-black ${language === 'ar' ? 'arabic-text' : 'english-text'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Language Selection Modal */}
      <LanguageModal 
        isOpen={showLanguageModal}
        onLanguageSelect={handleLanguageSelect}
      />

      {/* Loading screen - only show after language is selected */}
      {isLoading && !showLanguageModal && (
        <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6">
            <Sun className="w-20 h-20 animate-spin text-yellow-400" />
            <div className="text-center">
              <h1 className="text-3xl font-bold text-white mb-2">Loading Solar System...</h1>
              <p className="text-gray-300">Initializing the universe...</p>
            </div>
          </div>
        </div>
      )}

      {/* Three.js canvas container */}
      <div 
        ref={canvasRef} 
        className="absolute inset-0 z-0 bg-black" 
      />

      {/* UI Controls */}
      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center">
        <div className="flex items-center gap-2">
          {/* Zoom Out Button */}
          <button
            className="p-2 rounded-full liquid-glass-button transition-colors"
            aria-label="Zoom Out"
            onClick={() => solarApi?.zoomOut?.()}
            type="button"
          >
            <ZoomOut size={20} />
          </button>
          {/* SpeedControl */}
          <SpeedControl 
            speed={simulationSpeed} 
            onChange={handleSpeedChange}
            paused={paused}
            onPauseToggle={handlePauseToggle}
            hideMoons={hideMoons}
            onHideMoonsChange={setHideMoons}
            showLabels={showLabels}
            onShowLabelsChange={setShowLabels}
            planetScale={planetScale}
            onPlanetScaleChange={setPlanetScale}
          />
          {/* Zoom In Button */}
          <button
            className="p-2 rounded-full liquid-glass-button transition-colors"
            aria-label="Zoom In"
            onClick={() => solarApi?.zoomIn?.()}
            type="button"
          >
            <ZoomIn size={20} />
          </button>
        </div>
      </div>

      {/* Info Panel - shows when a planet is selected and NOT comparing */}
      {selectedPlanet && !showComparison && (
        <InfoPanel 
          planet={selectedPlanet} 
          onClose={() => setSelectedPlanet(null)}
          solarApi={solarApi}
          showComparison={false}
          comparisonPlanets={comparisonPlanets}
          onChooseAsA={handleChooseAsA}
          onChooseAsB={handleChooseAsB}
        />
      )}

      {/* Comparison Panel */}
      {showComparison && (
        <ComparisonPanel 
          planetA={comparisonPlanets.planetA}
          planetB={comparisonPlanets.planetB}
          onReset={handleResetComparison}
          onClose={handleToggleComparison}
        />
      )}

      {/* Top navigation buttons */}
      <div className={`absolute top-5 right-5 z-10 flex items-center gap-4 ${language === 'ar' ? 'space-x-reverse' : ''}`}>
        <LanguageSwitcher />
        <button 
          className={`px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button ${
            showComparison ? 'bg-blue-500/20 border-blue-500/30' : ''
          }`}
          onClick={handleToggleComparison}
        >
          {t('comparePlanets')}
        </button>
      </div>

      {/* Tour and Quiz buttons - positioned at left top corner */}
      <div className="absolute top-5 left-5 z-10 flex flex-col gap-2">
        <button
          className={`px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button transition-all duration-200 ${
            showTour ? 'bg-red-500/20 border-red-500/30' : ''
          }`}
          onClick={() => { setShowTour((s) => { const next = !s; if (next) { setSelectedPlanet(null); } return next; }); }}
        >
          {showTour ? (t('stopTour') || 'Stop Tour') : (t('startTour') || 'Start Tour')}
        </button>
        <button
          className="px-4 py-2 rounded-lg font-semibold text-sm liquid-glass-button transition-all duration-200 bg-blue-500/20 border-blue-500/30"
          onClick={handleQuizClick}
        >
          {t('takeQuiz') || 'Take Quiz'}
        </button>
      </div>

      <TourGuide solarApi={solarApi} isOpen={showTour} onClose={() => setShowTour(false)} />
      {showQuizSelection && (
        <QuizStageSelection 
          onStageSelect={handleQuizStageSelect} 
          onClose={handleQuizClose} 
        />
      )}
      {showQuiz && selectedQuizStage && (
        <Quiz 
          stage={selectedQuizStage} 
          onComplete={handleQuizComplete} 
          onClose={handleQuizClose} 
        />
      )}
      {showQuizResults && selectedQuizStage && (
        <QuizResults 
          stage={selectedQuizStage} 
          score={quizScore} 
          totalQuestions={selectedQuizStage.questions.length} 
          onClose={handleQuizClose} 
          onRetry={handleQuizRetry} 
        />
      )}
    </div>
  );
}

export default App;