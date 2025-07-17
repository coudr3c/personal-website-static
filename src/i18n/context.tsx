import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from 'react';
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
    masterThesis: string;
    vmConnect: string;
  };
  home: {
    jobDescription: string;
    jobDescriptionSince: string;
    jobSeekingText: string;
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

  // Master Thesis page
  masterThesis: {
    title: string;
    subtitle: string;
    thesisOverview: string;
    period: string;
    laboratory: string;
    supervisors: string;
    institution: string;
    technologiesMethods: string;
    researchObjective: string;
    researchObjectiveText: string;
    theoreticalFramework: string;
    cognitiveBiases: string;
    cognitiveBiasesItems: {
      system: string;
      anchoring: string;
      defaultBias: string;
      behavioral: string;
    };
    darkPatternClassification: string;
    darkPatternItems: {
      nudges: string;
      taxonomy: string;
      gdpr: string;
      legal: string;
    };
    methodology: string;
    dataCollection: string;
    dataCollectionText: string;
    bannerDetection: string;
    bannerDetectionText: string;
    darkPatternClassificationMethod: string;
    darkPatternClassificationText: string;
    keyFindings: string;
    scaleOfAnalysis: string;
    scaleItems: {
      websites: string;
      banners: string;
      darkPatterns: string;
      coverage: string;
    };
    darkPatternCategories: string;
    darkPatternCategoriesItems: {
      visibility: string;
      language: string;
      bias: string;
      rejection: string;
    };
    technicalImplementation: string;
    openWpmIntegration: string;
    openWpmText: string;
    dataProcessing: string;
    dataProcessingText: string;
    impactSignificance: string;
    impactText1: string;
    impactText2: string;
    futureWork: string;
    futureWorkItems: {
      beyondFirst: string;
      nlp: string;
      largerScale: string;
      multilingual: string;
    };
    resources: string;
    downloadThesis: string;
    viewOpenWpm: string;
  };

  // GSoC page
  gsoc: {
    title: string;
    subtitle: string;
    projectOverview: string;
    year: string;
    organization: string;
    mentor: string;
    duration: string;
    technologies: string;
    projectGoal: string;
    projectGoalText: string;
    keyComponents: string;
    lowLevelPrimitives: string;
    lowLevelItems: {
      posix: string;
      atomics: string;
      concurrent: string;
    };
    highLevelComponents: string;
    highLevelItems: {
      locks: string;
      thread: string;
      forkJoin: string;
    };
    majorChallenges: string;
    challengesItems: {
      youngProject: string;
      missingFeatures: string;
      complexDependencies: string;
    };
    technicalAchievements: string;
    achievementsItems: {
      ported: string;
      implemented: string;
      created: string;
      contributed: string;
    };
    learningOutcomes: string;
    learningText: string;
    learningItems: {
      compiler: string;
      systems: string;
      language: string;
      openSource: string;
    };
    acknowledgements: string;
    acknowledgementsText1: string;
    acknowledgementsText2: string;
    impactFuture: string;
    impactText: string;
    viewScalaNative: string;
    viewContributions: string;
  };

  // VM Connect page
  vmConnect: {
    title: string;
    subtitle: string;
    projectOverview: string;
    period: string;
    purpose: string;
    target: string;
    platform: string;
    purposeText: string;
    targetText: string;
    platformText: string;
    technologies: string;
    problemStatement: string;
    problemText: string;
    solutionFeatures: string;
    coreFunctionality: string;
    coreItems: {
      ssmTunnel: string;
      rdpConnection: string;
      guiInterface: string;
      multiVm: string;
    };
    advancedFeatures: string;
    advancedItems: {
      portForwarding: string;
      rdpDiscovery: string;
      taskManagement: string;
      shutdown: string;
    };
    technicalArchitecture: string;
    threadingModel: string;
    threadingText: string;
    communicationFlow: string;
    communicationText: string;
    securityBestPractices: string;
    securityItems: {
      iamIntegration: string;
      resourceManagement: string;
      errorHandling: string;
      threadSafety: string;
    };
    implementationHighlights: string;
    technicalAchievements: string;
    technicalItems: {
      crossPlatform: string;
      asyncPatterns: string;
      processMonitoring: string;
      modernGui: string;
    };
    developmentQuality: string;
    qualityItems: {
      errorHandling: string;
      modularArch: string;
      rustEdition: string;
      buildTargets: string;
    };
    impactFuture: string;
    impactText: string;
    currentStatus: string;
    currentItems: {
      coreFunctionality: string;
      guiInterface: string;
      crossPlatform: string;
      errorHandling: string;
    };
    futureEnhancements: string;
    futureItems: {
      dynamicConfig: string;
      profileManagement: string;
      integrationTests: string;
      dynamicRdp: string;
    };
    resources: string;
    viewSourceCode: string;
  };

  common: {
    loading: string;
  };
};


const translations = {
  en,
  fr,
} as const;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationStructure;
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

  const value = useMemo((): LanguageContextType => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language]);

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