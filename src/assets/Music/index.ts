// Import audio files
import diyaFlicker from './diya_flicker.mp3';
import bells from './bells.mp3';
import laughs from './laughs.mp3';
import thud_sound_effect from './thud_sound_effect.mp3';
import home_sound from './home_.mp3';
import classical_flute from './classical_flute.mp3';
import happy_diwali from './happy_diwali.mp3';
import kids from './kids.mp3';

// Export audio files
export const sounds = {
  diyaFlicker,
  bells,
  laughs,
  thud_sound_effect,
  home_sound,
  classical_flute,
  happy_diwali,
  kids
} as const;

// Export individual sounds if needed
export { diyaFlicker , bells, laughs, thud_sound_effect, home_sound, classical_flute, happy_diwali, kids };