/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        heading: ['Inter', 'sans-serif'],
      },
      colors: {
        'gradient-1-start': '#FF3366',
        'gradient-1-end': '#FF6B6B',
        'gradient-2-start': '#4A90E2',
        'gradient-2-end': '#67B26F',
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(45deg, #FF3366, #FF6B6B)',
        'gradient-2': 'linear-gradient(45deg, #4A90E2, #67B26F)',
      },
      animation: {
        'gradient-flow': 'gradient-flow 3s ease-in-out infinite',
        'fade-up': 'fade-up 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      maxWidth: {
        'container': '1200px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backdropBlur: {
        'xs': '2px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};