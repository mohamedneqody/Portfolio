// ──────────────────────────────────────────────
// Portfolio – Shared Type Definitions
// ──────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
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
}

export interface Skill {
  name: string;
  /** Proficiency 0 – 100 */
  level: number;
  /** Icon identifier (e.g. a simple-icons slug or emoji) */
  icon: string;
  category: string;
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
  title: string;
  issuer: string;
  date: string;
  url?: string;
  image?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}
