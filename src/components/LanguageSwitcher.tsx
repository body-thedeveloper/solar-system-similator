import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en' as const, label: t('english'), flag: '🇬🇧', color: 'from-blue-600 to-blue-700' },
    { code: 'ar' as const, label: t('arabic'), flag: '🇸🇦', color: 'from-green-600 to-green-700' }
  ];

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/50 text-cyan-400 transition-all duration-200"
        title="Change language"
      >
        <Globe size={20} />
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-gradient-to-b from-slate-900 to-black border border-cyan-500/50 rounded-2xl py-2 z-50 shadow-2xl min-w-max">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-all duration-200 ${
                language === lang.code
                  ? `bg-gradient-to-r ${lang.color} text-white font-semibold`
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.code && (
                <span className="ml-auto text-cyan-300">✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageSwitcher;
