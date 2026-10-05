import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { CheckCircle2, HeartHandshake, Send } from 'lucide-react';
import { TempleDivider } from './ornaments/TempleDivider';
import { KeralaBorder } from './ornaments/KeralaBorder';

export const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'YES', // 'YES' or 'NO'
    guests: '1',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    if (formData.attendance === 'YES' && (!formData.guests || parseInt(formData.guests) < 1)) {
      errs.guests = 'Please specify at least 1 guest.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate backend submission (structured for API hookup)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Flower petal colored confetti burst (gold, maroon, cream)
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#C9A45C', '#6B241C', '#D6B56C', '#FFF8E8']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 800);
  };

  return (
    <section 
      id="rsvp" 
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[#F5EBD5]/70 text-[#4A3022] overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-[#C9A45C] font-serif font-semibold"
          >
            JOIN US IN CELEBRATION
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#3D2B1F] tracking-[0.18em] uppercase font-normal mt-2 leading-tight"
          >
            YOUR PRESENCE<br />
            <span className="text-[#6B241C] italic">IS OUR BLESSING</span>
          </motion.h2>

          <p className="text-base sm:text-lg font-cormorant italic text-[#4A3022] mt-3">
            We would be honoured to celebrate this auspicious occasion with you.
          </p>

          <TempleDivider className="my-6" />
        </div>

        {/* Traditional Wood & Brass Framed Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <KeralaBorder className="bg-[#FFFDF8] py-8 sm:py-10 px-6 sm:px-10 border-[#C9A45C]/50 shadow-wood">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full border-2 border-[#C9A45C] bg-[#FFF8E8] flex items-center justify-center text-[#C9A45C] mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#3D2B1F] tracking-wider font-semibold">
                  Nandri &amp; Warmest Blessings
                </h3>
                <p className="text-base sm:text-lg font-cormorant text-[#6B241C] mt-2 max-w-lg">
                  Thank you for celebrating this beautiful moment with us.
                </p>
                <p className="text-xs text-[#4A3022]/70 font-sans tracking-wide mt-2">
                  We look forward to welcoming you at Guruvayoor Ambalam on 13 December 2026.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', attendance: 'YES', guests: '1', message: '' });
                  }}
                  className="mt-6 text-xs uppercase tracking-widest font-serif text-[#C9A45C] hover:text-[#3D2B1F] underline underline-offset-4"
                >
                  Submit another RSVP response
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Name */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-serif text-[#3D2B1F] font-semibold mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full px-4 py-3 rounded-sm bg-[#FFF8E8] border text-[#3D2B1F] placeholder-[#4A3022]/40 font-sans text-sm focus:outline-none transition-colors ${
                      errors.name ? 'border-[#6B241C]' : 'border-[#C9A45C]/50 focus:border-[#C9A45C]'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-[#6B241C] font-sans mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* 2. Will you be joining us? (YES / NO Radio Buttons) */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-serif text-[#3D2B1F] font-semibold mb-3">
                    Will you be joining us? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* YES Button */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'YES' })}
                      className={`py-3.5 px-4 rounded-sm text-xs font-serif uppercase tracking-[0.2em] flex items-center justify-center gap-2 border transition-all ${
                        formData.attendance === 'YES'
                          ? 'bg-[#31533A] text-[#FFF8E8] border-[#31533A] shadow-md font-semibold'
                          : 'bg-[#FFF8E8] text-[#4A3022] border-[#C9A45C]/50 hover:bg-[#F5EBD5]'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${formData.attendance === 'YES' ? 'bg-[#D6B56C]' : 'bg-transparent border border-[#4A3022]'}`} />
                      YES, I'LL BE THERE
                    </button>

                    {/* NO Button */}
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, attendance: 'NO' })}
                      className={`py-3.5 px-4 rounded-sm text-xs font-serif uppercase tracking-[0.2em] flex items-center justify-center gap-2 border transition-all ${
                        formData.attendance === 'NO'
                          ? 'bg-[#6B241C] text-[#FFF8E8] border-[#6B241C] shadow-md font-semibold'
                          : 'bg-[#FFF8E8] text-[#4A3022] border-[#C9A45C]/50 hover:bg-[#F5EBD5]'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${formData.attendance === 'NO' ? 'bg-[#D6B56C]' : 'bg-transparent border border-[#4A3022]'}`} />
                      SORRY, CAN'T MAKE IT
                    </button>
                  </div>
                </div>

                {/* 3. Number of Guests (If YES) */}
                {formData.attendance === 'YES' && (
                  <div>
                    <label className="block text-xs uppercase tracking-[0.2em] font-serif text-[#3D2B1F] font-semibold mb-2">
                      Number of Guests Attending
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#FFF8E8] border border-[#C9A45C]/50 text-[#3D2B1F] font-sans text-sm focus:outline-none focus:border-[#C9A45C]"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5+ Family Members</option>
                    </select>
                  </div>
                )}

                {/* 4. Personal Message / Blessings */}
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-serif text-[#3D2B1F] font-semibold mb-2">
                    Blessings &amp; Message for Vyshnav &amp; Pooja
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your wishes or blessings here..."
                    className="w-full px-4 py-3 rounded-sm bg-[#FFF8E8] border border-[#C9A45C]/50 text-[#3D2B1F] placeholder-[#4A3022]/40 font-sans text-sm focus:outline-none focus:border-[#C9A45C]"
                  />
                </div>

                {/* Submit Primary RSVP Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-sm bg-gradient-to-r from-[#3D2B1F] via-[#4A3022] to-[#251A13] text-[#F5EBD5] border border-[#C9A45C] hover:border-[#D6B56C] hover:text-[#FFF8E8] shadow-brass transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-4 h-4 text-[#D6B56C] group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm font-serif uppercase tracking-[0.28em] font-semibold">
                      {isSubmitting ? 'TRANSMITTING BLESSINGS...' : 'CONFIRM RSVP'}
                    </span>
                  </button>
                </div>
              </form>
            )}
          </KeralaBorder>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;
