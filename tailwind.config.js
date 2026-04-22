/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d9b56f',
        ink: '#070507',
        smoke: '#c9c6c1',
      },
      boxShadow: {
        gold: '0 30px 80px rgba(217,181,111,0.18)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(217,181,111,0.2), transparent 40%)',
      },
    },
  },
  plugins: [],
}

