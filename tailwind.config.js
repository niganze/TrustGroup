/** @type {import('tailwindcss').Config} */
export const content = [
  // Your content paths here
  "./src/**/*.{js,jsx,ts,tsx}",
]
export const theme = {
  extend: {
    fontFamily: {
      'heading': ['"Agency FB"', 'sans-serif'],
      'body': ['Monda', 'sans-serif'],
    },
    keyframes: {
      blob: {
        '0%': { transform: 'translate(0px, 0px) scale(1)' },
        '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
        '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        '100%': { transform: 'translate(0px, 0px) scale(1)' }
      },
      float: {
        '0%': { transform: 'translateY(0px) rotate(0deg)', opacity: '0.05' },
        '50%': { transform: 'translateY(-20px) rotate(180deg)', opacity: '0.1' },
        '100%': { transform: 'translateY(0px) rotate(360deg)', opacity: '0.05' }
      }
    },
    animation: {
      'blob': 'blob 7s infinite alternate',
      'float': 'float 15s infinite ease-in-out'
    }
  },
}
export const plugins = [
  // Add a plugin to create the animation delay utilities
  function ({ addUtilities }) {
    const newUtilities = {
      '.animation-delay-1000': {
        'animation-delay': '1s',
      },
      '.animation-delay-2000': {
        'animation-delay': '2s',
      },
      '.animation-delay-4000': {
        'animation-delay': '4s',
      },
    }
    addUtilities(newUtilities)
  }
]