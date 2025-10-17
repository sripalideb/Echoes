// Import audio files
import diyaFlicker from './diya_flicker.mp3';
import bells from './bells.mp3';
import laughs from './laughs.mp3';

// Export audio files
export const sounds = {
  diyaFlicker,
  bells,
  laughs,
} as const;

// Export individual sounds if needed
export { diyaFlicker , bells, laughs};