import { PipelineStep } from '@/types';

export const discoverPhase: PipelineStep = {
  id: 'discover',
  title: 'Discover',
  description: 'Deep dive into the business problem, current infrastructure, and identifying AI/Automation opportunities.',
  duration: 'Typical Duration: 1–3 days (Depends on scope)',
  color: '#3B82F6', // Blue
  challenges: [
    { problem: 'Vague business requirements', solution: 'Structured stakeholder interviews & requirement mapping' },
    { problem: 'Unrealistic AI expectations', solution: 'Feasibility analysis and setting clear, achievable KPIs' }
  ],
  deliverables: [
    'Technical Specification Document',
    'Feasibility Report',
    'Project Roadmap & Milestones'
  ]
};
