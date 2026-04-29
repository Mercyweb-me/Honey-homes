/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: '#FFD700', // Bright honey gold
        'gold-shine': '#FFE55C', // Shining honey gold
        'gold-dark': '#D4AF37', // Antique gold
        'gold-glow': '#FFF8DC', // Light honey glow
        ink: '#0B0803', // Very dark from logo
        'ink-light': '#1a1a1a', // Slightly lighter dark
        smoke: '#c9c6c1',
      },
      boxShadow: {
        gold: '0 30px 80px rgba(255,215,0,0.25)',
        'gold-glow': '0 0 30px rgba(255,215,0,0.4), 0 0 60px rgba(255,215,0,0.2)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(255,215,0,0.25), transparent 40%)',
      },
    },
  },
  plugins: [],
}

