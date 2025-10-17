import { useState } from 'react';
import { motion } from 'motion/react';

interface SoundOrbProps {
  caption: string;
  color: string;
  delay: number;
  x: number;
  y: number;
  audioUrl: string;
  onPlay: () => void;
  isPlaying: boolean;
}

export function SoundOrb({ caption, color, delay, x, y, audioUrl, onPlay, isPlaying }: SoundOrbProps) {
  const [showCaption, setShowCaption] = useState(false);

  const handleClick = () => {
    onPlay();
    setShowCaption(true);
    setTimeout(() => setShowCaption(false), 3000);
  };

  return (
    <div 
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      {/* Caption */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showCaption ? 1 : 0, y: showCaption ? -50 : -40 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap pointer-events-none"
      >
        <div className="px-3 py-1 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(75, 30, 30, 0.8)' }}>
          <p className="text-sm" style={{ color: '#F5E9D5' }}>{caption}</p>
        </div>
      </motion.div>

      {/* Orb */}
      <motion.button
        onClick={handleClick}
        className="relative w-16 h-16 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2"
        style={{
          backgroundColor: color,
          boxShadow: `0 4px 20px ${color}60, 0 0 40px ${color}40`,
          focusRingColor: color,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isPlaying ? [1, 1.2, 1] : 1,
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          scale: isPlaying ? { duration: 0.6, repeat: 0 } : {},
          opacity: { delay: delay, duration: 0.8 },
          y: {
            duration: 3 + delay,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            backgroundColor: color,
            filter: 'blur(8px)',
          }}
          animate={{
            opacity: isPlaying ? [0.6, 1, 0.6] : [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </div>
  );
}