/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: '#E6B800', // Softer honey gold (less bright)
        'gold-shine': '#F0C674', // Muted shining honey gold (less intense)
        'gold-dark': '#B8860B', // Antique gold (slightly lighter)
        'gold-glow': '#F5F5DC', // Light honey glow (warmer)
        ink: '#1a1a1a', // Lighter dark background (less black)
        'ink-light': '#2a2a2a', // Even lighter for contrast
        smoke: '#d4d4d4', // Lighter smoke color
      },
      boxShadow: {
        gold: '0 10px 30px rgba(230, 184, 0, 0.15)',
        'gold-glow': '0 0 15px rgba(230, 184, 0, 0.2), 0 0 30px rgba(230, 184, 0, 0.1)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(255,215,0,0.25), transparent 40%)',
      },
    },
  },
  plugins: [],
}

