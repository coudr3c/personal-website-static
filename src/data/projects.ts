import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'master-thesis',
    title: 'Master Thesis - Automatically Detect Dark Patterns in Cookie Banners',
    description: 'Research thesis conducted at PRIVATICS lab (INRIA Grenoble) developing a tool to detect and analyze dark patterns in cookie banners. Crawled over 100,000 websites using OpenWPM, extracted DOM components, and assigned likelihood scores for cookie banner detection. Analyzed 9,344 identified banners and found that 96% contained at least one form of dark pattern - UI patterns exploiting human biases to force cookie acceptance.',
    period: 'February - July 2020',
    technologies: ['Python', 'OpenWPM', 'Web Scraping', 'Pandas', 'DOM Analysis', 'Privacy Research', 'Data Analysis', 'Cookie Banners'],
    links: {
      external: '/master-thesis',
      report: 'Master_Thesis.pdf'
    },
    category: 'thesis',
    featured: true
  },
  {
    id: 'logitech-internship',
    title: 'Logitech Engineering Internship - eSports Pro Player Detection',
    description: 'Developed machine learning tools to identify future eSports professional players using data analysis and predictive modeling. Built a tool to automatically extract game features from Valve/CS:GO logs and analyzed results using ML techniques. Gained experience with Docker, GPU farms, Kubernetes, and advanced C++ programming.',
    period: 'February - August 2018',
    technologies: ['C++', 'Machine Learning', 'scikit-learn', 'Data Analysis', 'Data Prediction', 'Docker', 'Kubernetes', 'GPU Computing', 'Valve/CS:GO', 'Makefiles', 'CMake'],
    category: 'internship',
    featured: true
  },
  {
    id: 'gsoc-2017',
    title: 'Google Summer of Code 2017 - Scala Native Multithreading',
    description: 'Implemented multithreading support for Scala Native, contributing to the open-source programming language ecosystem. Added support for concurrent execution and thread safety in the Scala Native compiler.',
    period: 'Summer 2017',
    technologies: ['Scala', 'C', 'Multithreading', 'Compiler Development'],
    links: {
      external: '/gsoc',
      github: 'https://github.com/coudr3c/scala-native'
    },
    category: 'gsoc',
    featured: true
  },
  {
    id: 'moodlehub',
    title: 'Lauzhack MoodleHub',
    description: 'Hackathon project to create a tool for downloading and updating Moodle course data, developed collaboratively during Lauzhack. Automated course material synchronization and organization.',
    period: '2018',
    technologies: ['Web Development', 'API Integration', 'Data Management'],
    links: {
      github: 'https://github.com/coudr3c/moodlehub'
    },
    category: 'hackathon'
  },
  {
    id: 'article-referencing',
    title: 'Semester Project - Article Referencing Research',
    description: 'Research project focusing on academic article referencing systems and citation analysis.',
    technologies: ['Research', 'Data Analysis', 'Academic Writing'],
    category: 'school'
  },
  {
    id: 'bandwidth-flooding',
    title: 'Proactive Bandwidth Flooding',
    description: 'Research paper analysis and implementation as part of Principles of Computer Systems course.',
    technologies: ['Networking', 'Systems Programming', 'Research'],
    category: 'school'
  },
  {
    id: 'self-recoverable-software',
    title: 'Self-recoverable Software',
    description: 'Study and analysis of self-healing software systems and fault tolerance mechanisms.',
    technologies: ['Systems Design', 'Fault Tolerance', 'Software Engineering'],
    category: 'school'
  },
  {
    id: 'ethical-data-survey',
    title: 'SHS Project - Ethical Data Awareness Survey',
    description: 'Social and Human Sciences project conducting surveys on ethical data awareness and privacy concerns.',
    technologies: ['Survey Design', 'Data Analysis', 'Ethics', 'Statistics'],
    category: 'school'
  },
  {
    id: 'blockchain-rps',
    title: 'Rocky Arena of Scissors and Papers (Rasp)',
    description: 'A blockchain-powered Rock Paper Scissors game where players can challenge peers and bet on matches. Uses a "Peerster blockchain" to ensure match integrity and prevent cheating through blockchain verification. Features a web interface for challenging and accepting matches with peer-to-peer gameplay.',
    period: '2019',
    technologies: ['React', 'Go', 'Blockchain', 'Distributed Systems', 'Yarn', 'Peerster Blockchain'],
    links: {
      github: 'https://github.com/aounleonardo/Rasp'
    },
    category: 'school'
  },
  {
    id: 'applied-data-analysis',
    title: 'Applied Data Analysis - ADA Course Project',
    description: 'Comprehensive data analysis project for EPFL\'s Applied Data Analysis course. Applied statistical methods and machine learning techniques to real-world datasets.',
    period: '2019',
    technologies: ['Python', 'Jupyter Notebook', 'Data Analysis', 'Machine Learning', 'Statistics'],
    links: {
      github: 'https://github.com/coudr3c/ADA'
    },
    category: 'school'
  },
  {
    id: 'pattern-recognition',
    title: 'Computational Geometry - Image Pattern Recognition',
    description: 'Development of algorithms for image pattern recognition using computational geometry techniques.',
    technologies: ['Computer Vision', 'Computational Geometry', 'Image Processing'],
    category: 'school'
  },
  {
    id: 'distributed-data-manager',
    title: 'Distributed Systems - Distributed Data Manager',
    description: 'Implementation of a distributed data management system with consistency and fault tolerance features. Built using Erlang for high availability and fault tolerance.',
    period: '2019',
    technologies: ['Erlang', 'Distributed Systems', 'Data Management', 'Consistency Protocols'],
    links: {
      github: 'https://github.com/coudr3c/DS_Project'
    },
    category: 'school'
  },
  {
    id: 'image-processing-tools',
    title: 'Image Processing Tools',
    description: 'Development of multiple image processing tools including a GIMP plugin implementing the Canny edge detection algorithm and a bitmap to vector image transformation tool with automated tracing and optimization.',
    technologies: ['C', 'Image Processing', 'Plugin Development', 'Computer Vision', 'Vector Graphics', 'Algorithm Design'],
    category: 'misc'
  },
  {
    id: 'rust-vm-connect',
    title: 'VM Connect - AWS SSM RDP Tunneling Tool',
    description: 'A Rust GUI application that simplifies connecting to AWS EC2 instances through AWS Systems Manager (SSM) tunnels and Remote Desktop Protocol (RDP). Features a modern graphical interface built with egui, concurrent task management, automatic RDP file discovery, and configurable port forwarding. Eliminates the complexity of manually setting up SSM tunnels and RDP connections.',
    period: '2025',
    technologies: ['Rust', 'egui', 'Tokio', 'AWS SDK', 'AWS SSM', 'RDP', 'GUI', 'Async Programming', 'WebSocket', 'Cross-platform'],
    links: {
      github: 'https://github.com/coudr3c/rust-vm-connect',
      external: '/vm-connect'
    },
    category: 'misc',
    featured: true
  }
];