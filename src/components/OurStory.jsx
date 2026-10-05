import React from 'react';
import { motion } from 'framer-motion';
import { wedding } from '../data/wedding';
import { WeddingPhotoPlaceholder } from './WeddingPhotoPlaceholder';
import { TempleDivider } from './ornaments/TempleDivider';
import { KasavuBorder } from './ornaments/KasavuBorder';

export const OurStory = () => {
  return (
    <section 
      id="our-story" 
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFF8E8] text-[#4A3022] overflow-hidden"
    >
      <KasavuBorder className="absolute top-0 left-0 right-0" />

      {/* Subtle Botanical Watermark Background */}
      <div className="absolute right-0 top-1/4 w-96 h-96 pointer-events-none opacity-5">
        <svg viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 0 C120 50, 180 80, 200 100 C150 120, 120 180, 100 200 C80 150, 20 120, 0 100 C50 80, 80 20, 100 0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] font-serif font-semibold"
          >
            OUR STORY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3D2B1F] tracking-[0.15em] font-normal mt-2"
          >
            TWO HEARTS.<br />
            <span className="text-[#6B241C] italic font-serif">ONE JOURNEY.</span>
          </motion.h2>

          <TempleDivider className="my-6" />
        </div>

        {/* Content Layout: Visual Still-life Composition + Story Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Traditional Kerala Carved-Wood Framed Composition (ZERO PEOPLE) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <WeddingPhotoPlaceholder 
              src="/images/our-story.jpg"
              alt="Sacred Kerala wedding composition with Kasavu silk, golden rings in brass Uruli, jasmine garland and lamp"
              caption="The Sacred Union • Kasavu & Golden Rings"
            />
            <p className="text-[10px] text-[#4A3022]/60 text-center mt-2.5 font-sans italic tracking-wider">
              * Photography placeholder gracefully customizable with client couple portraits.
            </p>
          </motion.div>

          {/* Right Column: Story Text and Blessings */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 flex flex-col justify-center space-y-6 md:space-y-8 px-2 md:px-6"
          >
            <div className="relative pl-6 border-l-2 border-[#C9A45C]/50 space-y-5">
              {wedding.story.paragraphs.map((p, idx) => (
                <p 
                  key={idx} 
                  className="text-base sm:text-lg md:text-xl font-cormorant leading-relaxed text-[#4A3022] font-normal"
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Groom & Bride Family Ancestry & Mansions */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#C9A45C]/30">
              <div className="p-4 rounded-sm bg-[#F5EBD5]/70 border border-[#C9A45C]/30">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-serif font-bold">
                  GROOM'S FAMILY
                </p>
                <h3 className="font-serif text-base text-[#3D2B1F] font-semibold mt-1">
                  {wedding.groom}
                </h3>
                <p className="text-xs text-[#4A3022]/80 font-sans mt-0.5">
                  {wedding.groomFamily}
                </p>
                <p className="text-[11px] text-[#6B241C] font-serif font-medium mt-1">
                  {wedding.groomHouse}
                </p>
              </div>

              <div className="p-4 rounded-sm bg-[#F5EBD5]/70 border border-[#C9A45C]/30">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C9A45C] font-serif font-bold">
                  BRIDE'S FAMILY
                </p>
                <h3 className="font-serif text-base text-[#3D2B1F] font-semibold mt-1">
                  {wedding.bride}
                </h3>
                <p className="text-xs text-[#4A3022]/80 font-sans mt-0.5">
                  {wedding.brideFamily}
                </p>
                <p className="text-[11px] text-[#6B241C] font-serif font-medium mt-1">
                  {wedding.brideHouse}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
