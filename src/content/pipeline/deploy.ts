import { PipelineStep } from '@/types';

export const deployPhase: PipelineStep = {
  id: 'deploy',
  title: 'Deploy',
  description: 'Shipping the solution to a production-ready environment, setting up CI/CD, and ensuring high availability.',
  duration: 'Typical Duration: 1–2 days',
  color: '#06B6D4', // Cyan
  architecture: [
    { name: 'Local Env' },
    { name: 'Docker Hub' },
    { name: 'Production VPS' }
  ],
  technologies: [
    { category: 'Infrastructure', technologies: ['Docker', 'Vercel', 'Ubuntu/Linux VPS'] }
  ],
  deliverables: [
    'Dockerized Application',
    'Deployment Guide & Secrets Management'
  ]
};
