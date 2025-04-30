export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  technologies: string[];
  features: string[];
  image: string;
  liveLink?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  image: string;
}

export interface Achievement {
  id: number;
  title: string;
  description?: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  year: string;
  description: string;
}

export interface Skill {
  id: number;
  name: string;
  level: number; // 0-100
  category: 'language' | 'framework' | 'tool' | 'soft';
}

export interface Training {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface NavItem {
  id: string;
  label: string;
}