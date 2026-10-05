import React from 'react';
import { wedding } from '../data/wedding';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#241710] text-[#F5EBD5] py-12 px-4 border-t border-[#C9A45C]/30 select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-3">
        <div className="w-8 h-8 rounded-full border border-[#C9A45C]/60 p-1.5 flex items-center justify-center bg-[#3D2B1F]/60">
          <img src="/lamp-icon.svg" alt="Kerala Lamp" className="w-5 h-5 object-contain" />
        </div>

        <h4 className="text-base sm:text-lg font-serif tracking-[0.25em] text-[#FFF8E8] font-medium">
          {wedding.groom.toUpperCase()} &amp; {wedding.bride.toUpperCase()}
        </h4>

        <div className="w-16 h-[1px] bg-[#C9A45C]/40" />

        <p className="text-xs sm:text-sm font-serif tracking-[0.3em] text-[#D6B56C]">
          13 · 12 · 2026
        </p>

        <p className="text-xs font-serif uppercase tracking-[0.2em] text-[#F5EBD5]/80">
          {wedding.venue.toUpperCase()}
        </p>

        <p className="text-[11px] font-serif uppercase tracking-[0.3em] text-[#D6B56C]/80 pt-2">
          WITH LOVE AND BLESSINGS
        </p>

        <p className="text-[10px] text-[#F5EBD5]/40 font-sans tracking-widest pt-4">
          © 2026 Vyshnav &amp; Pooja • Traditional Kerala Hindu Wedding Invitation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
