import React from 'react';
import { motion } from 'framer-motion';

export const TempleDivider = ({ 
  className = "my-12 md:my-16", 
  variant = "brass",
  iconVariant = "lotus" 
}) => {
  const isDark = variant === "goldOnDark";

  return (
    <div className={`w-full flex items-center justify-center max-w-xl mx-auto px-4 ${className}`} aria-hidden="true">
      {/* Left Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={`flex-1 h-[1px] origin-right ${
          isDark 
            ? 'bg-gradient-to-r from-transparent via-[#D6B56C]/50 to-[#C9A45C]' 
            : 'bg-gradient-to-r from-transparent via-[#C9A45C]/60 to-[#8C6627]'
        }`} 
      />

      {/* Central Ornamental Motif */}
      <motion.div 
        initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
        whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mx-3 md:mx-5 flex items-center gap-1.5 text-[#C9A45C]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
        
        {iconVariant === "lotus" ? (
          <svg className="w-7 h-7 md:w-8 md:h-8" viewBox="0 0 100 100" fill="currentColor">
            {/* Traditional Lotus Motif */}
            <path d="M50 20 C52 35, 60 50, 75 58 C62 60, 52 70, 50 82 C48 70, 38 60, 25 58 C40 50, 48 35, 50 20 Z" />
            <path d="M50 35 C56 46, 68 53, 85 53 C73 63, 62 68, 50 80 C38 68, 27 63, 15 53 C32 53, 44 46, 50 35 Z" opacity="0.6" />
            <circle cx="50" cy="55" r="4" fill="#FFF8E8" />
          </svg>
        ) : (
          <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2 L14 8 L20 10 L15 14 L16 20 L12 17 L8 20 L9 14 L4 10 L10 8 Z" />
          </svg>
        )}

        <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
      </motion.div>

      {/* Right Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={`flex-1 h-[1px] origin-left ${
          isDark 
            ? 'bg-gradient-to-l from-transparent via-[#D6B56C]/50 to-[#C9A45C]' 
            : 'bg-gradient-to-l from-transparent via-[#C9A45C]/60 to-[#8C6627]'
        }`} 
      />
    </div>
  );
};

export default TempleDivider;
