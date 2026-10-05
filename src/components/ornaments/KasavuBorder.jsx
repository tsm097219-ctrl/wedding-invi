import React from 'react';

export const KasavuBorder = ({ className = "" }) => {
  return (
    <div className={`w-full flex flex-col items-center select-none ${className}`} aria-hidden="true">
      {/* Top Gold Wire */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#D6B56C]/80 to-transparent" />
      
      {/* Kasavu Zari Pattern Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent relative overflow-hidden opacity-90 my-[2px]">
        <svg className="w-full h-full" preserveAspectRatio="repeat-x" viewBox="0 0 100 10">
          <pattern id="kasavu-weave" width="16" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5 L8 0 L16 5 L8 10 Z" fill="#F3E5AB" opacity="0.6" />
            <circle cx="8" cy="5" r="1.5" fill="#8C6627" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#kasavu-weave)" />
        </svg>
      </div>

      {/* Bottom Gold Wire */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#B38B3F]/70 to-transparent" />
    </div>
  );
};

export default KasavuBorder;
