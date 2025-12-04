"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before unmounting
          return 100;
        }
        return prev + 2; // Adjust speed here
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-neon-blue to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-neon-green to-transparent" />
      </div>

      {/* Speedometer Container */}
      <div className="relative h-64 w-64">
        <Image
          src="/speedometer.png"
          alt="Loading Speedometer"
          fill
          className="object-contain"
          priority
        />
        {/* Needle Animation (Simplified as a rotating div for now, or use SVG if complex) */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-1/2 w-1 bg-neon-green origin-bottom"
          style={{ rotate: -120 + (progress / 100) * 240 }} // Sweep from -120 to +120 degrees
          initial={{ rotate: -120 }}
        />
      </div>

      {/* Text */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-white tracking-widest">
          {Math.floor((progress / 100) * 40)} MPH
        </h2>
        <p className="text-sm text-neon-blue animate-pulse mt-2">
          Spinning up diagnostics...
        </p>
      </div>
    </motion.div>
  );
}
