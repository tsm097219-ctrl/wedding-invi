import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { IntroExperience } from './components/IntroExperience';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { OurStory } from './components/OurStory';
import { WeddingDetails } from './components/WeddingDetails';
import { VenueSection } from './components/VenueSection';
import { MuralSection } from './components/MuralSection';
import { PookalamSection } from './components/PookalamSection';
import { Gallery } from './components/Gallery';
import { RSVP } from './components/RSVP';
import { ClosingSection } from './components/ClosingSection';
import { Footer } from './components/Footer';
import { MusicController } from './components/MusicController';

export function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#FFF8E8] text-[#4A3022] font-sans selection:bg-[#C9A45C]/30 selection:text-[#3D2B1F] overflow-x-hidden">
      {/* 1. Cinematic Opening Intro with Nilavilakku flame ignition */}
      <AnimatePresence>
        {showIntro && (
          <IntroExperience onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* 2. Top Navigation Bar */}
      <Navbar />

      {/* 3. Full-screen Cinematic Hero */}
      <main>
        <Hero />

        {/* 4. The Auspicious Day Live Countdown */}
        <Countdown />

        {/* 5. Our Story Section (Sacred Decorative Still-Life - ZERO people) */}
        <OurStory />

        {/* 6. Wedding Details & Timings */}
        <WeddingDetails />

        {/* 7. Guruvayoor Ambalam Cinematic Venue with Parallax Scale */}
        <VenueSection />

        {/* 8. Kerala Mural Art Heritage Accent */}
        <MuralSection />

        {/* 9. Sacred Athapookalam Floral Composition */}
        <PookalamSection />

        {/* 10. Sacred Gallery with Masonry & Lightbox */}
        <Gallery />

        {/* 11. Traditional RSVP Section */}
        <RSVP />

        {/* 12. Emotional Closing Blessings */}
        <ClosingSection />
      </main>

      {/* 13. Minimal Traditional Footer */}
      <Footer />

      {/* 14. Floating Kerala Temple Music Controller */}
      <MusicController />
    </div>
  );
}

export default App;
