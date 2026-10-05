import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, ExternalLink } from 'lucide-react';
import { wedding } from '../data/wedding';
import { TempleDivider } from './ornaments/TempleDivider';
import { KeralaBorder } from './ornaments/KeralaBorder';

export const WeddingDetails = () => {
  return (
    <section 
      id="wedding-details" 
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5EBD5]/60 text-[#4A3022] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] font-serif font-semibold"
          >
            THE SACRED CEREMONY
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3D2B1F] tracking-[0.18em] uppercase font-normal mt-2"
          >
            THE WEDDING
          </motion.h2>

          <p className="text-sm font-malayalam text-[#6B241C] mt-2">
            ഗുരുവായൂർ അമ്പലത്തിൽ വെച്ച് നടക്കുന്ന മംഗല്യ വേളയിലേക്ക്
          </p>

          <TempleDivider className="my-6" />
        </div>

        {/* Traditional Three Information Areas with Large Whitespace and Brass Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {/* 1. DATE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <KeralaBorder className="h-full flex flex-col items-center text-center py-8 px-6 bg-[#FFFDF8]">
              <div className="w-12 h-12 rounded-full border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] mb-4 bg-[#FFF8E8]">
                <Calendar className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A45C] font-serif font-bold mb-2">
                DATE
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#3D2B1F] tracking-wider font-semibold">
                {wedding.date.toUpperCase()}
              </h3>
              <div className="w-12 h-[1px] bg-[#C9A45C]/50 my-3" />
              <p className="text-xs font-serif text-[#6B241C] tracking-widest uppercase">
                SUNDAY
              </p>
              <p className="text-xs font-malayalam text-[#4A3022]/70 mt-1">
                {wedding.dayMalayalam}
              </p>
            </KeralaBorder>
          </motion.div>

          {/* 2. TIME */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <KeralaBorder className="h-full flex flex-col items-center text-center py-8 px-6 bg-[#FFFDF8]">
              <div className="w-12 h-12 rounded-full border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] mb-4 bg-[#FFF8E8]">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A45C] font-serif font-bold mb-2">
                TIME
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#3D2B1F] tracking-wider font-semibold">
                {wedding.time}
              </h3>
              <div className="w-12 h-[1px] bg-[#C9A45C]/50 my-3" />
              <p className="text-xs font-serif text-[#6B241C] tracking-widest uppercase">
                AUSPICIOUS MUHURTHAM
              </p>
              <p className="text-xs font-sans text-[#4A3022]/70 mt-1">
                {wedding.muhurtham}
              </p>
            </KeralaBorder>
          </motion.div>

          {/* 3. VENUE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <KeralaBorder className="h-full flex flex-col items-center text-center py-8 px-6 bg-[#FFFDF8]">
              <div className="w-12 h-12 rounded-full border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] mb-4 bg-[#FFF8E8]">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A45C] font-serif font-bold mb-2">
                VENUE
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-[#3D2B1F] tracking-wider font-semibold">
                {wedding.venue.toUpperCase()}
              </h3>
              <div className="w-12 h-[1px] bg-[#C9A45C]/50 my-3" />
              <p className="text-xs font-serif text-[#6B241C] tracking-widest uppercase">
                {wedding.subVenue}
              </p>
              <p className="text-xs font-sans text-[#4A3022]/80 mt-1">
                {wedding.location}
              </p>
            </KeralaBorder>
          </motion.div>
        </div>

        {/* View Location Google Maps Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex justify-center"
        >
          <a
            href={wedding.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-sm bg-gradient-to-r from-[#3D2B1F] to-[#251A13] text-[#F5EBD5] border border-[#C9A45C]/70 shadow-brass hover:border-[#D6B56C] hover:text-[#FFF8E8] transition-all duration-300 group"
          >
            <MapPin className="w-4 h-4 text-[#D6B56C] group-hover:scale-110 transition-transform" />
            <span className="text-xs md:text-sm font-serif uppercase tracking-[0.25em] font-medium">
              VIEW LOCATION ON GOOGLE MAPS
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C] opacity-80" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingDetails;
