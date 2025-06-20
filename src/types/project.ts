export interface Project {
  id: string;
  title: string;
  description: string;
  period?: string;
  technologies?: string[];
  links?: {
    github?: string;
    demo?: string;
    report?: string;
    external?: string;
  };
  category: 'thesis' | 'internship' | 'gsoc' | 'hackathon' | 'school' | 'misc';
  featured?: boolean;
}

export interface ProjectCategory {
  key: string;
  titleKey: string;
  projects: Project[];
}