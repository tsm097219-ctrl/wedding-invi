import React from 'react';

export const TempleFrame = ({ children, className = "", title = "" }) => {
  return (
    <div className={`relative rounded-md overflow-hidden bg-[#3D2B1F] p-3 md:p-5 shadow-2xl border-2 border-[#C9A45C]/40 ${className}`}>
      {/* Outer Carved Wood Bevel Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#523B2A] via-[#3D2B1F] to-[#251A13] opacity-90 pointer-events-none" />

      {/* Decorative Brass Studs in 4 Corners */}
      <div className="absolute top-2 left-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE8A3] to-[#8C6627] shadow-sm z-20 border border-[#FFF8E8]/40" />
      <div className="absolute top-2 right-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE8A3] to-[#8C6627] shadow-sm z-20 border border-[#FFF8E8]/40" />
      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE8A3] to-[#8C6627] shadow-sm z-20 border border-[#FFF8E8]/40" />
      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[#FFE8A3] to-[#8C6627] shadow-sm z-20 border border-[#FFF8E8]/40" />

      {/* Inner Decorative Arch / Kasavu Frame */}
      <div className="relative z-10 border border-[#C9A45C]/50 rounded-sm overflow-hidden p-1.5 bg-[#FFF8E8]/5 backdrop-blur-[2px]">
        {title && (
          <div className="text-center py-2 border-b border-[#C9A45C]/30 mb-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D6B56C] font-serif font-semibold">
              {title}
            </span>
          </div>
        )}
        <div className="relative overflow-hidden rounded-[2px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default TempleFrame;
