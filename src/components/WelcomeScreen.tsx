import { useState } from 'react';
import { motion } from 'motion/react';
import { DiyaIcon } from './DiyaIcon';
import { FloatingLantern } from './FloatingLantern';

interface WelcomeScreenProps {
  onEnter: () => void;
  backgroundImage: string;
}

export function WelcomeScreen({ onEnter, backgroundImage }: WelcomeScreenProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [isHoveringDiya, setIsHoveringDiya] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const affirmations = [
    "I lit this diya for you tonight. May its light find you wherever you are, and bring you warmth.",
    "You know what? Amma made your favorite sweets today. She saved some for you.",
    "Papa was asking about you again. He keeps looking at your photo and smiling.",
    "Your room is exactly how you left it. We haven't changed a thing, beta.",
    "Diwali isn't the same without you, but we're sending you all our love anyway.",
    "I know you're missing home today. Home is missing you too.",
    "We lit the first diya thinking of you. You're always in our hearts.",
    "The neighbors keep asking when you're coming back. Even they miss you!",
    "Your favorite mithai is waiting for you. Come home soon, okay?",
    "Distance can't dim the light we hold for you. Happy Diwali, my dear.",
    "Remember how we used to make rangoli together? Those memories keep me warm.",
    "I wore your favorite saree today. It reminded me of all our Diwalis together.",
  ];

  const showRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setCurrentMessageIndex(randomIndex);
    setShowMessage(true);
    setIsHoveringDiya(true);
  };

  const hideMessage = () => {
    setShowMessage(false);
    setIsHoveringDiya(false);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with lotus image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.35)',
        }}
      />
      
      {/* Warm cozy overlay for better text visibility */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(75, 30, 30, 0.3), rgba(75, 30, 30, 0.7))',
        }}
      />

      {/* Floating Sky Lanterns */}
      <FloatingLantern delay={0} duration={25} x={10} color="#FFD4A3" size="medium" />
      <FloatingLantern delay={3} duration={28} x={25} color="#FF9A7A" size="small" />
      <FloatingLantern delay={6} duration={30} x={75} color="#A8D5E2" size="large" />
      <FloatingLantern delay={2} duration={26} x={85} color="#FFD4A3" size="small" />
      <FloatingLantern delay={8} duration={32} x={50} color="#FF9A7A" size="medium" />
      <FloatingLantern delay={5} duration={27} x={65} color="#A8D5E2" size="small" />
      <FloatingLantern delay={10} duration={29} x={40} color="#FFD4A3" size="large" />
      <FloatingLantern delay={12} duration={31} x={15} color="#A8D5E2" size="medium" />
            <FloatingLantern delay={0} duration={25} x={10} color="#FFD4A3" size="medium" />
      <FloatingLantern delay={1} duration={28} x={85} color="#FF9A7A" size="small" />
      <FloatingLantern delay={5} duration={30} x={55} color="#A8D5E2" size="large" />
      <FloatingLantern delay={9} duration={26} x={45} color="#FFD4A3" size="small" />
      <FloatingLantern delay={2} duration={32} x={53} color="#FF9A7A" size="medium" />
      <FloatingLantern delay={3} duration={27} x={68} color="#A8D5E2" size="small" />
      <FloatingLantern delay={4} duration={29} x={20} color="#FFD4A3" size="large" />
      <FloatingLantern delay={6} duration={31} x={25} color="#A8D5E2" size="medium" />

      {/* Floating lotus-inspired sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() > 0.7 ? '3px' : '2px',
            height: Math.random() > 0.7 ? '3px' : '2px',
            backgroundColor: i % 3 === 0 ? '#FF9A7A' : i % 3 === 1 ? '#FFD4A3' : '#A8D5E2',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 max-w-md mx-auto">
        {/* App Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-3"
          style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: '3.5rem',
            color: '#FFD4A3',
            textShadow: '0 2px 30px rgba(255, 154, 122, 0.6)',
            lineHeight: 1.2,
          }}
        >
          Echoes
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-12 text-center"
          style={{ 
            color: '#F5E9D5',
            fontSize: '1.125rem',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          The sounds of home, shared across the world.
        </motion.p>

        {/* Interactive Diya - Click to Enter */}
        <div className="relative mb-8">
          <motion.div
            className="relative cursor-pointer"
            onClick={onEnter}
            onHoverStart={showRandomMessage}
            onHoverEnd={hideMessage}
            onTouchStart={(e) => {
              e.preventDefault();
              if (showMessage) {
                hideMessage();
              } else {
                showRandomMessage();
              }
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Diya glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ 
                backgroundColor: isHoveringDiya ? '#FF9A7A' : '#FFD4A3',
                width: '120px',
                height: '120px',
              }}
              animate={{
                opacity: isHoveringDiya ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3],
                scale: isHoveringDiya ? [1, 1.3, 1] : [1, 1.15, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            
            {/* Diya icon */}
            <motion.div
              className="relative"
              animate={{
                rotate: isHoveringDiya ? [0, -2, 2, -2, 0] : 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <DiyaIcon 
                className="w-32 h-32"
                style={{
                  filter: 'drop-shadow(0 4px 20px rgba(255, 154, 122, 0.4))',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Hover message */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ 
              opacity: showMessage ? 1 : 0, 
              y: showMessage ? -30 : -20,
              scale: showMessage ? 1 : 0.9,
            }}
            transition={{ duration: 0.3 }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-72 px-5 py-3 rounded-2xl backdrop-blur-lg pointer-events-none"
            style={{ 
              backgroundColor: 'rgba(245, 233, 213, 0.95)',
              boxShadow: '0 8px 32px rgba(255, 154, 122, 0.4)',
              border: '1px solid rgba(255, 212, 163, 0.5)',
            }}
          >
            <p className="text-sm text-center leading-relaxed" style={{ color: '#4B1E1E' }}>
              {affirmations[currentMessageIndex]}
            </p>
          </motion.div>
        </div>

        {/* Interactive prompt - Creative CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center"
        >
          <motion.p
            onClick={onEnter}
            className="cursor-pointer px-6 py-2"
            style={{ 
              color: '#FFD4A3',
              fontSize: '1.25rem',
              fontWeight: '500',
              textShadow: '0 0 10px rgba(247, 133, 2, 0.9), 0 0 20px rgba(247, 133, 2, 0.7), 0 0 30px rgba(247, 133, 2, 0.5)',
            }}
            animate={{
              opacity: [0.85, 1, 0.85],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.05,
              textShadow: '0 0 15px rgba(239, 214, 26, 0.99), 0 0 30px rgba(239, 214, 26, 0.8), 0 0 45px rgba(239, 214, 26, 0.6)',
            }}
          >
            Touch the flame to begin
          </motion.p>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 text-center text-sm opacity-60 leading-relaxed"
          style={{ 
            color: '#F5E9D5',
            textShadow: '0 1px 8px rgba(0, 0, 0, 0.5)',
          }}
        >
          For anyone far from home this Diwali,<br />may these echoes find you
        </motion.p>
      </div>
    </div>
  );
}