import React from 'react';
import { motion } from 'framer-motion';

export const Nilavilakku = ({ 
  className = "w-32 h-64", 
  isLit = true, 
  glowIntensity = "normal", 
  showBaseFlowers = true 
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-end select-none ${className}`}>
      {/* Radiant Background Warm Glow */}
      {isLit && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: glowIntensity === "high" ? [0.7, 0.9, 0.75, 0.85] : [0.4, 0.6, 0.45, 0.55],
            scale: [1, 1.05, 0.98, 1.02]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 w-48 h-48 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,180,60,0.6) 0%, rgba(201,164,92,0.25) 45%, transparent 75%)'
          }}
        />
      )}

      {/* SVG Nilavilakku Structure */}
      <svg 
        viewBox="0 0 120 240" 
        className="w-full h-full filter drop-shadow-md"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="brassMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E8B6" />
            <stop offset="25%" stopColor="#D8B56A" />
            <stop offset="60%" stopColor="#9C7328" />
            <stop offset="85%" stopColor="#C9A45C" />
            <stop offset="100%" stopColor="#5E4314" />
          </linearGradient>

          <radialGradient id="flameCore" cx="50%" cy="65%" r="60%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="25%" stopColor="#FFF275" />
            <stop offset="60%" stopColor="#FF9900" />
            <stop offset="95%" stopColor="#D84315" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#BF360C" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Animated Flame */}
        {isLit && (
          <g className="animate-flame-flicker origin-bottom" style={{ transformOrigin: '60px 42px' }}>
            {/* Outer flame aura */}
            <ellipse cx="60" cy="30" rx="12" ry="18" fill="url(#flameCore)" opacity="0.4" filter="blur(2px)" />
            {/* Main Flame teardrop */}
            <path 
              d="M60 12 C55 24, 50 32, 54 40 C56 43, 64 43, 66 40 C70 32, 65 24, 60 12 Z" 
              fill="url(#flameCore)" 
            />
            {/* Bright inner wick fire */}
            <path 
              d="M60 22 C58 28, 56 34, 58 39 C59 41, 61 41, 62 39 C64 34, 62 28, 60 22 Z" 
              fill="#FFFBEA" 
            />
            {/* Carbon wick tip */}
            <line x1="60" y1="38" x2="60" y2="42" stroke="#3D2B1F" strokeWidth="2" strokeLinecap="round" />
          </g>
        )}

        {/* Top Bird Finial / Makudam (Traditional Swan / Mayil Motif) */}
        <path d="M57 42 C57 39, 63 39, 63 42 L62 47 L58 47 Z" fill="url(#brassMetallic)" />
        <circle cx="60" cy="48" r="4.5" fill="url(#brassMetallic)" />
        <path d="M53 52 C53 49, 67 49, 67 52 L65 57 L55 57 Z" fill="url(#brassMetallic)" />

        {/* Top Oil Reservoir Bowl (Thattu) */}
        <ellipse cx="60" cy="62" rx="34" ry="7" fill="url(#brassMetallic)" stroke="#6B4B18" strokeWidth="1" />
        <path d="M26 62 Q60 76 94 62 Q60 84 26 62 Z" fill="url(#brassMetallic)" />
        <ellipse cx="60" cy="65" rx="30" ry="4" fill="#6B4B18" opacity="0.4" />

        {/* Upper Column Tier (Thandu) */}
        <path d="M56 75 L55 105 Q52 108 50 112 L70 112 Q68 108 65 105 L64 75 Z" fill="url(#brassMetallic)" />
        <ellipse cx="60" cy="85" rx="8" ry="2.5" fill="#FFE57F" opacity="0.9" />
        <ellipse cx="60" cy="98" rx="9" ry="2.8" fill="#FFE57F" opacity="0.9" />

        {/* Middle Ornamental Sphere */}
        <circle cx="60" cy="120" r="11" fill="url(#brassMetallic)" />
        <ellipse cx="60" cy="120" rx="13" ry="3" fill="#D8B56A" stroke="#5E4314" strokeWidth="0.8" />

        {/* Lower Pillar / Stem */}
        <path d="M54 130 L52 172 Q48 176 44 180 L76 180 Q72 176 68 172 L66 130 Z" fill="url(#brassMetallic)" />
        <ellipse cx="60" cy="144" rx="9" ry="3" fill="#FFE57F" opacity="0.8" />
        <ellipse cx="60" cy="162" rx="10" ry="3.2" fill="#FFE57F" opacity="0.8" />

        {/* Heavy Flared Base (Peedam) */}
        <path d="M44 180 L32 205 C29 212, 91 212, 88 205 L76 180 Z" fill="url(#brassMetallic)" />
        <ellipse cx="60" cy="206" rx="42" ry="9" fill="url(#brassMetallic)" stroke="#5E4314" strokeWidth="1.2" />
        <ellipse cx="60" cy="214" rx="46" ry="7" fill="#4A3022" />
        <ellipse cx="60" cy="213" rx="45" ry="6.5" fill="url(#brassMetallic)" />
      </svg>

      {/* Base Flower Petals Ring */}
      {showBaseFlowers && (
        <div className="absolute -bottom-2.5 w-32 md:w-36 flex items-center justify-center pointer-events-none opacity-90">
          <svg viewBox="0 0 140 25" className="w-full">
            {/* White jasmine & orange marigold garland around base */}
            {[...Array(9)].map((_, i) => (
              <g key={i} transform={`translate(${16 + i * 13}, 12)`}>
                <circle cx="0" cy="0" r="4.5" fill="#FFA500" />
                <circle cx="0" cy="0" r="2.5" fill="#E65100" />
                <circle cx="0" cy="-4" r="2" fill="#FFFDF8" />
                <circle cx="0" cy="4" r="2" fill="#FFFDF8" />
              </g>
            ))}
          </svg>
        </div>
      )}
    </div>
  );
};

export default Nilavilakku;
