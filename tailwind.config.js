/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'onest': ['"Onest"', 'sans-serif'],
      },
      colors: {
        'orange': '#F2692E', 
        'gray': '#71717A',
        'border-color': '#E4E4E7',
        'nav-color' : `rgba(228, 228, 231, 0.50)`,
        'dark' : '#09090',
      },
      keyframes: {
        'reveal': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'rotateY': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'reveal': 'reveal 0.6s ease-out forwards',
        'rotateY': 'rotateY 2s linear 0.5',
      },
    },
  },
  plugins: [],
}
