import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wedding } from '../data/wedding';
import { PookalamPattern } from './ornaments/PookalamPattern';
import { TempleDivider } from './ornaments/TempleDivider';

export const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(wedding.rawDate).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'DAYS', value: timeLeft.days, malayalam: 'ദിവസങ്ങൾ' },
    { label: 'HOURS', value: timeLeft.hours, malayalam: 'മണിക്കൂറുകൾ' },
    { label: 'MINUTES', value: timeLeft.minutes, malayalam: 'മിനിറ്റുകൾ' },
    { label: 'SECONDS', value: timeLeft.seconds, malayalam: 'സെക്കൻഡുകൾ' },
  ];

  return (
    <section 
      id="countdown" 
      className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-[#203A2A] via-[#1A2E21] to-[#203A2A] text-[#FFF8E8] overflow-hidden select-none"
    >
      {/* Background Sacred Pookalam Subtle Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <PookalamPattern className="w-[500px] h-[500px] md:w-[750px] md:h-[750px]" />
      </div>

      {/* Top & Bottom Kasavu Borders */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-70" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A45C] to-transparent opacity-70" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Malayalam Accent Subtitle */}
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-malayalam text-[#D6B56C]/90 tracking-widest mb-1.5"
        >
          ശുഭ മുഹൂർത്തം
        </motion.span>

        {/* Section Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#F5EBD5] tracking-[0.2em] uppercase font-normal"
        >
          THE AUSPICIOUS DAY
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs md:text-sm font-serif tracking-[0.25em] text-[#D6B56C] uppercase mt-2 mb-6"
        >
          {wedding.date} • {wedding.time}
        </motion.p>

        <TempleDivider variant="goldOnDark" className="my-6 md:my-8" />

        {/* Auspicious Countdown Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full max-w-3xl my-6">
          {timeUnits.map((unit, idx) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative group p-4 sm:p-6 rounded-sm bg-[#16291C]/80 border border-[#C9A45C]/35 shadow-wood flex flex-col items-center justify-center transition-all duration-300 hover:border-[#D6B56C]"
            >
              {/* Corner Ornaments */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#C9A45C]" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#C9A45C]" />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#C9A45C]" />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#C9A45C]" />

              {/* Number with smooth Flip/Slide animation */}
              <div className="h-14 sm:h-16 md:h-20 flex items-center justify-center overflow-hidden">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={unit.value}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-brass-metallic tracking-wider drop-shadow-sm"
                  >
                    {String(unit.value).padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Label */}
              <span className="text-[10px] sm:text-xs font-serif uppercase tracking-[0.25em] text-[#D6B56C] font-semibold mt-2">
                {unit.label}
              </span>
              <span className="text-[9px] font-malayalam text-[#FFF8E8]/40 tracking-wider">
                {unit.malayalam}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Muhurtham Information Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#C9A45C]/30 bg-[#16291C]/50 text-xs sm:text-sm text-[#F5EBD5]/90 font-serif tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C] animate-pulse" />
          <span>{wedding.muhurtham}</span>
          <span className="text-[#D6B56C]">✦</span>
          <span>Nakshatram: {wedding.nakshatram}</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Countdown;
