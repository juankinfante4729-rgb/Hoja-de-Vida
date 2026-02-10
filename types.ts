export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  isCurrent?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface Course {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface Language {
  language: string;
  level: string; // e.g., "Nativo", "C1 - Avanzado", etc.
  percentage: number; // For visual bar (0-100)
}