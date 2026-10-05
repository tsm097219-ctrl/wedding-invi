import React from 'react';

export const FloralMotif = ({ type = "jasmine", className = "w-6 h-6 text-[#FFF8E8]" }) => {
  if (type === "marigold") {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="currentColor">
        <circle cx="50" cy="50" r="16" fill="#FFA500" />
        <g fill="#FF8C00" opacity="0.9">
          <circle cx="50" cy="22" r="14" />
          <circle cx="50" cy="78" r="14" />
          <circle cx="22" cy="50" r="14" />
          <circle cx="78" cy="50" r="14" />
          <circle cx="30" cy="30" r="14" />
          <circle cx="70" cy="30" r="14" />
          <circle cx="30" cy="70" r="14" />
          <circle cx="70" cy="70" r="14" />
        </g>
        <circle cx="50" cy="50" r="12" fill="#E65100" />
      </svg>
    );
  }

  // Default: Jasmine (Mulla / Pichi flower)
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <circle cx="50" cy="50" r="6" fill="#F5E0A3" />
      <g fill="#FFFDF8" stroke="#E6C875" strokeWidth="1">
        {/* 5 gentle white petals */}
        <ellipse cx="50" cy="25" rx="10" ry="18" />
        <ellipse cx="50" cy="25" rx="10" ry="18" transform="rotate(72 50 50)" />
        <ellipse cx="50" cy="25" rx="10" ry="18" transform="rotate(144 50 50)" />
        <ellipse cx="50" cy="25" rx="10" ry="18" transform="rotate(216 50 50)" />
        <ellipse cx="50" cy="25" rx="10" ry="18" transform="rotate(288 50 50)" />
      </g>
      <circle cx="50" cy="50" r="4" fill="#E8B838" />
    </svg>
  );
};

export default FloralMotif;
