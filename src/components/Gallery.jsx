import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { TempleDivider } from './ornaments/TempleDivider';

const galleryItems = [
  {
    id: 1,
    title: "Guruvayoor Temple East Nada at Dawn",
    category: "Architecture",
    src: "/images/guruvayoor-temple.jpg",
    aspect: "landscape", // 16:9
    rotation: "-0.5deg",
    description: "Sacred morning ambiance with glowing rows of brass deepasthambham oil lamps at Guruvayoor."
  },
  {
    id: 2,
    title: "Sacred Nilavilakku Oil Lamp",
    category: "Rituals",
    src: "/images/nilavilakku.jpg",
    aspect: "portrait", // 3:4
    rotation: "0.8deg",
    description: "Traditional Kerala brass lamp lit with sesame oil, surrounded by freshly strung jasmine buds."
  },
  {
    id: 3,
    title: "Traditional Athapookalam Floral Mandala",
    category: "Florals",
    src: "/images/pookalam.jpg",
    aspect: "square", // 1:1
    rotation: "-0.4deg",
    description: "Concentric floral circles hand-woven with yellow marigold, crimson lotus, and sweet white jasmine."
  },
  {
    id: 4,
    title: "Sacred Kasavu & Wedding Rings",
    category: "Ceremony",
    src: "/images/our-story.jpg",
    aspect: "landscape",
    rotation: "0.6deg",
    description: "Handloom Kasavu saree with gold zari, wedding bands floating on red lotus water in an antique Uruli."
  },
  {
    id: 5,
    title: "Teak Carved Temple Threshold & Thoranam",
    category: "Woodcraft",
    src: "/images/kerala-wood.jpg",
    aspect: "portrait",
    rotation: "-0.7deg",
    description: "Hand-carved temple teak doors welcoming guests with fresh mango leaves and marigold garlands."
  },
  {
    id: 6,
    title: "Pure Kasavu Handloom Gold Zari",
    category: "Textiles",
    src: "/images/kasavu-texture.jpg",
    aspect: "landscape",
    rotation: "0.5deg",
    description: "Intricate metallic gold thread brocade woven into royal ivory cotton fabric."
  },
  {
    id: 7,
    title: "Temple Brass Bell & Jasmine Mala",
    category: "Ornaments",
    src: "/images/temple-bell.jpg",
    aspect: "portrait",
    rotation: "-0.6deg",
    description: "Hanging brass temple bell resonating with morning prayers, adorned with fragrant fresh jasmine."
  },
  {
    id: 8,
    title: "Misty Sunrise Over Kerala Backwaters",
    category: "Landscapes",
    src: "/images/kerala-landscape.jpg",
    aspect: "landscape",
    rotation: "0.4deg",
    description: "The serene waters and coconut palms of Kerala bathed in golden early morning dawn."
  },
  {
    id: 9,
    title: "Antique Brass Uruli Floral Offering",
    category: "Brasscraft",
    src: "/images/brass-uruli.jpg",
    aspect: "landscape",
    rotation: "-0.5deg",
    description: "Traditional ceremonial brass Uruli vessel adorned with floating blossoms and clay diya lamps."
  },
];

export const Gallery = () => {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [touchStart, setTouchStart] = useState(0);

  const openLightbox = (index) => {
    setSelectedIdx(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedIdx(null);
    document.body.style.overflow = 'unset';
  }, []);

  const showNext = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev + 1) % galleryItems.length);
  }, [selectedIdx]);

  const showPrev = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  }, [selectedIdx]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, closeLightbox, showNext, showPrev]);

  // Touch Swipe for Mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) showNext();
    if (diff < -50) showPrev();
  };

  return (
    <section 
      id="gallery" 
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#FFF8E8] text-[#4A3022] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] font-serif font-semibold"
          >
            VISUAL SYMPHONY OF TRADITION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3D2B1F] tracking-[0.18em] uppercase font-normal mt-2"
          >
            SACRED GALLERY
          </motion.h2>

          <p className="text-xs sm:text-sm font-serif tracking-widest text-[#6B241C] uppercase mt-1">
            GURUVAYOOR • KASAVU • FLOWERS • TEMPLE CRAFT
          </p>

          <TempleDivider className="my-6" />
        </div>

        {/* Editorial Masonry Columns (Mix of Portrait, Landscape, Square) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.15 }}
              style={{ rotate: item.rotation }}
              onClick={() => openLightbox(index)}
              className="relative group break-inside-avoid overflow-hidden rounded-sm cursor-pointer border border-[#C9A45C]/40 bg-[#FFFDF8] shadow-brass transition-all duration-300 hover:shadow-2xl hover:border-[#D6B56C]"
            >
              <div className="relative overflow-hidden bg-[#2A1D15]">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />

                {/* Soft Warm Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/85 via-[#241710]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-serif uppercase tracking-[0.25em] text-[#D6B56C] font-semibold">
                    {item.category}
                  </span>
                  <h4 className="text-base sm:text-lg font-serif text-[#FFF8E8] tracking-wide mt-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-[#F5EBD5]/80 mt-2">
                    <Maximize2 className="w-3.5 h-3.5 text-[#C9A45C]" />
                    <span className="text-[11px] font-sans">Click to view</span>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-[#C9A45C]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-[#C9A45C]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-[#C9A45C]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-[#C9A45C]/60 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#160E0A]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 md:p-8 select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between z-10 w-full max-w-5xl mx-auto">
              <div className="text-left">
                <span className="text-xs uppercase tracking-widest text-[#D6B56C] font-serif">
                  {galleryItems[selectedIdx].category} • {selectedIdx + 1} of {galleryItems.length}
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-[#FFF8E8] tracking-wide">
                  {galleryItems[selectedIdx].title}
                </h3>
              </div>

              <button
                onClick={closeLightbox}
                type="button"
                className="p-2.5 rounded-full bg-[#3D2B1F]/80 text-[#F5EBD5] hover:text-[#FFF8E8] hover:bg-[#3D2B1F] border border-[#C9A45C]/50 transition-colors"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Central Media Container with Prev / Next Navigation */}
            <div className="relative flex-1 flex items-center justify-center max-w-5xl w-full mx-auto my-4 overflow-hidden">
              {/* Prev Button */}
              <button
                onClick={showPrev}
                type="button"
                className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-[#241710]/80 text-[#F5EBD5] hover:text-white border border-[#C9A45C]/40 hover:border-[#D6B56C] transition-all hover:scale-105"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Lightbox Image with Smooth Slide Transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedIdx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[75vh] max-w-full flex items-center justify-center p-2 rounded-xs border border-[#C9A45C]/40 bg-[#251A13] shadow-2xl"
                >
                  <img
                    src={galleryItems[selectedIdx].src}
                    alt={galleryItems[selectedIdx].title}
                    className="max-h-[72vh] max-w-full object-contain rounded-xs"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Next Button */}
              <button
                onClick={showNext}
                type="button"
                className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-[#241710]/80 text-[#F5EBD5] hover:text-white border border-[#C9A45C]/40 hover:border-[#D6B56C] transition-all hover:scale-105"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center max-w-2xl mx-auto z-10 px-4">
              <p className="text-xs sm:text-sm font-cormorant italic text-[#D6B56C] tracking-wide">
                {galleryItems[selectedIdx].description}
              </p>
              <p className="text-[10px] text-[#F5EBD5]/50 font-sans tracking-widest mt-1">
                Keyboard: ← Previous | → Next | ESC Close
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
