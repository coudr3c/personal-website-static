import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'master-thesis',
    title: 'Master Thesis - Detecting Dark Patterns in Cookie Banners',
    description: 'Research thesis conducted at PRIVATICS lab in Grenoble focusing on identifying and analyzing dark patterns in cookie consent banners across the web.',
    period: 'February - July 2020',
    technologies: ['Python', 'Web Scraping', 'Data Analysis', 'Privacy Research'],
    links: {
      report: '/master-thesis.pdf'
    },
    category: 'thesis',
    featured: true
  },
  {
    id: 'logitech-internship',
    title: 'Logitech Internship - eSports Pro Player Detection',
    description: 'Developed machine learning tools to identify future eSports professional players using data analysis and predictive modeling.',
    period: 'February - August 2018',
    technologies: ['Machine Learning', 'Data Analysis', 'Docker', 'Kubernetes', 'C++'],
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
    title: 'Distributed System Engineering - Blockchain Rock-Paper-Scissors',
    description: 'Implementation of a distributed Rock-Paper-Scissors game using blockchain technology and smart contracts for fair gameplay.',
    period: '2019',
    technologies: ['Blockchain', 'Distributed Systems', 'Smart Contracts', 'Scala'],
    links: {
      github: 'https://github.com/coudr3c/DB_Project1'
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
    title: 'Rust VM Connect',
    description: 'RDP connection application through AWS SSM Port Forwarding built with Rust and a modern GUI. Provides secure remote desktop access to cloud instances.',
    period: '2025',
    technologies: ['Rust', 'AWS', 'RDP', 'GUI', 'Async Programming', 'Networking'],
    links: {
      github: 'https://github.com/coudr3c/rust-vm-connect'
    },
    category: 'misc'
  }
];