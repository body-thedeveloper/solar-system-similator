import React, { useEffect, useMemo, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { planetData, PlanetData } from '../data/planetData';
import { tourContent } from '../data/tourContent';
import { useLanguage } from '../context/LanguageContext';
import QuizStageSelection from './QuizStageSelection';
import Quiz from './Quiz';
import QuizResults from './QuizResults';
import { QuizStage } from '../data/quizData';
import { speakText, stopSpeech } from '../utils/speech';

interface TourGuideProps {
  solarApi: any;
  isOpen?: boolean;
  onClose?: () => void;
}

const EMOJI: Record<string, string> = {
  sun: '☀️',
  mercury: '🔴',
  venus: '🟡',
  earth: '🌍',
  mars: '🔴',
  jupiter: '🟠',
  saturn: '🪐',
  uranus: '🔵',
  neptune: '🔵'
};

function emphasizeIfExtreme(text: string, isArabic: boolean = false) {
  const extremeKeywords = /largest|most|only|unique|volcan|strongest|shortest|longest|fastest|biggest|أكبر|أقوى|أسرع|أطول|أقصر|وحيد|فريد/i;
  if (extremeKeywords.test(text)) {
    return (
      <>
        {text} <span className="text-red-400 font-bold">{isArabic ? 'بوووووم!! 💥' : 'Booooooom!! 💥'}</span>
      </>
    );
  }
  return text;
}

const TourGuide: React.FC<TourGuideProps> = ({ solarApi, isOpen = false, onClose }) => {
  const { t, language } = useLanguage();
  const planets = planetData as PlanetData[];
  const [planetIndex, setPlanetIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [isNarrating, setIsNarrating] = useState(false);

  // Speak function for the Tour Guide - delegates to the shared speech engine
  // (cloud neural voice for Arabic with تشكيل, best local voice as fallback).
  const speakTourStep = (text: string) => {
    speakText(text, { lang: language === 'ar' ? 'ar' : 'en' });
  };

  // Trigger speech when step changes
  useEffect(() => {
    if (isNarrating && isOpen) {
      const p = planets[planetIndex];
      const content = tourContent[p.id] || tourContent.mercury;
      let text = '';
      const isArabic = language === 'ar';
      
      if (sectionIndex === 0) {
        text = isArabic ? content.prologue.ar : content.prologue.en;
      } else if (sectionIndex === 1) {
        text = isArabic 
          ? `${content.story.ar}. ${content.massExplanation.ar}` 
          : `${content.story.en}. ${content.massExplanation.en}`;
      } else if (sectionIndex === 2) {
        const funFactKey = `${p.id}FunFact` as any;
        const translatedFunFact = t(funFactKey) || p.funFact;
        text = isArabic ? `هل تعلم؟ حقيقة مذهلة: ${translatedFunFact}` : `Did you know? Amazing Fact: ${translatedFunFact}`;
      }

      speakTourStep(text);
    } else {
      stopSpeech();
    }
  }, [planetIndex, sectionIndex, isNarrating, isOpen, language]);

  // Stop narration on unmount or close
  useEffect(() => {
    return () => {
      stopSpeech();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      stopSpeech();
      setIsNarrating(false);
    }
  }, [isOpen]);

  const handleNarrateToggle = () => {
    setIsNarrating(prev => !prev);
  };
  const [showQuizSelection, setShowQuizSelection] = useState(false);
  const [selectedQuizStage, setSelectedQuizStage] = useState<QuizStage | null>(null);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    setPlanetIndex(0);
    setSectionIndex(0);
    setShowCompletion(false);
    setShowQuizSelection(false);
    setSelectedQuizStage(null);
    setShowQuiz(false);
    setShowResults(false);
    setQuizScore(0);
  }, [isOpen]);

  const sectionsFor = useMemo(() => (p: PlanetData) => {
    // Build a short story-like sequence for each planet using custom content
    const emoji = EMOJI[p.id] || '✨';
    const isArabic = language === 'ar';
    const content = tourContent[p.id] || tourContent.mercury;
    // Get translated fun fact
    const funFactKey = `${p.id}FunFact` as any;
    const translatedFunFact = t(funFactKey) || p.funFact;
    return [
      {
        key: 'prologue',
        title: isArabic ? `${emoji} ${t(p.id as any) || p.name}` : `${emoji} ${p.name}`,
        content: (
          <div>
            <p className="mb-2 text-sm leading-relaxed">
              {isArabic ? content.prologue.ar : content.prologue.en}
            </p>
          </div>
        ),
        highlight: true
      },
      {
        key: 'story',
        title: isArabic ? 'اكتشف المزيد' : 'Discover More',
        content: (
          <div>
            <p className="mb-2 text-sm leading-relaxed">
              {isArabic ? content.story.ar : content.story.en}
            </p>
            <p className="text-xs text-gray-400 italic mt-2 border-t border-white/10 pt-2">
              {isArabic ? content.massExplanation.ar : content.massExplanation.en}
            </p>
          </div>
        ),
        highlight: true
      },
      {
        key: 'fun',
        title: isArabic ? 'هل تعلم؟' : 'Did You Know?',
        content: (
          <div>
            <p className="mb-1 text-pink-300 font-semibold">{isArabic ? 'حقيقة مذهلة' : 'Amazing Fact'}</p>
            <p className="text-sm text-gray-200 leading-relaxed">{emphasizeIfExtreme(translatedFunFact, isArabic)}</p>
          </div>
        ),
        highlight: true
      }
    ];
  }, [t, language]);

  useEffect(() => {
    if (!isOpen) return;
    const p = planets[planetIndex];
    if (!p) return;
    
    // Smooth transition to planet
    const secs = sectionsFor(p);
    const sec = secs[sectionIndex];
    
    // First stop any following to prevent conflicts
    solarApi?.stopFollowPlanet?.();
    
    // Add delay to prevent zooming glitch
    setTimeout(() => {
      // Select planet with smooth transition
      solarApi?.selectPlanet?.(p.id);
      
      // if the section requests a highlight, move camera near the planet
      if (sec && sec.highlight) {
        // follow close to surface with smooth transition
        setTimeout(() => {
          const height = Math.max(1.5, p.radius + 0.8); // Slightly higher for better view
          solarApi?.followPlanet?.(p.id, height, true);
        }, 200); // Additional delay to prevent glitch
      }
    }, 100); // Delay to prevent zooming glitch
  }, [isOpen, planetIndex, sectionIndex, solarApi, sectionsFor, planets]);

  if (!isOpen) return null;

  if (showCompletion) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
        <div className="relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-lg text-center">
          {/* Glitter effects */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  opacity: Math.random() * 0.7 + 0.3
                }}
              />
            ))}
            {[...Array(15)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              >
                ✨
              </div>
            ))}
          </div>
          
          <div className="relative z-10">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {language === 'ar' ? 'مبروك يا صاحبي!' : 'Congratulations!'}
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              {language === 'ar' 
                ? 'خلصت جولة النظام الشمسي أونلاين يا بطل!'
                : 'You have completed the Solar System Online Tour!'}
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleTakeQuiz}
                className="px-6 py-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {language === 'ar' ? 'خذ اختبار' : 'Take Quiz'}
              </button>
              <button
                onClick={handleFinishTour}
                className="px-6 py-3 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl text-white font-bold text-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {language === 'ar' ? 'تمام' : 'Awesome'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const planet = planets[planetIndex];
  const sections = sectionsFor(planet);
  const isLastSection = planetIndex === planets.length - 1 && sectionIndex === sections.length - 1;

  function handleNext() {
    if (sectionIndex < sections.length - 1) {
      setSectionIndex(sectionIndex + 1);
    } else if (planetIndex < planets.length - 1) {
      setPlanetIndex(planetIndex + 1);
      setSectionIndex(0);
    } else {
      // Tour completed - show completion screen
      solarApi?.stopFollowPlanet?.();
      setTimeout(() => {
        solarApi?.resetCamera?.();
        setTimeout(() => {
          setShowCompletion(true);
        }, 500); // Give camera time to reset
      }, 200);
    }
  }

  function handlePrev() {
    if (sectionIndex > 0) {
      setSectionIndex(sectionIndex - 1);
    } else if (planetIndex > 0) {
      setPlanetIndex(planetIndex - 1);
      const prevSections = sectionsFor(planets[planetIndex - 1]);
      setSectionIndex(prevSections.length - 1);
    }
  }

  function handleSkip() {
    // Stop following but don't reset camera to maintain planet positions
    solarApi?.stopFollowPlanet?.();
    setTimeout(() => {
      // Don't reset camera - just stop following and close
      onClose?.();
    }, 200);
  }

  function handleFinishTour() {
    // Stop following but don't reset camera to maintain planet positions
    solarApi?.stopFollowPlanet?.();
    setTimeout(() => {
      // Ensure simulation continues after tour ends
      solarApi?.updateSimulationSpeed?.(0.5);
      setTimeout(() => {
        onClose?.();
      }, 200);
    }, 100);
  }

  function handleTakeQuiz() {
    setShowCompletion(false);
    setShowQuizSelection(true);
  }

  function handleQuizStageSelect(stage: QuizStage) {
    setSelectedQuizStage(stage);
    setShowQuizSelection(false);
    setShowQuiz(true);
  }

  function handleQuizComplete(score: number, totalQuestions: number) {
    setQuizScore(score);
    setShowQuiz(false);
    setShowResults(true);
  }

  function handleQuizClose() {
    setShowQuizSelection(false);
    setShowQuiz(false);
    setShowResults(false);
    setSelectedQuizStage(null);
  }

  function handleQuizRetry() {
    if (selectedQuizStage) {
      setShowResults(false);
      setShowQuiz(true);
    }
  }

  function handleQuizFinish() {
    handleQuizClose();
    handleFinishTour();
  }

  const isArabic = language === 'ar';

  // Show quiz stage selection
  if (showQuizSelection) {
    return (
      <QuizStageSelection
        onStageSelect={handleQuizStageSelect}
        onClose={handleQuizClose}
      />
    );
  }

  // Show quiz
  if (showQuiz && selectedQuizStage) {
    return (
      <Quiz
        stage={selectedQuizStage}
        onComplete={handleQuizComplete}
        onClose={handleQuizClose}
      />
    );
  }

  // Show quiz results
  if (showResults && selectedQuizStage) {
    return (
      <QuizResults
        stage={selectedQuizStage}
        score={quizScore}
        totalQuestions={selectedQuizStage.questions.length}
        onClose={handleQuizFinish}
        onRetry={handleQuizRetry}
      />
    );
  }

  return (
    <div className="absolute left-5 top-16 w-96 liquid-glass liquid-glass-glow text-white p-4 rounded-2xl z-40">
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-lg flex items-center gap-2">
          <span>{t('tourGuide') || 'Tour Guide'}</span>
          {/* Tour Guide Narrator */}
          <button
            onClick={handleNarrateToggle}
            className={`p-1.5 rounded-full transition-all duration-300 flex items-center justify-center relative ${
              isNarrating
                ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-400/50 scale-105 shadow-md shadow-cyan-500/20 pulse-glow'
                : 'bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10'
            }`}
            title={isNarrating ? (language === 'ar' ? 'إيقاف السرد' : 'Stop Narration') : (language === 'ar' ? 'تشغيل السرد الصوتي' : 'Play Narration')}
          >
            {isNarrating ? (
              <div className="flex items-center gap-1 px-0.5">
                <div className="flex items-end gap-0.5 h-3 w-4">
                  <span className="w-0.5 bg-cyan-300 rounded-full animate-wave-1 origin-bottom h-full" />
                  <span className="w-0.5 bg-cyan-300 rounded-full animate-wave-2 origin-bottom h-3/4" />
                  <span className="w-0.5 bg-cyan-300 rounded-full animate-wave-3 origin-bottom h-full" />
                </div>
                <Volume2 size={12} className="text-cyan-300" />
              </div>
            ) : (
              <VolumeX size={14} />
            )}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={handleSkip} className="text-sm px-3 py-1 liquid-glass-button">{t('skip') || 'Skip'}</button>
        </div>
      </div>

      {/* Add Waveform CSS animation block if not already defined */}
      <style>{`
        @keyframes bounce-wave-tour {
          0%, 100% { transform: scaleY(0.3); }
          50% { transform: scaleY(1); }
        }
        .animate-wave-1 { animation: bounce-wave-tour 0.6s ease-in-out infinite; }
        .animate-wave-2 { animation: bounce-wave-tour 0.5s ease-in-out infinite 0.15s; }
        .animate-wave-3 { animation: bounce-wave-tour 0.7s ease-in-out infinite 0.3s; }
        
        @keyframes pulse-glow-tour {
          0%, 100% { box-shadow: 0 0 5px rgba(6, 182, 212, 0.2); }
          50% { box-shadow: 0 0 10px rgba(6, 182, 212, 0.5); }
        }
        .pulse-glow {
          animation: pulse-glow-tour 2s infinite;
        }
      `}</style>

      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-1" dir={isArabic ? 'rtl' : 'ltr'}>{(t(planet.id as any) || planet.name)}</div>
        <div className="text-lg font-extrabold text-white mb-1 flex items-center gap-2" dir={isArabic ? 'rtl' : 'ltr'}>
          <span className="text-2xl">{EMOJI[planet.id] || '✨'}</span>
          <span>{sections[sectionIndex].title}</span>
        </div>
        <div className="text-sm text-gray-200" dir={isArabic ? 'rtl' : 'ltr'}>{sections[sectionIndex].content}</div>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={handlePrev} disabled={planetIndex === 0 && sectionIndex === 0} className="px-3 py-1 liquid-glass-button disabled:opacity-40">◀</button>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleNext} 
            className={`px-4 py-2 liquid-glass-button shiny-border-hover text-white font-bold ${
              isLastSection 
                ? '!bg-gradient-to-br !from-green-500/80 !to-emerald-600/80' 
                : ''
            }`}
          >
            {isLastSection 
              ? (t('finishTour') || 'Finish the Tour') 
              : (t('next') || 'Next')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourGuide;
