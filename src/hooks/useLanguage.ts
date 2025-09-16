import { useState, useEffect } from 'react';
import { Language } from '../types';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && ['en', 'sv'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'sv' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  return { language, setLanguage, toggleLanguage };
};
