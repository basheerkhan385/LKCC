import React, { createContext, useContext, useEffect, useState } from 'react';
import { translations, TranslationSchema } from '../i18n/translations';

type Language = 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lkcc_language') as Language;
      if (saved === 'en' || saved === 'ur') {
        return saved;
      }
    }
    return 'en';
  });

  const isRTL = language === 'ur';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lkcc_language', lang);
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'ur' : 'en';
    setLanguage(nextLang);
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';

      if (language === 'ur') {
        document.title = 'ایل کے سی سی | لال خان کنسٹرکشن کمپنی';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute(
            'content',
            'ایل کے سی سی – لال خان کنسٹرکشن کمپنی اعلیٰ پائے کی رہائشی، تجارتی، سول انجینئرنگ اور بنیادی ڈھانچے کی تعمیراتی خدمات فراہم کرتی ہے۔'
          );
        }
      } else {
        document.title = 'LKCC | Lal Khan Construction Company';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute(
            'content',
            'LKCC – Lal Khan Construction Company delivers quality construction, civil engineering, architectural planning, and innovative building solutions.'
          );
        }
      }
    }
  }, [language, isRTL]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: translations[language],
    isRTL,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
