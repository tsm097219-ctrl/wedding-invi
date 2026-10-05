import React from 'react';
import { TempleFrame } from './ornaments/TempleFrame';

export const WeddingPhotoPlaceholder = ({ 
  src = "/images/our-story.jpg", 
  alt = "Traditional Kerala sacred wedding arrangement with Kasavu silk, jasmine garland, brass lamp and gold rings", 
  className = "",
  caption = "Auspicious Wedding Symbols • ശുഭ മുഹൂർത്തം"
}) => {
  return (
    <TempleFrame className={`max-w-lg mx-auto ${className}`}>
      <div className="relative group overflow-hidden rounded-sm aspect-[4/3] bg-[#2A1D15]">
        {/* Sacred Traditional Image (ZERO People / ZERO Faces) */}
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Soft Golden Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D15]/80 via-transparent to-black/20 pointer-events-none" />

        {/* Subtle Ornamental Frame Inset */}
        <div className="absolute inset-3 border border-[#D6B56C]/40 pointer-events-none rounded-[2px]" />

        {/* Caption at bottom */}
        {caption && (
          <div className="absolute bottom-3 left-0 right-0 text-center px-4 pointer-events-none">
            <p className="text-xs md:text-sm text-[#F5EBD5] font-serif tracking-widest drop-shadow-md">
              {caption}
            </p>
          </div>
        )}
      </div>
    </TempleFrame>
  );
};

export default WeddingPhotoPlaceholder;
