/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kerala: {
          ivory: '#F5EBD5',
          cream: '#FFF8E8',
          brass: '#C9A45C',
          gold: '#D6B56C',
          maroon: '#6B241C',
          temple: '#4A3022',
          green: '#31533A',
          darkgreen: '#203A2A',
          wood: '#3D2B1F',
          goldlight: '#F3E5AB',
          accent: '#B38B3F'
        }
      },
      fontFamily: {
        serif: ['"Cinzel Decorative"', '"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        malayalam: ['"Gayathri"', '"Manjari"', '"Noto Serif Malayalam"', 'serif']
      },
      boxShadow: {
        'lamp': '0 0 35px 8px rgba(201, 164, 92, 0.35)',
        'lamp-lg': '0 0 65px 18px rgba(201, 164, 92, 0.45)',
        'brass': '0 10px 30px -5px rgba(74, 48, 34, 0.15), 0 0 0 1px rgba(201, 164, 92, 0.25)',
        'wood': '0 15px 35px -5px rgba(61, 43, 31, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'flame-flicker': 'flameFlicker 3s ease-in-out infinite alternate',
        'subtle-pulse': 'subtlePulse 4s ease-in-out infinite',
        'gentle-float': 'gentleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        flameFlicker: {
          '0%': { transform: 'scale(1) rotate(-1deg)', filter: 'drop-shadow(0 0 12px rgba(235,160,50,0.85))' },
          '25%': { transform: 'scale(1.05, 0.98) rotate(1deg)', filter: 'drop-shadow(0 0 16px rgba(245,185,60,0.95))' },
          '50%': { transform: 'scale(0.97, 1.04) rotate(-0.5deg)', filter: 'drop-shadow(0 0 14px rgba(230,150,45,0.8))' },
          '75%': { transform: 'scale(1.03, 1.01) rotate(0.8deg)', filter: 'drop-shadow(0 0 18px rgba(250,200,70,0.95))' },
          '100%': { transform: 'scale(1) rotate(-1deg)', filter: 'drop-shadow(0 0 12px rgba(235,160,50,0.85))' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        gentleFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-6px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}
