import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { en } from './translations/en';
import { fr } from './translations/fr';

export type Language = 'en' | 'fr';

type TranslationStructure = {
  nav: {
    home: string;
    about: string;
    skills: string;
    cv: string;
    cvPdf: string;
    github: string;
    projects: string;
    profile: string;
  };
  pages: {
    home: string;
    about: string;
    skills: string;
    cv: string;
    projects: string;
    gsoc: string;
  };
  home: {
    jobDescription: string;
    contactText: string;
  };
  about: {
    intro: string;
    education: string;
    komugi: string;
    previousWork: string;
    thesisPart1: string;
    thesisPart2: string;
    interests: string;
    polyquityPart1: string;
    polyquityPart2: string;
    football: string;
    coaching: string;
    lastUpdate: string;
  };
  skills: {
    webDevelopment: string;
    programmingLanguages: string;
    computerScience: string;
    languages: string;
    backend: string;
    frontend: string;
    infraDevOps: string;
    designPatterns: string;
    dataScience: string;
    cryptography: string;
    scientificCommunication: string;
    frenchNative: string;
    englishFluent: string;
    notionsGoRust: string;
  };
  cv: {
    pdfLinkPart1: string;
    pdfLinkText: string;
    pdfLinkPart2: string;
    education: string;
    pastExperiences: string;
    miscExperiences: string;
  };
  error: {
    notFound: string;
    notFoundDescription: string;
    goHome: string;
    somethingWrong: string;
    unexpectedError: string;
    tryAgain: string;
  };
  projects: {
    featured: string;
    categories: {
      thesis: string;
      internship: string;
      gsoc: string;
      hackathon: string;
      school: string;
      misc: string;
    };
  };
  common: {
    loading: string;
  };
};

export type TranslationKey = TranslationStructure;

const translations = {
  en,
  fr,
} as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');

  // Initialize language from localStorage or browser preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language preference
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('fr')) {
        setLanguageState('fr');
      }
    }
  }, []);

  // Update document language and localStorage when language changes
  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('preferred-language', language);
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
}