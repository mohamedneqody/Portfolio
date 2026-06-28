import { PipelineStep } from '@/types';

export const validatePhase: PipelineStep = {
  id: 'validate',
  title: 'Validate',
  description: 'Rigorous testing of the AI system to ensure fault tolerance, handling edge cases, and verifying output accuracy (Human-in-the-Loop).',
  duration: 'Typical Duration: 2–4 days',
  color: '#EAB308', // Yellow
  challenges: [
    { problem: 'AI Hallucinations', solution: 'Implemented strict JSON schema validations and ground-truth RAG retrieval limits.' }
  ],
  deliverables: [
    'Test Coverage Report',
    'Edge Case Analysis',
    'User Acceptance Testing (UAT)'
  ],
  linkedProjects: [
    { id: 1, title: 'Data Extraction System' }
  ]
};
