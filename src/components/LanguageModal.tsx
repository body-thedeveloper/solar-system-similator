import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageModalProps {
  isOpen: boolean;
  onLanguageSelect: (lang: 'en' | 'ar') => void;
}

const LanguageModal: React.FC<LanguageModalProps> = ({ isOpen, onLanguageSelect }) => {
  const { t } = useLanguage();
  const [selectedLang, setSelectedLang] = useState<'en' | 'ar' | null>(null);

  if (!isOpen) return null;

  const handleLanguageClick = (lang: 'en' | 'ar') => {
    setSelectedLang(lang);
  };

  const handleOK = () => {
    if (selectedLang) {
      onLanguageSelect(selectedLang);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[9999]">
      <div className="liquid-glass liquid-glass-glow rounded-3xl p-10 max-w-md w-full mx-4 animate-fadeIn">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-full border border-cyan-400/50">
            <Globe size={40} className="text-cyan-400" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-center text-white mb-3">
          {t('selectLanguage')}
        </h1>
        <p className="text-center text-gray-300 mb-10 text-lg">
          {t('chooseLanguage')}
        </p>

        <div className="flex flex-col gap-4 mb-8">
          <button
            onClick={() => handleLanguageClick('en')}
            className={`w-full transition-all duration-200 transform active:scale-110 text-lg rounded-xl font-bold py-4 px-6 liquid-glass-button shiny-border-hover ${
              selectedLang === 'en' 
                ? 'scale-110 !bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                : 'text-white hover:scale-105'
            }`}
          >
            <span className="text-2xl mr-3">🇬🇧</span> {t('english')}
          </button>
          
          <button
            onClick={() => handleLanguageClick('ar')}
            className={`w-full transition-all duration-200 transform active:scale-110 text-lg rounded-xl font-bold py-4 px-6 liquid-glass-button shiny-border-hover ${
              selectedLang === 'ar' 
                ? 'scale-110 !bg-gradient-to-r from-green-600 to-green-700 text-white' 
                : 'text-white hover:scale-105'
            }`}
          >
            <span className="text-2xl mr-3">🇸🇦</span> {t('arabic')}
          </button>
        </div>

        <button
          onClick={handleOK}
          disabled={!selectedLang}
          className={`w-full py-3 px-6 font-bold rounded-xl transition-all duration-200 text-base liquid-glass-button shiny-border-hover ${
            selectedLang 
              ? 'text-white cursor-pointer' 
              : 'opacity-60 cursor-not-allowed'
          }`}
        >
          {t('ok')}
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LanguageModal;
