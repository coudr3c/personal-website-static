export const en = {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    cv: 'CV',
    cvPdf: 'CV (PDF)',
    github: 'Github',
    projects: 'Projects',
    profile: 'Profile',
  },

  // Page titles
  pages: {
    home: 'Home',
    about: 'About me',
    skills: 'Skills',
    cv: 'CV',
    projects: 'Projects',
    gsoc: 'GSoC',
    masterThesis: 'Master Thesis',
    vmConnect: 'VM Connect',
  },

  // Home page
  home: {
    jobDescription: 'Currently a Backend/DevOps/FullStack (in order of importance) Engineer at',
    jobDescriptionSince: '(since 2022)',
    jobSeekingText: 'I am actively looking for a new role anywhere in Europe (remote) or close to Thonon-les-Bains (hybrid).',
    contactText: 'Feel free to contact me at',
  },

  // About page
  about: {
    intro: "My name is Rémi Coudert [ʁemi kudɛʁ], I'm a Software Engineer/Computer Scientist based in French Chablais, by the leman lake.",
    education: "I graduated from EPFL (Ecole Polytechnique Federale de Lausanne) with a MSc in Computer Science and an engineering diploma in 2020 and am currently employed as a Software Engineer",
    komugi: "Komugi is a B2B startup providing an APS (Advanced Planning and Scheduling) SaaS solution helping manufacturing industries better pilot their production with task scheduling, people and machine management, KPI feedback, scenario capabilities etc…",
    previousWork: "Before that I worked at ELCA Security as a Security engineer, at Lausanne University's Information Security and Privacy lab as a research engineer.",
    thesisPart1: "I defended my Master thesis in the field of privacy at",
    thesisPart2: "in Grenoble under the supervision of",
    interests: "I am particularly interested in privacy, on both its technical side and its ethical/social one and security in general. I also have a keen interest in compilers and programming languages.",
    polyquityPart1: "On a more personal note, I am a former member of",
    polyquityPart2: ", EPFL's association for gender equality for which I have been its Vice-President from January to September 2019.",
    football: "During my High School years, I was part of Thonon Black Panthers American Football Team, as a U19 and later a starter Running Back in Team France U19 and took part of 2014 U19 World Championship in Kuwait City (Kuwait).",
    coaching: "I have been coaching Black Panthers's U17 team between Sept. 2021 and July 2024. We reached the swiss national championship semi-finals in 2023.",
    lastUpdate: "Last site update : July 17, 2025",
  },

  // Skills page
  skills: {
    webDevelopment: 'Web Development',
    programmingLanguages: 'Programming Languages',
    computerScience: 'Computer Science',
    languages: 'Languages',
    backend: 'Backend',
    frontend: 'Frontend',
    infraDevOps: 'Infra/DevOps',
    designPatterns: 'Design Patterns',
    dataScience: 'Data Science/Machine Learning (scikit-learn, Pandas, Jupyter...)',
    cryptography: 'Cryptography/Privacy',
    scientificCommunication: 'Scientific Communication',
    frenchNative: 'French : Native',
    englishFluent: 'English : Fluent (C1/C2)',
    notionsGoRust: 'Notions of Go, Rust',
  },

  // CV page
  cv: {
    pdfLinkPart1: 'Click',
    pdfLinkText: 'HERE',
    pdfLinkPart2: 'for a one-pager PDF, this is a detailed CV/Resume',
    education: 'Education',
    pastExperiences: 'Past Experiences',
    miscExperiences: 'Miscellaneous Experience',
  },

  // Error pages
  error: {
    notFound: 'Page Not Found',
    notFoundDescription: "The page you're looking for doesn't exist.",
    goHome: 'Go Home',
    somethingWrong: 'Something went wrong',
    unexpectedError: "We're sorry, but something unexpected happened.",
    tryAgain: 'Try Again',
  },

  // Projects page
  projects: {
    featured: 'Featured Projects',
    categories: {
      thesis: 'Thesis & Research',
      internship: 'Internships',
      gsoc: 'Google Summer of Code',
      hackathon: 'Hackathons',
      school: 'Academic Projects',
      misc: 'Miscellaneous Projects',
    },
  },

  // Master Thesis page
  masterThesis: {
    title: 'Automatically detect Dark patterns in cookie banners',
    subtitle: 'Privacy Research Thesis - PRIVATICS Lab, INRIA Grenoble',
    thesisOverview: 'Thesis Overview',
    period: 'Period',
    laboratory: 'Laboratory',
    supervisors: 'Supervisors',
    institution: 'Institution',
    technologiesMethods: 'Technologies & Methods',
    researchObjective: 'Research Objective',
    researchObjectiveText: 'This thesis focuses on the automatic detection and analysis of dark patterns in cookie consent banners. Dark patterns are UX designs specifically created to manipulate users into making decisions they would not otherwise make, or to prevent them from taking actions in their best interest. The research aimed to develop tools and methodologies to systematically identify these manipulative practices in cookie banners across the web.',
    theoreticalFramework: 'Theoretical Framework',
    cognitiveBiases: 'Cognitive Biases',
    cognitiveBiasesItems: {
      system: 'System 1 vs System 2 thinking (Kahneman)',
      anchoring: 'Anchoring and framing effects',
      defaultBias: 'Default bias exploitation',
      behavioral: 'Behavioral economics principles'
    },
    darkPatternClassification: 'Dark Pattern Classification',
    darkPatternItems: {
      nudges: 'Nudges vs Sludges distinction',
      taxonomy: 'Manipulation taxonomy',
      gdpr: 'GDPR and ePrivacy directive context',
      legal: 'Cookie banner legal requirements'
    },
    methodology: 'Methodology',
    dataCollection: 'Data Collection',
    dataCollectionText: 'Crawled over 100,000 websites from the Tranco top list using OpenWPM, a tool based on Selenium designed for automatic privacy experimentation. The crawl was conducted from a machine based in the Netherlands over ten days to ensure EU-based cookie banner detection.',
    bannerDetection: 'Banner Detection & Analysis',
    bannerDetectionText: 'Developed a segmentation algorithm to extract DOM HTML components and assign likelihood scores for identifying cookie banner elements. Applied clustering and scoring techniques to classify banner components and analyze their manipulative characteristics.',
    darkPatternClassificationMethod: 'Dark Pattern Classification',
    darkPatternClassificationText: 'Analyzed button presence, visibility, and design patterns. Developed classification framework based on previous work by Mathur et al., adapted specifically for cookie consent interfaces.',
    keyFindings: 'Key Findings',
    scaleOfAnalysis: 'Scale of Analysis',
    scaleItems: {
      websites: 'websites crawled',
      banners: 'cookie banners identified',
      darkPatterns: 'contained at least one dark pattern',
      coverage: 'Comprehensive EU privacy landscape coverage'
    },
    darkPatternCategories: 'Dark Pattern Categories',
    darkPatternCategoriesItems: {
      visibility: 'Button visibility manipulation',
      language: 'Misleading language and framing',
      bias: 'Default option bias exploitation',
      rejection: 'Complex rejection processes'
    },
    technicalImplementation: 'Technical Implementation',
    openWpmIntegration: 'OpenWPM Integration',
    openWpmText: 'Utilized OpenWPM\'s automated browsing capabilities to systematically crawl websites and extract cookie banner information. Implemented custom scripts to handle dynamic content and user interactions.',
    dataProcessing: 'Data Processing Pipeline',
    dataProcessingText: 'Developed Python-based analysis pipeline using Pandas for data manipulation and statistical analysis. Created automated classification algorithms to identify and categorize dark patterns systematically.',
    impactSignificance: 'Impact & Significance',
    impactText1: 'This research provided crucial insights into the widespread nature of manipulative design in web privacy interfaces, revealing that the vast majority of cookie banners employ dark patterns to influence user behavior. The findings contribute to ongoing discussions about privacy regulation enforcement and ethical design practices.',
    impactText2: 'The work also established methodologies for large-scale automated detection of dark patterns, providing tools and frameworks that can be applied to future privacy research and regulatory compliance assessment.',
    futureWork: 'Future Work',
    futureWorkItems: {
      beyondFirst: 'Beyond First Layer: Analyzing dark patterns in deeper cookie consent flows',
      nlp: 'NLP and Sentiment Analysis: Applying natural language processing to cookie banner text',
      largerScale: 'Larger Scale: Expanding analysis to global website populations',
      multilingual: 'Multilingual Analysis: Extending research to non-English language websites'
    },
    resources: 'Resources',
    downloadThesis: 'Download Full Thesis (PDF)',
    viewOpenWpm: 'View OpenWPM Project'
  },

  // GSoC page
  gsoc: {
    title: 'Google Summer of Code 2017',
    subtitle: 'Implementing Java Concurrency in Scala Native',
    projectOverview: 'Project Overview',
    year: 'Year',
    organization: 'Organization',
    mentor: 'Mentor',
    duration: 'Duration',
    technologies: 'Technologies',
    projectGoal: 'Project Goal',
    projectGoalText: 'The objective was to port Java concurrency components to Scala Native, enabling multithreaded programming capabilities in the Scala Native ecosystem. This involved implementing low-level threading primitives and high-level concurrency utilities.',
    keyComponents: 'Key Components Implemented',
    lowLevelPrimitives: 'Low-Level Primitives',
    lowLevelItems: {
      posix: 'POSIX thread bindings',
      atomics: 'Low-level atomics using C++ std::atomic',
      concurrent: 'java.util.concurrent.atomic'
    },
    highLevelComponents: 'High-Level Components',
    highLevelItems: {
      locks: 'java.util.concurrent.locks',
      thread: 'java.lang.Thread, ThreadLocal, ThreadGroup',
      forkJoin: 'Partial ForkJoinPool implementation'
    },
    majorChallenges: 'Major Challenges',
    challengesItems: {
      youngProject: 'Young Project: Scala Native was still in early development with incomplete compiler support',
      missingFeatures: 'Missing Features: No access to `synchronized` method, requiring creative workarounds',
      complexDependencies: 'Complex Dependencies: Intricate interdependencies between concurrency components'
    },
    technicalAchievements: 'Technical Achievements',
    achievementsItems: {
      ported: 'Successfully ported Harmony project\'s concurrency code to Scala Native',
      implemented: 'Implemented thread-safe atomics using C++ standard library',
      created: 'Created POSIX-based thread implementations with proper lifecycle management',
      contributed: 'Contributed merged code that became part of the official Scala Native project'
    },
    learningOutcomes: 'Learning Outcomes',
    learningText: 'This project provided invaluable experience in multiple domains:',
    learningItems: {
      compiler: 'Compiler Engineering: Deep understanding of how compilers handle concurrency',
      systems: 'Systems Programming: Extensive work with C++ and POSIX threading',
      language: 'Language Design: Insights into Scala and Java concurrency models',
      openSource: 'Open Source Collaboration: Experience contributing to a major open source project'
    },
    acknowledgements: 'Acknowledgements',
    acknowledgementsText1: 'Special thanks to Denys Shabalin for his excellent mentorship throughout the project, and to the entire Scala Native community for their support and guidance.',
    acknowledgementsText2: 'Grateful to Google Summer of Code for providing this incredible opportunity to contribute to open source software and gain hands-on experience with cutting-edge technology.',
    impactFuture: 'Impact & Future Work',
    impactText: 'The implementations contributed during GSoC 2017 became part of the official Scala Native project, enabling multithreaded programming for thousands of developers in the Scala ecosystem.',
    viewScalaNative: 'View Scala Native Project',
    viewContributions: 'View My Contributions'
  },

  // VM Connect page
  vmConnect: {
    title: 'VM Connect - AWS SSM RDP Tunneling Tool',
    subtitle: 'A Rust GUI application that simplifies connecting to AWS EC2 instances through SSM tunnels',
    projectOverview: 'Project Overview',
    period: 'Period',
    purpose: 'Purpose',
    target: 'Target',
    platform: 'Platform',
    purposeText: 'Simplify AWS VM remote access',
    targetText: 'IT administrators and developers',
    platformText: 'Cross-platform (Linux/Windows)',
    technologies: 'Technologies',
    problemStatement: 'Problem Statement',
    problemText: 'Connecting to AWS EC2 Windows instances through RDP typically requires complex manual setup of AWS Systems Manager (SSM) tunnels, configuration of port forwarding, and coordination between multiple tools. This process is error-prone, time-consuming, and requires deep knowledge of AWS networking and security configurations.',
    solutionFeatures: 'Solution & Key Features',
    coreFunctionality: 'Core Functionality',
    coreItems: {
      ssmTunnel: 'AWS SSM tunnel management',
      rdpConnection: 'Automatic RDP connection setup',
      guiInterface: 'Modern GUI interface with egui',
      multiVm: 'Multi-VM support and switching'
    },
    advancedFeatures: 'Advanced Features',
    advancedItems: {
      portForwarding: 'Configurable port forwarding',
      rdpDiscovery: 'RDP file auto-discovery',
      taskManagement: 'Concurrent task management',
      shutdown: 'Graceful shutdown and cleanup'
    },
    technicalArchitecture: 'Technical Architecture',
    threadingModel: 'Threading Model',
    threadingText: 'The application uses a sophisticated multi-threaded architecture with a main GUI thread running egui, a Tokio runtime thread handling async AWS operations, dedicated SSM tunnel tasks, and separate RDP processes.',
    communicationFlow: 'Communication Flow',
    communicationText: 'User interactions trigger background thread spawning with tokio runtime, SSM tunnel establishment and verification, automatic RDP connection launch, and continuous monitoring until completion or termination.',
    securityBestPractices: 'Security & Best Practices',
    securityItems: {
      iamIntegration: 'AWS IAM Integration: Uses standard AWS credential chain with proper IAM roles and policies',
      resourceManagement: 'Resource Management: Implements proper session termination to prevent resource leaks',
      errorHandling: 'Error Handling: Comprehensive error types with automatic session cleanup on failures',
      threadSafety: 'Thread Safety: Thread-safe logging and error handling across all components'
    },
    implementationHighlights: 'Implementation Highlights',
    technicalAchievements: 'Technical Achievements',
    technicalItems: {
      crossPlatform: 'Cross-platform build system with Windows targeting',
      asyncPatterns: 'Async/await patterns for non-blocking operations',
      processMonitoring: 'Efficient process monitoring and management',
      modernGui: 'Modern GUI with immediate mode rendering'
    },
    developmentQuality: 'Development Quality',
    qualityItems: {
      errorHandling: 'Comprehensive error handling and logging',
      modularArch: 'Modular architecture with clear separation',
      rustEdition: 'Rust Edition 2024 with modern practices',
      buildTargets: 'Configurable build targets and optimization'
    },
    impactFuture: 'Impact & Future Development',
    impactText: 'This project demonstrates sophisticated Rust programming techniques including async/await patterns, GUI development, AWS SDK integration, and cross-platform process management. It provides a practical solution for IT administrators and developers who need streamlined access to AWS Windows infrastructure.',
    currentStatus: 'Current Status',
    currentItems: {
      coreFunctionality: 'Core functionality implemented',
      guiInterface: 'GUI interface with egui',
      crossPlatform: 'Cross-platform build system',
      errorHandling: 'Error handling and logging'
    },
    futureEnhancements: 'Future Enhancements',
    futureItems: {
      dynamicConfig: 'Dynamic VM target configuration',
      profileManagement: 'Connection profile management',
      integrationTests: 'Integration testing suite',
      dynamicRdp: 'Dynamic RDP file creation'
    },
    resources: 'Resources',
    viewSourceCode: 'View Source Code'
  },

  // Common
  common: {
    loading: 'Loading...',
  },
} as const;