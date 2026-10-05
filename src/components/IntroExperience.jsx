import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../data/wedding';
import { Nilavilakku } from './ornaments/Nilavilakku';

export const IntroExperience = ({ onComplete }) => {
  const [stage, setStage] = useState(0); 
  // 0: Lamp appears unlit in dark brown
  // 1: Flame ignites & warm light expands (0.8s)
  // 2: Temple reveals & blessings text appears (1.8s)
  // 3: Couple names VYSHNAV & POOJA reveal (2.6s)
  // 4: Date & Venue appear (3.4s)
  // 5: Complete & smoothly transition out (4.2s)

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 1600);
    const t3 = setTimeout(() => setStage(3), 2500);
    const t4 = setTimeout(() => setStage(4), 3300);
    const t5 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [onComplete]);

  const handleSkip = () => {
    if (onComplete) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.9, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#241710] overflow-hidden select-none"
    >
      {/* Background Temple & Warm Morning Light Revelation (Stage >= 2) */}
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ 
          opacity: stage >= 2 ? 0.35 : 0,
          scale: stage >= 2 ? 1 : 1.08
        }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('/images/guruvayoor-temple.jpg')" }}
      />

      {/* Dark Vignette / Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#241710] via-[#241710]/80 to-[#241710] pointer-events-none" />

      {/* Warm Light Expansion (Stage >= 1) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ 
          opacity: stage >= 1 ? 0.75 : 0,
          scale: stage >= 1 ? 1 : 0.2
        }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute w-[450px] md:w-[700px] h-[450px] md:h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(235,165,60,0.45) 0%, rgba(201,164,92,0.18) 45%, transparent 75%)'
        }}
      />

      {/* Traditional Ornamental Framing Border (Stage >= 2) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: stage >= 2 ? 1 : 0, scale: stage >= 2 ? 1 : 0.96 }}
        transition={{ duration: 1.2 }}
        className="absolute inset-4 md:inset-8 border border-[#C9A45C]/40 rounded-sm pointer-events-none"
      >
        <div className="absolute inset-1.5 border border-[#D6B56C]/20 rounded-xs" />
        {/* Corner Ornaments */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#D6B56C]" />
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#D6B56C]" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#D6B56C]" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#D6B56C]" />
      </motion.div>

      {/* Center Cinematic Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">
        {/* Nilavilakku Brass Lamp */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-4"
        >
          <Nilavilakku 
            className="w-24 h-44 md:w-28 md:h-52" 
            isLit={stage >= 1} 
            glowIntensity={stage >= 1 ? "high" : "normal"}
            showBaseFlowers={true}
          />
        </motion.div>

        {/* Blessings Text (Stage >= 2) */}
        <AnimatePresence>
          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-[#D6B56C] font-serif text-[11px] md:text-xs tracking-[0.3em] uppercase mb-3"
            >
              {wedding.blessingText}
            </motion.p>
          )}
        </AnimatePresence>

        {/* VYSHNAV & POOJA Names (Stage >= 3) */}
        <AnimatePresence>
          {stage >= 3 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              className="my-1"
            >
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-brass-metallic tracking-wider font-semibold">
                {wedding.groom.toUpperCase()}
              </h1>
              <span className="block my-1 text-xl md:text-2xl font-serif text-[#D6B56C]/80 italic">
                &
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-brass-metallic tracking-wider font-semibold">
                {wedding.bride.toUpperCase()}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Date & Venue (Stage >= 4) */}
        <AnimatePresence>
          {stage >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="mt-4 flex flex-col items-center gap-1"
            >
              <div className="w-16 h-[1px] bg-[#C9A45C]/60 my-1" />
              <p className="text-xs md:text-sm text-[#F5EBD5] font-serif tracking-[0.25em] uppercase font-medium">
                {wedding.date}
              </p>
              <p className="text-[11px] md:text-xs text-[#D6B56C] font-serif tracking-widest uppercase">
                {wedding.venue}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        type="button"
        className="absolute bottom-6 right-6 z-20 text-[11px] font-serif uppercase tracking-[0.2em] text-[#D6B56C]/70 hover:text-[#FFF8E8] border border-[#C9A45C]/30 hover:border-[#D6B56C] px-3.5 py-1.5 rounded-full transition-all duration-300"
      >
        Skip Intro ✕
      </button>
    </motion.div>
  );
};

export default IntroExperience;
