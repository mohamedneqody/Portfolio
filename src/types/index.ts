// ──────────────────────────────────────────────
// Portfolio – Shared Type Definitions
// ──────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  problem: string;
  solution: string;
  tech: string;
  result: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  year: string;
  caseStudy?: CaseStudy;
}

export interface Skill {
  name: string;
  /** Years of experience, e.g. "3+ Years" */
  years: string;
  /** Icon identifier (e.g. a simple-icons slug or emoji) */
  icon: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Outcome {
  metric: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}

export type Difficulty = 1 | 2 | 3 | 4 | 5;
export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'Professional' | 'Specialization';

export interface RelatedProject {
  id: string;
  title: string;
  github?: string;
  live?: string;
}

export interface Certificate {
  id: string | number;
  title: string;
  provider: string;
  category: string;
  image?: string;
  skills: string[];
  projects: RelatedProject[];
  technologies: string[];
  takeaways: string[];
  duration: string;
  completedAt: string; // ISO date string e.g., "2026-06-12"
  verifyUrl?: string;
  pdfUrl?: string;
  featured: boolean;
  level: Level;
  difficulty: Difficulty;
  badge?: 'Verified' | 'Featured' | 'Professional' | 'Popular' | 'Top Pick' | 'Industry Recognized';
}

export type CertificateCategory = 'الكل' | 'AI & Machine Learning' | 'LLM & Generative AI' | 'Python & Backend' | 'Data Science' | 'Cloud & DevOps' | 'Automation & n8n';

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}
