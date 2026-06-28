import { PipelineStep } from '@/types';

export const integratePhase: PipelineStep = {
  id: 'integrate',
  title: 'Integrate',
  description: 'Connecting the AI engine with your existing business systems (Telegram, WhatsApp, CRM, Databases) to enable seamless data flow.',
  duration: 'Typical Duration: 3–7 days',
  color: '#F97316', // Orange
  architecture: [
    { name: 'AI Engine' },
    { name: 'API Gateway', icon: 'webhook' },
    { name: 'Client UI / CRM' }
  ],
  technologies: [
    { category: 'Platforms', technologies: ['Telegram Bot API', 'WhatsApp Business', 'Google Sheets'] },
    { category: 'Backend', technologies: ['FastAPI', 'Node.js', 'REST APIs'] }
  ],
  decisionMatrix: [
    { name: 'Direct API vs Webhooks', why: 'Utilized Webhooks for real-time event-driven architecture instead of costly polling.' }
  ],
  deliverables: [
    'API Endpoints / Webhook setup',
    'Integration Tests'
  ]
};
