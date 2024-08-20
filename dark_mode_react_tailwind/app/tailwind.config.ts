import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-text': '#e0e0e0',
        'light-bg': '#ffffff',
        'light-text': '#000000',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {},
  },
} satisfies Config