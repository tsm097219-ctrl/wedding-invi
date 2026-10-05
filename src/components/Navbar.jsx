import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { wedding } from '../data/wedding';
import { MusicController } from './MusicController';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#hero' },
    { name: 'OUR STORY', href: '#our-story' },
    { name: 'WEDDING', href: '#wedding-details' },
    { name: 'VENUE', href: '#venue' },
    { name: 'GALLERY', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 select-none ${
          scrolled
            ? 'bg-[#F5EBD5]/95 text-[#4A3022] shadow-sm border-b border-[#C9A45C]/40 backdrop-blur-xs py-3'
            : 'bg-gradient-to-b from-[#241710]/80 via-[#241710]/40 to-transparent text-[#F5EBD5] py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Kerala Ornamental Logo & Couple Names */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-full border border-[#C9A45C] flex items-center justify-center p-1 bg-[#3D2B1F]/30 group-hover:border-[#D6B56C] transition-colors">
              <img src="/lamp-icon.svg" alt="Kerala Lamp Icon" className="w-5 h-5 object-contain" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif tracking-widest text-sm md:text-base font-semibold ${scrolled ? 'text-[#4A3022]' : 'text-[#F5EBD5]'}`}>
                {wedding.groom} & {wedding.bride}
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#C9A45C] font-serif">
                13 · 12 · 2026
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.22em] font-serif font-medium transition-colors duration-200 relative py-1 hover:text-[#C9A45C] ${
                  scrolled ? 'text-[#4A3022]' : 'text-[#F5EBD5]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Music Control & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <MusicController isNavbarItem={true} />
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className={`p-2 rounded-md md:hidden transition-colors ${
                scrolled ? 'text-[#4A3022] hover:bg-[#C9A45C]/20' : 'text-[#F5EBD5] hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Kasavu Gold Line on bottom when scrolled */}
        {scrolled && (
          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent mt-2" />
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden bg-[#241710]/95 backdrop-blur-md pt-24 px-6 flex flex-col items-center justify-between pb-10 transition-all duration-300">
          <div className="w-full flex flex-col items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-[#C9A45C] p-2 flex items-center justify-center bg-[#3D2B1F]/60 mb-2">
              <img src="/lamp-icon.svg" alt="Kerala Lamp" className="w-8 h-8 object-contain" />
            </div>

            <div className="w-24 h-[1px] bg-[#C9A45C]/50 mb-2" />

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-serif uppercase tracking-[0.25em] text-[#F5EBD5] hover:text-[#D6B56C] transition-colors py-1.5"
              >
                {link.name}
              </a>
            ))}

            <div className="w-24 h-[1px] bg-[#C9A45C]/50 mt-2" />
            
            <div className="mt-4">
              <MusicController isNavbarItem={true} />
            </div>
          </div>

          <div className="text-center">
            <p className="text-xs font-serif tracking-widest text-[#D6B56C]">
              {wedding.venue}
            </p>
            <p className="text-[10px] text-[#F5EBD5]/60 font-sans tracking-wider mt-1">
              {wedding.location}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
