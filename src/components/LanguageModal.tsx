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
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[99999]">
      <div className="liquid-glass liquid-glass-glow rounded-3xl p-10 max-w-md w-full mx-4 animate-fadeIn">
        <div className="flex justify-center mb-8">
          <div className="p-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/20 rounded-full border border-cyan-400/50">
            <Globe size={40} className="text-cyan-400" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center text-white mb-3 flex flex-col items-center gap-1">
          <span className="text-2xl md:text-3xl">Select Language</span>
          <span className="text-xl md:text-2xl text-cyan-400 font-arabic">اختر لغة</span>
        </h1>
        <div className="text-center text-gray-300 mb-8 flex flex-col gap-1 text-sm md:text-base">
          <span>Please choose your preferred language</span>
          <span className="text-cyan-300/80 font-arabic">يرجى اختيار لغتك المفضلة</span>
        </div>

        <div className="flex flex-col gap-4 mb-8">
          <button
            onClick={() => handleLanguageClick('en')}
            className={`w-full transition-all duration-200 transform active:scale-110 rounded-xl font-bold py-4 px-6 liquid-glass-button shiny-border-hover flex items-center justify-between ${
              selectedLang === 'en' 
                ? 'scale-110 !bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/35 border border-blue-400' 
                : 'text-white hover:scale-105'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-lg">English</span>
            </div>
            <span className="text-sm text-gray-300">الإنجليزية</span>
          </button>
          
          <button
            onClick={() => handleLanguageClick('ar')}
            className={`w-full transition-all duration-200 transform active:scale-110 rounded-xl font-bold py-4 px-6 liquid-glass-button shiny-border-hover flex items-center justify-between ${
              selectedLang === 'ar' 
                ? 'scale-110 !bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/35 border border-green-400' 
                : 'text-white hover:scale-105'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🇸🇦</span>
              <span className="text-lg font-arabic">عربي</span>
            </div>
            <span className="text-sm text-gray-300">Arabic</span>
          </button>
        </div>

        <button
          onClick={handleOK}
          disabled={!selectedLang}
          className={`w-full py-3 px-6 font-bold rounded-xl transition-all duration-200 text-base liquid-glass-button shiny-border-hover ${
            selectedLang 
              ? 'text-white cursor-pointer hover:scale-105 shadow-md shadow-cyan-500/20' 
              : 'opacity-40 cursor-not-allowed text-gray-400'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <span>OK</span>
            <span className="text-gray-400">/</span>
            <span className="font-arabic">حسنا</span>
          </span>
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
