import React from 'react';
import { motion } from 'framer-motion';
import { TempleDivider } from './ornaments/TempleDivider';
import { KasavuBorder } from './ornaments/KasavuBorder';

export const PookalamSection = () => {
  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8E8] text-[#4A3022] overflow-hidden">
      <KasavuBorder className="absolute top-0 left-0 right-0" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] font-serif font-semibold"
        >
          FLORAL MANDALA OF BLESSINGS
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#3D2B1F] tracking-[0.18em] uppercase mt-2 font-normal"
        >
          THE SACRED ATHAPOOKALAM
        </motion.h3>

        <p className="text-xs sm:text-sm font-serif tracking-widest text-[#6B241C] uppercase mt-1">
          JASMINE • MARIGOLD • LOTUS • THUMBA
        </p>

        <TempleDivider className="my-6" />

        {/* Circular Floral Composition: Flowers slowly revealing themselves */}
        <div className="relative my-6 max-w-md sm:max-w-lg w-full flex items-center justify-center">
          {/* Subtle Outer Glow */}
          <div className="absolute inset-0 rounded-full bg-[#FFA500]/10 filter blur-2xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-full p-2 border-2 border-[#C9A45C]/50 shadow-2xl bg-[#FFFDF8]"
          >
            <div className="relative aspect-square w-72 sm:w-84 md:w-96 rounded-full overflow-hidden">
              <img 
                src="/images/pookalam.jpg" 
                alt="Kerala traditional Athapookalam floral carpet with marigolds and central brass lamp, zero people" 
                className="w-full h-full object-cover rounded-full transition-transform duration-1000 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 rounded-full border border-[#D6B56C]/40 pointer-events-none" />
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg font-cormorant italic text-[#4A3022] max-w-xl mx-auto mt-4"
        >
          Each petal laid with love, purity, and prayer, weaving eternal bonds under the sacred skies of Guruvayoor.
        </motion.p>
      </div>

      <KasavuBorder className="absolute bottom-0 left-0 right-0" />
    </section>
  );
};

export default PookalamSection;
