import { PipelineStep } from '@/types';
import { discoverPhase } from './discover';
import { designPhase } from './design';
import { buildPhase } from './build';
import { integratePhase } from './integrate';
import { validatePhase } from './validate';
import { deployPhase } from './deploy';
import { optimizePhase } from './optimize';

export const aiPipelineData: PipelineStep[] = [
  discoverPhase,
  designPhase,
  buildPhase,
  integratePhase,
  validatePhase,
  deployPhase,
  optimizePhase
];
