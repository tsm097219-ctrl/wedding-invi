import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { wedding } from '../data/wedding';
import { TempleFrame } from './ornaments/TempleFrame';
import { TempleDivider } from './ornaments/TempleDivider';

export const VenueSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Scale from 1.08 down to 1.0 on scroll as requested
  const imageScale = useTransform(scrollYProgress, [0, 0.7], [1.08, 1.0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section 
      id="venue" 
      ref={containerRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#2A1D15] text-[#FFF8E8] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#D6B56C] font-serif font-semibold"
          >
            THE SACRED ABODE
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#F5EBD5] tracking-[0.2em] uppercase font-normal mt-2"
          >
            GURUVAYOOR AMBALAM
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl font-cormorant italic text-[#D6B56C] mt-3"
          >
            A sacred beginning to a beautiful journey.
          </motion.p>

          <TempleDivider variant="goldOnDark" className="my-6" />
        </div>

        {/* Large Cinematic Venue Framing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          <TempleFrame title="Guruvayoor Sree Krishna Temple • East Nada Kalyana Mandapam">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-[#1A120D]">
              <motion.img 
                src="/images/guruvayoor-temple.jpg" 
                alt="Guruvayoor temple courtyard at dawn with glowing brass lamps and zero people"
                style={{ scale: imageScale, y: imageY }}
                className="w-full h-full object-cover object-center will-change-transform"
                loading="lazy"
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A120D]/90 via-[#1A120D]/20 to-transparent pointer-events-none" />

              {/* Overlay Temple Sacred Information */}
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 pointer-events-none">
                <div>
                  <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em] text-[#D6B56C]">
                    THRISSUR DISTRICT, KERALA
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#FFF8E8] tracking-wider mt-1 drop-shadow-md">
                    Guruvayoor Ambalam
                  </h3>
                  <p className="text-xs sm:text-sm font-cormorant text-[#F5EBD5]/80 italic mt-0.5">
                    Known as Bhuloka Vaikunta • Sacred Wedding Mandapam
                  </p>
                </div>

                <div className="pointer-events-auto">
                  <a
                    href={wedding.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xs bg-[#FFF8E8]/10 hover:bg-[#FFF8E8]/20 border border-[#D6B56C]/50 text-xs font-serif uppercase tracking-widest text-[#F5EBD5] backdrop-blur-xs transition-colors"
                  >
                    Directions &amp; Map ↗
                  </a>
                </div>
              </div>
            </div>
          </TempleFrame>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
