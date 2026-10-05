import React from 'react';

export const KeralaBorder = ({ children, className = "", innerClassName = "" }) => {
  return (
    <div className={`relative p-3 md:p-6 border border-[#C9A45C]/40 bg-[#FFFDF8]/70 backdrop-blur-xs rounded-sm shadow-brass ${className}`}>
      {/* Corner Ornaments */}
      {/* Top Left */}
      <div className="absolute -top-2 -left-2 w-6 h-6 text-[#C9A45C] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 14 V4 C2 2.9 2.9 2 4 2 H14" />
          <circle cx="5" cy="5" r="2" fill="#D6B56C" />
          <path d="M8 8 L3 13 M8 8 L13 3" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Top Right */}
      <div className="absolute -top-2 -right-2 w-6 h-6 text-[#C9A45C] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 2 H20 C21.1 2 22 2.9 22 4 V14" />
          <circle cx="19" cy="5" r="2" fill="#D6B56C" />
          <path d="M16 8 L21 13 M16 8 L11 3" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Bottom Left */}
      <div className="absolute -bottom-2 -left-2 w-6 h-6 text-[#C9A45C] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 10 V20 C2 21.1 2.9 22 4 22 H14" />
          <circle cx="5" cy="19" r="2" fill="#D6B56C" />
          <path d="M8 16 L3 11 M8 16 L13 21" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Bottom Right */}
      <div className="absolute -bottom-2 -right-2 w-6 h-6 text-[#C9A45C] pointer-events-none">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 22 H20 C21.1 22 22 21.1 22 20 V10" />
          <circle cx="19" cy="19" r="2" fill="#D6B56C" />
          <path d="M16 16 L21 11 M16 16 L11 21" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Inner Content */}
      <div className={`relative ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
};

export default KeralaBorder;
