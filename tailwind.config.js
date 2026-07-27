/*
  tailwind.config.js
  Purpose: Defines custom design tokens so Tailwind utility classes work.
  Usage: Write bg-primary-500, text-primary-700, font-sans in JSX.
  Relationship: Same hex values as src/styles/design-tokens.css.
    Tailwind config = for Tailwind utility classes in markup.
    design-tokens.css = for CSS custom properties (JS access, inline styles).
*/

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF5FF',
          100: '#D6EBFF',
          200: '#ADD5FF',
          300: '#85BFFF',
          400: '#5CA8FF',
          500: '#338EFF',
          600: '#297ACC',
          700: '#1F5C99',
          800: '#154766',
          900: '#0B3333',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
