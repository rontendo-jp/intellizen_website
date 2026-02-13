import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations, Language, TranslationType } from '../data/translations';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('JP');

  // Handle URL parameters for initial language
  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.split('?')[1]);
    const urlLang = params.get('lang')?.toUpperCase();
    if (urlLang === 'EN' || urlLang === 'JP') {
      setLangState(urlLang as Language);
    }
  }, []);

  const toggleLang = () => {
    setLangState(prev => prev === 'EN' ? 'JP' : 'EN');
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}