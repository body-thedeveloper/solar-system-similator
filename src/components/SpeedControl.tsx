import React from 'react';
import { Clock } from 'lucide-react';

interface SpeedControlProps {
  speed: number;
  onChange: (speed: number) => void;
}

const SpeedControl: React.FC<SpeedControlProps> = ({ speed, onChange }) => {
  return (
    <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 text-white flex items-center gap-3">
      <Clock size={18} className="text-gray-400" />
      <div className="flex flex-col">
        <div className="text-sm font-medium mb-1">Simulation Speed</div>
        <div className="flex items-center gap-2">
          <span className="text-xs">Slow</span>
          <input 
            type="range"
            min={0.1}
            max={2}
            step={0.1}
            value={speed}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="w-32 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xs">Fast</span>
        </div>
      </div>
      <div className="text-sm font-bold ml-2">{speed.toFixed(1)}x</div>
    </div>
  );
};

export default SpeedControl;