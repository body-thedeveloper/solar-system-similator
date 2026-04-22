import React from 'react';
import { QuizStage } from '../data/quizData';
import { useLanguage } from '../context/LanguageContext';

interface QuizResultsProps {
  stage: QuizStage;
  score: number;
  totalQuestions: number;
  onClose: () => void;
  onRetry: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ stage, score, totalQuestions, onClose, onRetry }) => {
  const { language } = useLanguage();
  const percentage = Math.round((score / totalQuestions) * 100);
  
  // Determine performance level
  const getPerformanceLevel = () => {
    if (percentage >= 80) {
      return {
        emoji: 'ðŸ†',
        title: language === 'ar' ? 'ممتاز!' : 'Excellent!',
        message: language === 'ar' 
          ? 'أداء رائع! أنت تعرف نظامك الشمسي حقاً!' 
          : 'Outstanding! You really know your solar system!',
        color: 'from-yellow-500 to-orange-500'
      };
    } else if (percentage >= 60) {
      return {
        emoji: 'â­',
        title: language === 'ar' ? 'عمل جيد!' : 'Good Job!',
        message: language === 'ar' 
          ? 'عمل رائع! أنت تعرف الكثير عن نظامنا الشمسي!' 
          : 'Great work! You know quite a bit about our solar system!',
        color: 'from-blue-500 to-purple-500'
      };
    } else if (percentage >= 40) {
      return {
        emoji: 'ðŸ“š',
        title: language === 'ar' ? 'واصل التعلم!' : 'Keep Learning!',
        message: language === 'ar' 
          ? 'استمر في التعلم! ستحسن مع الوقت!' 
          : 'Keep learning! You\'ll get better with practice!',
        color: 'from-green-500 to-teal-500'
      };
    } else {
      return {
        emoji: 'ðŸŸŸ',
        title: language === 'ar' ? 'حاول مرة أخرى!' : 'Try Again!',
        message: language === 'ar' 
          ? 'حاول مرة أخرى! الممارسة تجعل الكمال!' 
          : 'Give it another try! Practice makes perfect!',
        color: 'from-purple-500 to-pink-500'
      };
    }
  };

  const performance = getPerformanceLevel();

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm">
      <div className="relative liquid-glass liquid-glass-glow p-8 rounded-3xl max-w-lg w-full mx-4 text-center">
        {/* Glitter effects for high scores */}
        {percentage >= 80 && (
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {[...Array(15)].map((_, i) => (
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
            {[...Array(10)].map((_, i) => (
              <div
                key={`star-${i}`}
                className="absolute text-xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  transform: `rotate(${Math.random() * 360}deg)`
                }}
              >
                âœ¨
              </div>
            ))}
          </div>
        )}

        <div className="relative z-10">
          {/* Performance emoji */}
          <div className="text-6xl mb-4 animate-bounce">{performance.emoji}</div>
          
          {/* Score display */}
          <div className="mb-6">
            <div className={`text-4xl font-bold bg-gradient-to-r ${performance.color} bg-clip-text text-transparent mb-2`}>
              {score}/{totalQuestions}
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              {percentage}%
            </div>
          </div>

          {/* Performance message */}
          <h2 className={`text-3xl font-bold text-white mb-3 bg-gradient-to-r ${performance.color} bg-clip-text text-transparent`}>
            {performance.title}
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            {performance.message}
          </p>

          {/* Stage info */}
          <div className="mb-6 p-3 bg-gray-700/30 rounded-xl">
            <p className="text-sm text-gray-300">
              {language === 'ar' ? 'انتهى' : 'Finish'}: {language === 'ar' ? stage.nameAr : stage.name}
            </p>
            <p className="text-xs text-gray-400">
              {language === 'ar' ? stage.ageRangeAr : stage.ageRange}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 justify-center">
            <button
              onClick={onRetry}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              {language === 'ar' ? '\u0625\u0639\u0627\u062f\u0629 \u0627\u0644\u0645\u062d\u0627\u0648\u0644\u0629' : 'Try Again'}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 liquid-glass-button text-white font-bold hover:bg-gray-700/50 transition-all duration-300"
            >
              {language === 'ar' ? '\u0627\u0646\u062a\u0647\u0649' : 'Finish'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResults;
