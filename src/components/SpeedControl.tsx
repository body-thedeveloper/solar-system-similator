import React from 'react';
import { Clock, Pause, Play } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface SpeedControlProps {
  speed: number;
  onChange: (speed: number) => void;
  paused?: boolean;
  onPauseToggle?: () => void;
  hideMoons?: boolean;
  onHideMoonsChange?: (v: boolean) => void;
  showLabels?: boolean;
  onShowLabelsChange?: (v: boolean) => void;
  planetScale?: number;
  onPlanetScaleChange?: (v: number) => void;
}

const SpeedControl: React.FC<SpeedControlProps> = ({
  speed,
  onChange,
  paused,
  onPauseToggle,
  hideMoons,
  onHideMoonsChange,
  showLabels,
  onShowLabelsChange,
  planetScale,
  onPlanetScaleChange
}) => {
  const { t } = useLanguage();
  
  return (
    <div className="liquid-glass liquid-glass-glow rounded-xl p-3 text-white flex items-center gap-3">
      <Clock size={18} className="text-gray-400" />
      <div className="flex flex-col">
        <div className="text-sm font-medium mb-1">{t('simulationSpeed')}</div>
        <div className="flex items-center gap-2">
          <span className="text-xs">{t('slow')}</span>
          <input 
            type="range"
            min={0.1}
            max={2}
            step={0.1}
            value={speed}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            disabled={paused}
          />
          <span className="text-xs">{t('fast')}</span>
        </div>
      </div>
      <div className="text-sm font-bold ml-2">{speed.toFixed(1)}x</div>
      <button
        onClick={onPauseToggle}
        className="ml-4 p-2 liquid-glass-button shiny-border-hover"
        aria-label={paused ? t('play') : t('pause')}
        type="button"
      >
        {paused ? <Play size={18} /> : <Pause size={18} />}
      </button>
      {/* New controls next to pause button */}
      <div className="flex items-center gap-2 ml-2">
        <label className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
          <input
            type="checkbox"
            checked={!!hideMoons}
            onChange={e => onHideMoonsChange?.(e.target.checked)}
            className="accent-blue-500 w-3 h-3"
          />
          {hideMoons ? t('showMoons') : t('hideMoons')}
        </label>
        <label className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
          <input
            type="checkbox"
            checked={!!showLabels}
            onChange={e => onShowLabelsChange?.(e.target.checked)}
            className="accent-blue-500 w-3 h-3"
          />
          {showLabels ? t('hideLabels') : t('showLabels')}
        </label>
        <label className="flex items-center gap-1 text-xs bg-white/10 px-2 py-1 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
          <span>{t('planetScale')}</span>
          <input
            type="range"
            min={0.5}
            max={2}
            step={0.05}
            value={planetScale}
            onChange={e => onPlanetScaleChange?.(parseFloat(e.target.value))}
            className="w-16 accent-blue-500"
          />
          <span>{planetScale?.toFixed(2)}x</span>
        </label>
      </div>
    </div>
  );
};

export default SpeedControl;