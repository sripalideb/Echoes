import { useState, useRef } from "react";
import { motion } from "motion/react";
import { SoundOrb } from "./SoundOrb";
import { Button } from "./ui/button";
import { Home } from "lucide-react";
import { diyaFlicker, bells, laughs } from "../assets/Music";

interface SoundscapeScreenProps {
  onBackHome: () => void;
  backgroundImage: string;
}

const soundData = [
  {
    id: 1,
    caption: "The first diya flickers",
    color: "#FFC300",
    x: 15,
    y: 20,
    audioUrl: diyaFlicker
  },
  {
    id: 2,
    caption: "A temple bell rings",
    color: "#2B6F74",
    x: 75,
    y: 15,
    audioUrl: bells
  },
  {
    id: 3,
    caption: "Firecrackers sparkle outside",
    color: "#B55D63",
    x: 45,
    y: 25,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 4,
    caption: "Someone laughs in the kitchen",
    color: "#FFC300",
    x: 25,
    y: 45,
    audioUrl: laughs,
  },
  {
    id: 5,
    caption: "The chai whistles",
    color: "#2B6F74",
    x: 80,
    y: 40,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 6,
    caption: "Sugar syrup bubbles",
    color: "#B55D63",
    x: 55,
    y: 50,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 7,
    caption: "Colors bloom on the floor",
    color: "#FFC300",
    x: 10,
    y: 65,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 8,
    caption: "Shubh Deepavali beta",
    color: "#2B6F74",
    x: 70,
    y: 60,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 9,
    caption: "The shehnai begins",
    color: "#B55D63",
    x: 35,
    y: 70,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 10,
    caption: "A fire crackles softly",
    color: "#FFC300",
    x: 60,
    y: 75,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 11,
    caption: "Neighbours call across balconies",
    color: "#2B6F74",
    x: 20,
    y: 85,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 12,
    caption: "The night grows still",
    color: "#B55D63",
    x: 85,
    y: 80,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 13,
    caption: "I wish you were here",
    color: "#FFC300",
    x: 50,
    y: 88,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
  {
    id: 14,
    caption: "It smells like home today",
    color: "#2B6F74",
    x: 40,
    y: 35,
    audioUrl: "YOUR_AUDIO_URL_HERE.mp3",
  },
];

export function SoundscapeScreen({
  onBackHome,
  backgroundImage,
}: SoundscapeScreenProps) {
  const [playingId, setPlayingId] = useState<number | null>(
    null,
  );
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleOrbPlay = (id: number, audioUrl: string) => {
    // Check if it's a placeholder URL
    if (
      audioUrl === "YOUR_AUDIO_URL_HERE.mp3" ||
      !audioUrl ||
      audioUrl.trim() === ""
    ) {
      console.log("Please add a real audio URL for this orb");
      setPlayingId(id);
      // Simulate playback for demo purposes
      setTimeout(() => {
        setPlayingId(null);
      }, 2000);
      return;
    }

    // Stop any currently playing audio
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.currentTime = 0;
      currentAudioRef.current = null;
    }

    // Create and play new audio
    const audio = new Audio();

    // Set CORS mode to try to handle cross-origin issues
    audio.crossOrigin = "anonymous";

    currentAudioRef.current = audio;

    setPlayingId(id);

    // Handle errors before setting source
    audio.addEventListener("error", (e) => {
      console.warn(`⚠️ Audio failed to load for orb ${id}`);
      console.warn(`URL: ${audioUrl}`);
      console.warn(
        `Tip: Make sure the URL is a direct link to an audio file (should end in .mp3, .wav, etc.)`,
      );
      console.warn(
        `Try opening the URL in a new browser tab - if it downloads instead of plays, it might work.`,
      );
      setPlayingId(null);
      currentAudioRef.current = null;
    });

    // Reset playing state when audio ends
    audio.addEventListener("ended", () => {
      setPlayingId(null);
      currentAudioRef.current = null;
    });

    // Set source and play
    audio.src = audioUrl;

    audio.play().catch((error) => {
      console.warn(
        `⚠️ Playback failed for orb ${id}:`,
        error.message,
      );
      console.warn(`This usually means:`);
      console.warn(
        `1. The URL doesn't point directly to an audio file`,
      );
      console.warn(
        `2. The hosting service blocks embedding/streaming`,
      );
      console.warn(`3. CORS policy is blocking the request`);
      console.warn(`\nTry these hosting services instead:`);
      console.warn(`- Google Drive (use direct download link)`);
      console.warn(`- Dropbox (change ?dl=0 to ?dl=1)`);
      console.warn(`- SoundCloud`);
      console.warn(`- GitHub raw files`);
      setPlayingId(null);
      currentAudioRef.current = null;
    });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />

      {/* Darker overlay for better orb visibility */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(75, 30, 30, 0.6), rgba(75, 30, 30, 0.8))",
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 195, 0, 0.1) 10px, rgba(255, 195, 0, 0.1) 20px)`,
        }}
      />

      {/* Ambient sparkles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            backgroundColor:
              i % 3 === 0
                ? "#FFC300"
                : i % 3 === 1
                  ? "#2B6F74"
                  : "#B55D63",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      {/* Orbs container */}
      <div className="relative z-10 w-full h-screen">
        {soundData.map((sound, index) => (
          <SoundOrb
            key={sound.id}
            caption={sound.caption}
            color={sound.color}
            delay={index * 0.1}
            x={sound.x}
            y={sound.y}
            audioUrl={sound.audioUrl}
            onPlay={() =>
              handleOrbPlay(sound.id, sound.audioUrl)
            }
            isPlaying={playingId === sound.id}
          />
        ))}
      </div>

      {/* Navigation button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <Button
          onClick={onBackHome}
          variant="outline"
          className="px-6 py-3 rounded-full backdrop-blur-md transition-all duration-300 hover:shadow-lg flex items-center gap-2"
          style={{
            backgroundColor: "rgba(245, 233, 213, 0.1)",
            borderColor: "rgba(245, 233, 213, 0.3)",
            color: "#F5E9D5",
          }}
        >
          <Home className="w-4 h-4" />
          Home
        </Button>
      </motion.div>

      {/* Instructions hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 3, delay: 2 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center"
      >
        <p
          className="text-sm opacity-70"
          style={{ color: "#F5E9D5" }}
        >
          Tap the orbs to hear echoes of home
        </p>
      </motion.div>
    </div>
  );
}