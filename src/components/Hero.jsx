import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { wedding } from '../data/wedding';
import { Nilavilakku } from './ornaments/Nilavilakku';
import { FloralMotif } from './ornaments/FloralMotif';

export const Hero = () => {
  const { scrollY } = useScroll();

  // Subtle Parallax Transforms
  const bgY = useTransform(scrollY, [0, 800], [0, 160]);
  const lampY = useTransform(scrollY, [0, 800], [0, 90]);
  const textY = useTransform(scrollY, [0, 800], [0, 45]);
  const flowerY = useTransform(scrollY, [0, 800], [0, 110]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.2]);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#countdown');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen w-full flex flex-col items-center justify-between pt-28 pb-10 px-4 md:px-8 overflow-hidden bg-[#241710] select-none"
    >
      {/* 1. Cinematic Background Temple Architecture (Parallax Layer 1 - Slowest) */}
      <motion.div 
        style={{ y: bgY }}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.38, scale: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
      >
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/images/guruvayoor-temple.jpg')" }}
        />
      </motion.div>

      {/* Warm Golden Sunrise Atmospheric Gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85 }}
        transition={{ duration: 2.2 }}
        className="absolute inset-0 bg-gradient-to-b from-[#241710]/85 via-[#241710]/50 to-[#241710] pointer-events-none" 
      />

      {/* Warm Center Dawn Sunlight Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[850px] h-[500px] md:h-[850px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(245,185,60,0.22) 0%, rgba(201,164,92,0.08) 50%, transparent 75%)'
        }}
      />

      {/* 2. Traditional Hanging Jasmine Garland & Banana/Coconut Leaf Accents (Parallax Layer 2) */}
      <motion.div 
        style={{ y: flowerY }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="absolute top-0 left-0 right-0 pointer-events-none flex justify-between px-2 md:px-12 z-10"
      >
        {/* Left Hanging Jasmine Strand */}
        <div className="flex flex-col items-center gap-1.5 opacity-80">
          <div className="w-[1px] h-12 md:h-20 bg-[#D6B56C]/50" />
          <FloralMotif type="jasmine" className="w-5 h-5 text-[#FFF8E8]" />
          <FloralMotif type="marigold" className="w-4 h-4 text-[#FFA500]" />
          <FloralMotif type="jasmine" className="w-5 h-5 text-[#FFF8E8]" />
        </div>

        {/* Center Decorative Temple Kasavu Line */}
        <div className="hidden sm:flex flex-col items-center opacity-60">
          <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mt-2" />
        </div>

        {/* Right Hanging Jasmine Strand */}
        <div className="flex flex-col items-center gap-1.5 opacity-80">
          <div className="w-[1px] h-12 md:h-20 bg-[#D6B56C]/50" />
          <FloralMotif type="jasmine" className="w-5 h-5 text-[#FFF8E8]" />
          <FloralMotif type="marigold" className="w-4 h-4 text-[#FFA500]" />
          <FloralMotif type="jasmine" className="w-5 h-5 text-[#FFF8E8]" />
        </div>
      </motion.div>

      {/* 3. Ornamental Framing Border */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.4 }}
        className="absolute inset-3 sm:inset-6 md:inset-10 border border-[#C9A45C]/30 rounded-sm pointer-events-none"
      >
        <div className="absolute inset-1 border border-[#D6B56C]/15" />
      </motion.div>

      {/* 4. Main Hero Typography & Content (Parallax Layer 3 - Very subtle movement) */}
      <motion.div 
        style={{ y: textY, opacity: heroOpacity }}
        className="relative z-20 flex-1 flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 my-auto"
      >
        {/* Top: With the blessings of our families */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="flex items-center gap-3 mb-4 md:mb-6"
        >
          <span className="w-6 md:w-10 h-[1px] bg-[#C9A45C]/60" />
          <p className="text-[11px] sm:text-xs md:text-sm font-serif text-[#D6B56C] tracking-[0.28em] md:tracking-[0.35em] uppercase font-medium">
            {wedding.blessingText}
          </p>
          <span className="w-6 md:w-10 h-[1px] bg-[#C9A45C]/60" />
        </motion.div>

        {/* Center: Groom & Bride Names */}
        <div className="flex flex-col items-center justify-center my-2 md:my-4">
          {/* VYSHNAV */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-brass-metallic font-normal tracking-[0.12em] md:tracking-[0.18em]"
          >
            {wedding.groom.toUpperCase()}
          </motion.h1>

          {/* Ampersand & Decorative Lotus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex items-center gap-4 my-1 md:my-2"
          >
            <span className="w-8 md:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#C9A45C]/70" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#D6B56C] italic font-light">
              &
            </span>
            <span className="w-8 md:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#C9A45C]/70" />
          </motion.div>

          {/* POOJA */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-brass-metallic font-normal tracking-[0.12em] md:tracking-[0.18em]"
          >
            {wedding.bride.toUpperCase()}
          </motion.h2>
        </div>

        {/* Central Nilavilakku (Parallax Layer 4) */}
        <motion.div
          style={{ y: lampY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="my-3 md:my-5"
        >
          <Nilavilakku 
            className="w-24 h-40 sm:w-28 sm:h-48 md:w-32 md:h-56" 
            isLit={true} 
            glowIntensity="high"
          />
        </motion.div>

        {/* Below Invitation Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.4 }}
          className="flex flex-col items-center gap-1.5 md:gap-2.5 mt-2"
        >
          <p className="text-[10px] sm:text-xs md:text-xs uppercase tracking-[0.25em] text-[#F5EBD5]/90 font-serif">
            {wedding.requestText}
          </p>

          <div className="flex items-center gap-2 sm:gap-4 my-1">
            <span className="w-2 h-2 rounded-full border border-[#C9A45C]" />
            <p className="text-sm sm:text-base md:text-lg font-serif text-[#FFF8E8] tracking-[0.2em] font-medium">
              {wedding.date.toUpperCase()}
            </p>
            <span className="w-2 h-2 rounded-full border border-[#C9A45C]" />
          </div>

          <p className="text-xs sm:text-sm font-sans text-[#D6B56C] tracking-widest font-normal">
            {wedding.time}
          </p>

          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-serif text-[#F5EBD5]/90 tracking-[0.15em] uppercase">
            <span className="text-[#C9A45C]">✦</span>
            <span>{wedding.venue}</span>
            <span className="text-[#C9A45C]">✦</span>
          </div>
          
          <p className="text-[11px] font-sans text-[#F5EBD5]/70 tracking-wider">
            {wedding.location}
          </p>
        </motion.div>
      </motion.div>

      {/* Bottom: Scroll to Discover */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 1.8 }}
        className="relative z-20 flex flex-col items-center mt-6 cursor-pointer group"
        onClick={scrollToNext}
      >
        <span className="text-[10px] sm:text-[11px] font-serif uppercase tracking-[0.3em] text-[#D6B56C]/80 group-hover:text-[#FFF8E8] transition-colors mb-1.5">
          SCROLL TO DISCOVER
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-[#C9A45C] group-hover:text-[#FFF8E8] transition-colors"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
