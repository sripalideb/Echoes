import { useState } from "react";
import { motion } from "framer-motion";
import { DiyaIcon } from "./DiyaIcon";
import { FloatingLantern } from "./FloatingLantern";

interface WelcomeScreenProps {
  onEnter: () => void;
  backgroundImage: string;
}

export function WelcomeScreen({
  onEnter,
  backgroundImage,
}: WelcomeScreenProps) {
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
      {/* Background image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.35)",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(75, 30, 30, 0.3), rgba(75, 30, 30, 0.7))",
        }}
      />

      {/* Floating Lanterns */}
      {[
        [0, 25, 10, "#FFD4A3", "medium"],
        [3, 28, 25, "#FF9A7A", "small"],
        [6, 30, 75, "#A8D5E2", "large"],
        [2, 26, 85, "#FFD4A3", "small"],
        [8, 32, 50, "#FF9A7A", "medium"],
        [5, 27, 65, "#A8D5E2", "small"],
        [10, 29, 40, "#FFD4A3", "large"],
        [12, 31, 15, "#A8D5E2", "medium"],
        [1, 28, 85, "#FF9A7A", "small"],
        [5, 30, 55, "#A8D5E2", "large"],
        [9, 26, 45, "#FFD4A3", "small"],
        [2, 32, 53, "#FF9A7A", "medium"],
        [3, 27, 68, "#A8D5E2", "small"],
        [4, 29, 20, "#FFD4A3", "large"],
        [6, 31, 25, "#A8D5E2", "medium"],
      ].map(([delay, duration, x, color, size], idx) => (
        <FloatingLantern
          key={idx}
          delay={delay as number}
          duration={duration as number}
          x={x as number}
          color={color as string}
          size={size as "small" | "medium" | "large"}
        />
      ))}

      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() > 0.7 ? "3px" : "2px",
            height: Math.random() > 0.7 ? "3px" : "2px",
            backgroundColor:
              i % 3 === 0 ? "#FF9A7A" : i % 3 === 1 ? "#FFD4A3" : "#A8D5E2",
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
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-3"
          style={{
            fontFamily: "'Pacifico', cursive",
            fontSize: "3.5rem",
            color: "#FFD4A3",
            textShadow: "0 2px 30px rgba(255, 154, 122, 0.6)",
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
            color: "#F5E9D5",
            fontSize: "1.125rem",
            textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          The sounds of home, shared across the world.
        </motion.p>

        {/* Interactive Diya */}
        <div className="relative mb-8">
          <motion.div
            className="relative cursor-pointer"
            onHoverStart={showRandomMessage}
            onHoverEnd={hideMessage}
            onClick={() => {
              if (showMessage)
                onEnter(); // Only go inside if message already shown
              else showRandomMessage(); // First tap shows message
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              if (showMessage) onEnter();
              else showRandomMessage();
            }}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Glow */}
            <motion.div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{
                backgroundColor: isHoveringDiya ? "#FF9A7A" : "#FFD4A3",
                width: "120px",
                height: "120px",
              }}
              animate={{
                opacity: isHoveringDiya ? [0.4, 0.7, 0.4] : [0.3, 0.5, 0.3],
                scale: isHoveringDiya ? [1, 1.3, 1] : [1, 1.15, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Diya icon */}
            <motion.div
              className="relative"
              animate={{ rotate: isHoveringDiya ? [0, -2, 2, -2, 0] : 0 }}
              transition={{ duration: 0.6 }}
            >
              <DiyaIcon
                className="w-32 h-32"
                style={{
                  filter: "drop-shadow(0 4px 20px rgba(255, 154, 122, 0.4))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Floating message */}
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
              backgroundColor: "rgba(245, 233, 213, 0.95)",
              boxShadow: "0 8px 32px rgba(255, 154, 122, 0.4)",
              border: "1px solid rgba(255, 212, 163, 0.5)",
            }}
          >
            <p
              className="text-sm text-center leading-relaxed"
              style={{ color: "#4B1E1E" }}
            >
              {affirmations[currentMessageIndex]}
            </p>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-center"
        >
          <motion.div
            className="relative inline-block"
            initial="initial"
            whileHover="hover"
          >
            <motion.p
              onClick={onEnter}
              className="px-6 py-2 cursor-pointer relative z-10"
              style={{
                color: "#FFD4A3",
                fontSize: "1.25rem",
                fontWeight: "500",
                textShadow:
                  "0 0 5px rgba(177, 154, 127, 0.5), 0 0 10px rgba(247, 133, 2, 0.3)",
              }}
              animate={{ opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Touch the flame to begin
            </motion.p>
            <motion.div
              className="absolute left-6 bottom-0 h-[3px]"
              style={{
                background: "linear-gradient(90deg, #FFD4A3, #FF9A7A, #FF6B6B)",
                boxShadow:
                  "0 0 10px rgba(255, 154, 122, 0.6), 0 0 20px rgba(255, 107, 107, 0.4)",
                transformOrigin: "left",
              }}
              variants={{
                initial: { scaleX: 0 },
                hover: { scaleX: 1 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,212,163,0.5), rgba(255,154,122,0.5), rgba(255,107,107,0.5))",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 text-center text-sm opacity-60 leading-relaxed"
          style={{
            color: "#F5E9D5",
            textShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
          }}
        >
          For anyone far from home this Diwali,
          <br />
          may these echoes find you
        </motion.p>
      </div>
    </div>
  );
}
