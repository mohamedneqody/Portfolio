import { PipelineStep } from '@/types';

export const designPhase: PipelineStep = {
  id: 'design',
  title: 'Design',
  description: 'Architecting the optimal solution, selecting the right LLMs, databases, and drawing the entire intelligent workflow blueprint.',
  duration: 'Typical Duration: 2–5 days',
  color: '#A855F7', // Purple
  architecture: [
    { name: 'Requirements' },
    { name: 'System Design', icon: 'diagram' },
    { name: 'Tech Selection' }
  ],
  decisionMatrix: [
    { name: 'GPT vs Gemini', why: 'Evaluated cost vs vision capabilities for the specific use case.' },
    { name: 'SQL vs PostgreSQL', why: 'Needed pgvector for RAG vector embeddings.' },
    { name: 'LangGraph vs n8n', why: 'Chose n8n for rapid integration, fallback to LangGraph for complex agentic loops.' }
  ],
  challenges: [
    { problem: 'Scalability vs Cost', solution: 'Designed a multi-tier caching system (Redis) to minimize LLM token usage.' }
  ],
  deliverables: [
    'System Architecture Diagram',
    'Database Schema',
    'Tech Stack Selection Report'
  ]
};
