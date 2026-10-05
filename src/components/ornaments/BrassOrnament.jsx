import React from 'react';

export const BrassOrnament = ({ className = "w-8 h-8 text-[#C9A45C]" }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <path d="M50 15 C52 28, 62 38, 75 40 C62 42, 52 52, 50 65 C48 52, 38 42, 25 40 C38 38, 48 28, 50 15 Z" fill="currentColor" opacity="0.9" />
      <circle cx="50" cy="18" r="3" fill="#D6B56C" />
      <circle cx="50" cy="82" r="3" fill="#D6B56C" />
      <circle cx="18" cy="50" r="3" fill="#D6B56C" />
      <circle cx="82" cy="50" r="3" fill="#D6B56C" />
      <path d="M50 35 C58 35, 65 42, 65 50 C65 58, 58 65, 50 65 C42 65, 35 58, 35 50 C35 42, 42 35, 50 35 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" />
    </svg>
  );
};

export default BrassOrnament;
