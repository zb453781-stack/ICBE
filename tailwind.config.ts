import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // ICBE Brand Colors
        primary: {
          DEFAULT: '#0C3F66', // Navy Blue
          50: '#f0f6fb',
          100: '#d9e9f5',
          200: '#b3d3eb',
          300: '#8cbce1',
          400: '#66a5d7',
          500: '#0C3F66',
          600: '#0a3452',
          700: '#08293e',
          800: '#061d2a',
          900: '#041216',
        },
        secondary: {
          DEFAULT: '#0F7F4F', // Emerald Green
          50: '#f0f7f3',
          100: '#d9f0e6',
          200: '#b3e1cd',
          300: '#8cd2b4',
          400: '#66c39b',
          500: '#0F7F4F',
          600: '#0c6a42',
          700: '#0a5535',
          800: '#074028',
          900: '#052b1b',
        },
        accent: {
          DEFAULT: '#F5B10A', // Golden Yellow
          50: '#fffbf0',
          100: '#fff5d9',
          200: '#ffecb3',
          300: '#ffe28c',
          400: '#ffd966',
          500: '#F5B10A',
          600: '#cc8f08',
          700: '#996a06',
          800: '#664504',
          900: '#332202',
        },
        'accent-secondary': '#138A58', // Light Green
        neutral: {
          light: '#F1F1F1', // Soft Gray
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config
