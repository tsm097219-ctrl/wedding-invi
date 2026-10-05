import React from 'react';
import { motion } from 'framer-motion';
import { TempleDivider } from './ornaments/TempleDivider';

export const MuralSection = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#3D2B1F] text-[#FFF8E8] overflow-hidden">
      {/* Mural Texture & Motif Background Container */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.3em] text-[#D6B56C] font-serif font-semibold"
          >
            TRADITIONAL CRAFTSMANSHIP
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-serif text-[#F5EBD5] tracking-[0.18em] uppercase mt-1 font-normal"
          >
            KERALA MURAL HERITAGE
          </motion.h3>

          <TempleDivider variant="goldOnDark" className="my-5" />
        </div>

        {/* Decorative Mural Art Card (Zero Faces - Lotus & Peacocks only) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative rounded-sm overflow-hidden border border-[#C9A45C]/40 shadow-2xl bg-[#251A13]"
        >
          <div className="relative aspect-[21/9] sm:aspect-[16/7] md:aspect-[16/6] w-full overflow-hidden">
            <img 
              src="/images/kerala-mural.jpg" 
              alt="Traditional Kerala Panchavarna mural art depicting golden lotus and peacock motifs with zero human faces" 
              className="w-full h-full object-cover object-center filter saturate-90 contrast-105"
              loading="lazy"
            />
            {/* Soft Warm Gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#251A13]/90 via-transparent to-[#251A13]/90 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#251A13] via-transparent to-transparent pointer-events-none" />

            {/* Inset Border Motif */}
            <div className="absolute inset-3 sm:inset-5 border border-[#D6B56C]/30 pointer-events-none rounded-[1px]" />
          </div>

          <div className="p-6 sm:p-8 bg-[#2A1D15] text-center border-t border-[#C9A45C]/30">
            <p className="text-sm sm:text-base md:text-lg font-cormorant italic text-[#F5EBD5] max-w-2xl mx-auto">
              "Like the sacred lotus unfurling in temple waters and the rhythm of sacred temple bells, may this union flourish with grace, devotion, and harmony."
            </p>
            <span className="block mt-2 text-[10px] font-serif uppercase tracking-[0.25em] text-[#C9A45C]">
              Panchavarna Lotus &amp; Mayil Motifs • പുണ്യ മംഗള ചിഹ്നങ്ങൾ
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MuralSection;
