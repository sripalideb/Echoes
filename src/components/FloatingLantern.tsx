import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface FloatingLanternProps {
  delay: number;
  duration: number;
  x: number;
  color: string;
  size: 'small' | 'medium' | 'large';
}

interface Spark {
  id: number;
  angle: number;
  distance: number;
  opacity: number;
  scale: number;
}

export function FloatingLantern({ delay, duration, x, color, size }: FloatingLanternProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  const sizeMap = {
    small: { width: 30, height: 40 },
    medium: { width: 40, height: 55 },
    large: { width: 50, height: 70 },
  };

  const dimensions = sizeMap[size];

  const handleHover = useCallback(() => {
    if (isClicked) return;
    
    setIsClicked(true);
    const newSparks = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      angle: (Math.PI * 2 * i) / 16,
      distance: 0,
      opacity: 1,
      scale: 1.5,
    }));
    setSparks(newSparks);

    // Reset after animation
    setTimeout(() => {
      setSparks([]);
      setIsClicked(false);
    }, 1200);
  }, [isClicked]);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        bottom: '-10%',
      }}
      onHoverStart={handleHover}
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

      {/* Spark Effect */}
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            className="absolute"
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              backgroundColor: color,
              boxShadow: `0 0 8px ${color}`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ scale: 1.5, opacity: 1 }}
            animate={{
              x: Math.cos(spark.angle) * 80,
              y: Math.sin(spark.angle) * 80,
              scale: [1.5, 0.7],
              opacity: [1, 0],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
