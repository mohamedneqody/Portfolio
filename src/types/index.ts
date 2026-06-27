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

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image?: string;
  pdfUrl?: string;
  verifyUrl?: string;
}

export type CertificateCategory = 'الكل' | 'AI & Machine Learning' | 'LLM & Generative AI' | 'Python & Backend' | 'Data Science' | 'Cloud & DevOps' | 'Automation & n8n';

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}
