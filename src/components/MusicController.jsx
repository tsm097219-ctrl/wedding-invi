import React, { useState } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { templeSoundscape } from '../utils/templeAudio';

export const MusicController = ({ isNavbarItem = false }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      templeSoundscape.pause();
      setIsPlaying(false);
    } else {
      templeSoundscape.start();
      setIsPlaying(true);
    }
  };

  if (isNavbarItem) {
    return (
      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Pause wedding music" : "Play traditional Kerala wedding music"}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A45C]/50 bg-[#3D2B1F]/80 text-[#F5EBD5] text-xs font-serif uppercase tracking-widest hover:border-[#D6B56C] hover:bg-[#3D2B1F] transition-all shadow-sm group"
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D6B56C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F3E5AB]"></span>
            </span>
            <span className="text-[#F3E5AB] group-hover:text-white transition-colors">PAUSE</span>
            <Volume2 className="w-3.5 h-3.5 text-[#D6B56C] animate-pulse" />
          </>
        ) : (
          <>
            <Music className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span className="text-[#D6B56C] group-hover:text-[#F3E5AB] transition-colors">MUSIC</span>
          </>
        )}
      </button>
    );
  }

  // Floating Control at bottom right
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={toggleMusic}
        type="button"
        aria-label={isPlaying ? "Pause wedding music" : "Play traditional temple instrumental"}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 border ${
          isPlaying 
            ? 'bg-[#3D2B1F] border-[#D6B56C] text-[#FFF8E8] shadow-lamp' 
            : 'bg-[#FFF8E8]/90 backdrop-blur-md border-[#C9A45C]/60 text-[#4A3022] hover:bg-[#FFF8E8]'
        }`}
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-[3px] h-3.5">
              <span className="w-[3px] bg-[#D6B56C] rounded-full animate-[bounce_1s_infinite_100ms] h-full"></span>
              <span className="w-[3px] bg-[#D6B56C] rounded-full animate-[bounce_1s_infinite_300ms] h-2"></span>
              <span className="w-[3px] bg-[#D6B56C] rounded-full animate-[bounce_1s_infinite_200ms] h-3"></span>
            </div>
            <span className="text-xs uppercase tracking-widest font-serif text-[#F3E5AB] font-semibold">
              PAUSE
            </span>
            <Volume2 className="w-4 h-4 text-[#D6B56C]" />
          </>
        ) : (
          <>
            <Music className="w-4 h-4 text-[#C9A45C]" />
            <span className="text-xs uppercase tracking-widest font-serif text-[#4A3022] font-semibold">
              MUSIC
            </span>
            <VolumeX className="w-3.5 h-3.5 text-[#8C6627]" />
          </>
        )}
      </button>
    </div>
  );
};

export default MusicController;
