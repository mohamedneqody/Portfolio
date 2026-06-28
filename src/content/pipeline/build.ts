import { PipelineStep } from '@/types';

export const buildPhase: PipelineStep = {
  id: 'build',
  title: 'Build',
  description: 'Developing the core AI agents, writing the intelligent workflows, and engineering robust prompts with fallback strategies.',
  duration: 'Typical Duration: 1–3 weeks (Depends on complexity)',
  color: '#22C55E', // Green
  architecture: [
    { name: 'Input Data' },
    { name: 'n8n Workflow', icon: 'workflow' },
    { name: 'AI Agent (LLM)', icon: 'brain' },
    { name: 'Structured Output' }
  ],
  technologies: [
    { category: 'Automation', technologies: ['n8n', 'LangGraph', 'Make'] },
    { category: 'LLMs', technologies: ['Gemini 2.5 Pro', 'OpenAI', 'Claude'] }
  ],
  challenges: [
    { problem: 'API Rate Limits & Latency', solution: 'Implemented Redis queues and asynchronous background processing.' },
    { problem: 'Prompt Reliability', solution: 'Added a Self-Reflection Agent that reviews and corrects outputs before final delivery.' }
  ],
  deliverables: [
    'n8n Workflow JSONs',
    'Custom Agent Scripts (Python/Node)',
    'Prompt Library'
  ],
  linkedProjects: [
    { id: 4, title: 'Enterprise Multi-Agent Telegram Assistant' }
  ]
};
