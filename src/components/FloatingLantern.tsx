import { motion } from 'motion/react';

interface FloatingLanternProps {
  delay: number;
  duration: number;
  x: number;
  color: string;
  size: 'small' | 'medium' | 'large';
}

export function FloatingLantern({ delay, duration, x, color, size }: FloatingLanternProps) {
  const sizeMap = {
    small: { width: 30, height: 40 },
    medium: { width: 40, height: 55 },
    large: { width: 50, height: 70 },
  };

  const dimensions = sizeMap[size];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        bottom: '-10%',
      }}
      initial={{ y: 0, opacity: 0 }}
      animate={{
        y: '-120vh',
        x: [0, 20, -10, 15, 0],
        opacity: [0, 0.7, 0.8, 0.7, 0],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear',
        x: {
          duration: duration * 0.4,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      }}
    >
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 50 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lantern glow */}
        {/* <motion.ellipse
          cx="25"
          cy="35"
          rx="28"
          ry="35"
          fill={color}
          opacity="0.3"
          style={{ filter: 'blur(12px)' }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        /> */}

        {/* Lantern body - paper part */}
        <path
          d="M15,20 Q10,30 10,40 Q10,50 15,55 L35,55 Q40,50 40,40 Q40,30 35,20 Z"
          fill={color}
          opacity="0.6"
          stroke={color}
          strokeWidth="1"
          strokeOpacity="0.8"
        />

        {/* Top cap */}
        <ellipse
          cx="25"
          cy="20"
          rx="10"
          ry="3"
          fill={color}
          opacity="0.8"
        />

        {/* Bottom cap */}
        <ellipse
          cx="25"
          cy="55"
          rx="10"
          ry="3"
          fill={color}
          opacity="0.7"
        />

        {/* Flame inside */}
        <motion.ellipse
          cx="25"
          cy="37"
          rx="6"
          ry="10"
          fill="#FFF4E6"
          opacity="0.9"
          animate={{
            opacity: [0.6, 0.9, 0.6],
            ry: [8, 12, 8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Flame core */}
        <motion.ellipse
          cx="25"
          cy="37"
          rx="3"
          ry="6"
          fill="#FFD4A3"
          opacity="0.8"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Decorative horizontal lines */}
        <line x1="15" y1="30" x2="35" y2="30" stroke={color} strokeWidth="0.5" opacity="0.6" />
        <line x1="12" y1="40" x2="38" y2="40" stroke={color} strokeWidth="0.5" opacity="0.6" />
        <line x1="15" y1="48" x2="35" y2="48" stroke={color} strokeWidth="0.5" opacity="0.6" />

        {/* String/wire at top */}
        <line
          x1="25"
          y1="10"
          x2="25"
          y2="20"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  );
}
