import React from 'react';

export const PookalamPattern = ({ className = "w-64 h-64 opacity-25" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 200 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer concentric rings */}
      <circle cx="100" cy="100" r="95" stroke="#C9A45C" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="90" stroke="#D6B56C" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="82" stroke="#6B241C" strokeWidth="1" opacity="0.4" />
      
      {/* Outer 16-petal Ring */}
      <g stroke="#C9A45C" strokeWidth="1.2" opacity="0.75">
        {[...Array(16)].map((_, i) => (
          <ellipse 
            key={i} 
            cx="100" 
            cy="28" 
            rx="8" 
            ry="20" 
            transform={`rotate(${i * 22.5} 100 100)`} 
            fill="#FFF8E8"
            fillOpacity="0.4"
          />
        ))}
      </g>

      {/* Middle 12-petal Ring */}
      <circle cx="100" cy="100" r="58" stroke="#C9A45C" strokeWidth="1.5" />
      <g stroke="#D6B56C" strokeWidth="1.5" opacity="0.85">
        {[...Array(12)].map((_, i) => (
          <path 
            key={i} 
            d="M100 50 Q108 72 100 90 Q92 72 100 50 Z" 
            transform={`rotate(${i * 30} 100 100)`}
            fill="#F5E0A3"
            fillOpacity="0.5" 
          />
        ))}
      </g>

      {/* Inner 8-star Ring */}
      <circle cx="100" cy="100" r="32" stroke="#6B241C" strokeWidth="1" opacity="0.6" />
      <g stroke="#C9A45C" strokeWidth="1">
        {[...Array(8)].map((_, i) => (
          <circle 
            key={i} 
            cx="100" 
            cy="76" 
            r="4.5" 
            transform={`rotate(${i * 45} 100 100)`} 
            fill="#D6B56C" 
          />
        ))}
      </g>

      {/* Center Brass Core */}
      <circle cx="100" cy="100" r="16" fill="#C9A45C" opacity="0.9" />
      <circle cx="100" cy="100" r="10" fill="#FFF8E8" opacity="0.9" />
      <circle cx="100" cy="100" r="4" fill="#6B241C" />
    </svg>
  );
};

export default PookalamPattern;
