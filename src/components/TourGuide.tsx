import React, { useEffect, useMemo, useState } from 'react';
import { planetData, PlanetData } from '../data/planetData';
import { useLanguage } from '../context/LanguageContext';

interface TourGuideProps {
  solarApi: any;
  isOpen?: boolean;
  onClose?: () => void;
}

const EMOJI: Record<string, string> = {
  sun: '☀️',
  mercury: '☿',
  venus: '♀️',
  earth: '🌍',
  mars: '⛰️',
  jupiter: '🟠',
  saturn: '🪐',
  uranus: '🔵',
  neptune: '🔵'
};

function emphasizeIfExtreme(text: string) {
  const extremeKeywords = /largest|most|only|unique|volcan|strongest|shortest|longest|fastest|biggest/i;
  if (extremeKeywords.test(text)) {
    return (
      <>
        {text} <span className="text-red-400 font-bold">Booooooom!! 💥</span>
      </>
    );
  }
  return text;
}

function friendlyMassExplanation(massStr: string) {
  // Try to parse patterns like '1.90 × 10^27 kg'
  const m = massStr.match(/([0-9.]+)\s*×\s*10\^([0-9]+)/);
  if (m) {
    const base = parseFloat(m[1]);
    const exp = parseInt(m[2], 10);
    // playful line — avoid precise huge-number math
    return (
      <span>
        That's about <span className="font-semibold text-yellow-300">{base}×10^{exp} kg</span> — imagine doubling your house weight <span className="font-semibold text-pink-300">thousands of millions</span> of times!
      </span>
    );
  }
  return <span className="font-semibold text-yellow-300">{massStr}</span>;
}

const TourGuide: React.FC<TourGuideProps> = ({ solarApi, isOpen = false, onClose }) => {
  const { t, language } = useLanguage();
  const planets = planetData as PlanetData[];
  const [planetIndex, setPlanetIndex] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    if (!isOpen) return;
    setPlanetIndex(0);
    setSectionIndex(0);
  }, [isOpen]);

  const sectionsFor = useMemo(() => (p: PlanetData) => {
    // Build a short story-like sequence for each planet
    const emoji = EMOJI[p.id] || '✨';
    return [
      {
        key: 'prologue',
        title: `${emoji} ${p.name}`,
        content: (
          <div>
            <p className="mb-1">Once upon a time, <span className="font-semibold text-blue-300">{p.name}</span> {emoji} drifted around the Sun.</p>
            <p className="text-sm text-gray-300">{p.description.slice(0, 120)}{p.description.length > 120 ? '...' : ''}</p>
          </div>
        ),
        highlight: true
      },
      {
        key: 'story',
        title: `A little story`,
        content: (
          <div>
            <p className="mb-1">
              {`People call ${p.name} `}
              <span className="font-semibold text-yellow-300">{p.name}</span>
              {` — but do you know what that really means?`}
            </p>
            <p className="text-sm text-gray-300">{friendlyMassExplanation(p.mass)} </p>
          </div>
        ),
        highlight: false
      },
      {
        key: 'fun',
        title: `Listen!`,
        content: (
          <div>
            <p className="mb-1 text-pink-300 font-semibold">Fun Fact</p>
            <p className="text-sm text-gray-200">{emphasizeIfExtreme(p.funFact)}</p>
          </div>
        ),
        highlight: false
      }
    ];
  }, [t, language]);

  useEffect(() => {
    if (!isOpen) return;
    const p = planets[planetIndex];
    if (!p) return;
    // Always make camera focus on the planet when we move to it
    solarApi?.selectPlanet?.(p.id);
    const secs = sectionsFor(p);
    const sec = secs[sectionIndex];
    // if the section requests a highlight, move camera near (follow) the planet briefly
    if (sec && sec.highlight) {
      // follow close to surface
      const height = Math.max(1, p.radius + 0.6);
      solarApi?.followPlanet?.(p.id, height, true);
    } else {
      // stop following if previously followed
      solarApi?.stopFollowPlanet?.();
    }
  }, [isOpen, planetIndex, sectionIndex, solarApi, sectionsFor, planets]);

  if (!isOpen) return null;

  const planet = planets[planetIndex];
  const sections = sectionsFor(planet);

  function handleNext() {
    if (sectionIndex < sections.length - 1) {
      setSectionIndex(sectionIndex + 1);
    } else if (planetIndex < planets.length - 1) {
      setPlanetIndex(planetIndex + 1);
      setSectionIndex(0);
    } else {
      onClose?.();
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
    solarApi?.stopFollowPlanet?.();
    onClose?.();
  }

  return (
    <div className="absolute left-5 top-16 w-96 bg-black/95 text-white p-4 rounded-2xl z-40 border border-white/10 shadow-2xl">
      <div className="flex items-center justify-between mb-3">
        <div className="font-bold text-lg">{t('tourGuide') || 'Tour Guide'}</div>
        <div className="flex items-center gap-2">
          <button onClick={handleSkip} className="text-sm px-3 py-1 bg-white/6 rounded hover:bg-white/10">{t('skip') || 'Skip'}</button>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-400 mb-1">{(t(planet.id) || planet.name)}</div>
        <div className="text-lg font-extrabold text-white mb-1 flex items-center gap-2">
          <span className="text-2xl">{EMOJI[planet.id] || '✨'}</span>
          <span>{sections[sectionIndex].title}</span>
        </div>
        <div className="text-sm text-gray-200">{sections[sectionIndex].content}</div>
      </div>

      <div className="flex justify-between items-center">
        <button onClick={handlePrev} disabled={planetIndex === 0 && sectionIndex === 0} className="px-3 py-1 bg-white/6 rounded disabled:opacity-40">◀</button>
        <div className="flex items-center gap-2">
          <button onClick={handleNext} className="px-4 py-2 bg-gradient-to-br from-purple-600 to-blue-500 rounded text-white font-bold">{t('next') || 'Next'}</button>
        </div>
      </div>
    </div>
  );
};

export default TourGuide;
