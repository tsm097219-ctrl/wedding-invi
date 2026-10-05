import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { Nilavilakku } from './ornaments/Nilavilakku';
import { PookalamPattern } from './ornaments/PookalamPattern';
import { TempleDivider } from './ornaments/TempleDivider';
import { FloralMotif } from './ornaments/FloralMotif';

export const ClosingSection = () => {
  return (
    <section className="relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 bg-[#FFF8E8] text-[#4A3022] overflow-hidden select-none">
      {/* Background Sacred Pookalam Subtle Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-15">
        <PookalamPattern className="w-[450px] h-[450px] md:w-[650px] md:h-[650px]" />
      </div>

      {/* Decorative Jasmine Garland at Top */}
      <div className="flex justify-center items-center gap-3 mb-8 opacity-80">
        <FloralMotif type="jasmine" className="w-5 h-5 text-[#C9A45C]" />
        <span className="w-8 h-[1px] bg-[#C9A45C]" />
        <FloralMotif type="marigold" className="w-4 h-4 text-[#FFA500]" />
        <span className="w-8 h-[1px] bg-[#C9A45C]" />
        <FloralMotif type="jasmine" className="w-5 h-5 text-[#C9A45C]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
        {/* WITH LOVE AND BLESSINGS */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs sm:text-sm font-serif text-[#6B241C] tracking-[0.35em] uppercase font-semibold"
        >
          WITH LOVE AND BLESSINGS
        </motion.p>

        {/* VYSHNAV & POOJA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="my-4 sm:my-6"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#3D2B1F] tracking-[0.15em] font-normal">
            {wedding.groom.toUpperCase()}
          </h2>
          <span className="block my-1 text-2xl sm:text-3xl font-serif text-[#C9A45C] italic">
            &
          </span>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#3D2B1F] tracking-[0.15em] font-normal">
            {wedding.bride.toUpperCase()}
          </h3>
        </motion.div>

        {/* Traditional Ornamental Line */}
        <TempleDivider className="my-6 max-w-md" />

        {/* Date & Venue */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="space-y-1.5"
        >
          <p className="text-base sm:text-lg font-serif text-[#4A3022] tracking-[0.3em] font-medium">
            13 · 12 · 2026
          </p>
          <p className="text-xs sm:text-sm font-serif text-[#C9A45C] tracking-[0.25em] uppercase font-semibold">
            {wedding.venue.toUpperCase()}
          </p>
          <p className="text-xs font-malayalam text-[#4A3022]/70 mt-2">
            സർവ്വ ഐശ്വര്യങ്ങളും നേർന്നു കൊണ്ട്
          </p>
        </motion.div>

        {/* Small Brass Lamp (Flame gently glows) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.6 }}
          className="mt-8"
        >
          <Nilavilakku 
            className="w-20 h-36 sm:w-24 sm:h-44" 
            isLit={true} 
            glowIntensity="high"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ClosingSection;
