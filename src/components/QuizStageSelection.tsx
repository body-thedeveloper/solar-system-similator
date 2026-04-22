import React from 'react';
import { quizStages, QuizStage } from '../data/quizData';
import { useLanguage } from '../context/LanguageContext';

interface QuizStageSelectionProps {
  onStageSelect: (stage: QuizStage) => void;
  onClose: () => void;
}

const QuizStageSelection: React.FC<QuizStageSelectionProps> = ({ onStageSelect, onClose }) => {
  const { t, language } = useLanguage();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div className="relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-2xl w-full mx-4">
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} p-2 liquid-glass-button`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-8">
          <div className="text-5xl mb-4">{"\ud83e\udde0"}</div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {t('testYourKnowledge')}
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            {t('chooseDifficulty')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quizStages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => onStageSelect(stage)}
              className="p-6 liquid-glass-button rounded-2xl text-left transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="text-4xl mb-3">
                {stage.id === 'easy' ? '🌱' : stage.id === 'medium' ? '🌿' : '🌳'}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {t(stage.id === 'easy' ? 'beginner' : stage.id === 'medium' ? 'intermediate' : 'advanced')}
              </h3>
              <p className="text-sm text-gray-300 mb-1">
                {language === 'ar' ? stage.ageRangeAr : stage.ageRange}
              </p>
              <p className="text-xs text-gray-400">
                7 {t('questions')}
              </p>
              <div className="mt-3 flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i < (stage.difficulty === 'easy' ? 1 : stage.difficulty === 'medium' ? 2 : 3)
                        ? 'bg-yellow-400'
                        : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 liquid-glass-button text-gray-300 hover:text-white transition-colors"
          >
            {t('maybeLater')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizStageSelection;
