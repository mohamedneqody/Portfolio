import { PipelineStep } from '@/types';

export const optimizePhase: PipelineStep = {
  id: 'optimize',
  title: 'Optimize',
  description: 'Post-deployment continuous monitoring, gathering usage metrics, and iterating on the model parameters and workflows to reduce costs and improve speed.',
  duration: 'Continuous',
  color: '#EC4899', // Pink
  decisionMatrix: [
    { name: 'Logging Strategy', why: 'Implemented structured JSON logging with PostgreSQL to track agent token usage and bottlenecks.' }
  ],
  deliverables: [
    'Monitoring Dashboard (Grafana / Metabase)',
    'Performance Optimization Report'
  ]
};
