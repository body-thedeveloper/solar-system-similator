import React, { useState, useEffect } from 'react';
import { QuizStage, QuizQuestion } from '../data/quizData';
import { useLanguage } from '../context/LanguageContext';

interface QuizProps {
  stage: QuizStage;
  onComplete: (score: number, totalQuestions: number) => void;
  onClose: () => void;
}

const Quiz: React.FC<QuizProps> = ({ stage, onComplete, onClose }) => {
  const { language } = useLanguage();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = stage.questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / stage.questions.length) * 100;

  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setShowExplanation(true);

    if (currentQuestionIndex === stage.questions.length - 1) {
      // Last question, calculate score and complete
      setTimeout(() => {
        const score = newAnswers.filter((answer, index) => 
          answer === stage.questions[index].correctAnswer
        ).length;
        onComplete(score, stage.questions.length);
        setIsCompleted(true);
      }, 3000);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < stage.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSkip = () => {
    const newAnswers = [...answers, -1]; // -1 indicates skipped
    setAnswers(newAnswers);
    
    if (currentQuestionIndex === stage.questions.length - 1) {
      const score = newAnswers.filter((answer, index) => 
        answer === stage.questions[index].correctAnswer
      ).length;
      onComplete(score, stage.questions.length);
      setIsCompleted(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  if (isCompleted) return null;

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

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-300">
              {language === 'ar' ? 'السؤال' : 'Question'} {currentQuestionIndex + 1} {language === 'ar' ? 'من' : 'of'} {stage.questions.length}
            </span>
            <span className="text-sm text-gray-300">
              {Math.round(progress)}% {language === 'ar' ? 'مكتمل' : 'complete'}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="text-3xl">
              {stage.id === 'easy' ? '🌱' : stage.id === 'medium' ? '🌿' : '🌳'}
            </div>
            <h2 className="text-2xl font-bold text-white">
              {language === 'ar' ? currentQuestion.questionAr : currentQuestion.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const optionText = language === 'ar' ? currentQuestion.optionsAr[index] : option;
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showResult = showExplanation;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full p-4 rounded-xl text-left transition-all duration-300 ${
                    showExplanation
                      ? isCorrect
                        ? 'bg-green-500/20 border-2 border-green-500 text-green-300'
                        : isSelected && !isCorrect
                        ? 'bg-red-500/20 border-2 border-red-500 text-red-300'
                        : 'bg-gray-700/30 border-2 border-gray-600 text-gray-400'
                      : isSelected
                      ? 'bg-blue-500/20 border-2 border-blue-500 text-blue-300'
                      : 'bg-gray-700/30 border-2 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                      showExplanation
                        ? isCorrect
                          ? 'border-green-500 text-green-300'
                          : isSelected && !isCorrect
                          ? 'border-red-500 text-red-300'
                          : 'border-gray-600 text-gray-500'
                        : isSelected
                        ? 'border-blue-500 text-blue-300'
                        : 'border-gray-600 text-gray-400'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg">{optionText}</span>
                    {showExplanation && isCorrect && (
                      <span className="ml-auto text-green-400">✓</span>
                    )}
                    {showExplanation && isSelected && !isCorrect && (
                      <span className="ml-auto text-red-400">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Explanation */}
        {showExplanation && (currentQuestion.explanation || currentQuestion.explanationAr) && (
          <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
            <p className="text-blue-300 text-sm">
              <span className="font-bold">
                {language === 'ar' ? 'الشرح' : 'Explanation'}
              </span> {language === 'ar' ? currentQuestion.explanationAr : currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleSkip}
            disabled={showExplanation}
            className="px-4 py-2 liquid-glass-button text-gray-400 hover:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {language === 'ar' ? '\u062a\u062e\u0637\u064a' : 'Skip'}
          </button>

          {!showExplanation ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
            >
              {language === 'ar' ? '\u0625\u062f\u062e\u0627\u0644 \u0627\u0644\u0625\u062c\u0627\u0628\u0629' : 'Submit Answer'}
            </button>
          ) : (
            currentQuestionIndex < stage.questions.length - 1 && (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl text-white font-bold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                {language === 'ar' ? '\u0627\u0644\u0633\u0624\u0627\u0644 \u0627\u0644\u062a\u0627\u0644\u064a' : 'Next Question'}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
