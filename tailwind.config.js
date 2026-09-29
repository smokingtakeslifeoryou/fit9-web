/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF8F5',
          sand: '#F5F1EB',
          dark: '#1C1917',
          surface: '#FFFFFF',
          muted: '#78716C',
          faint: '#A8A29E',
          border: '#E7E2DA',
          accent: '#C5A898',
          accentHover: '#B59685',
          champagne: '#EFE7E2',
        },
        'brand-bg': '#FAF8F5',
        'brand-sand': '#F5F1EB',
        'brand-dark': '#1C1917',
        'brand-surface': '#FFFFFF',
        'brand-muted': '#78716C',
        'brand-faint': '#A8A29E',
        'brand-border': '#E7E2DA',
        'brand-accent': '#C5A898',
        'brand-accentHover': '#B59685',
        'brand-champagne': '#EFE7E2',
      },
      fontFamily: {
        ed: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      maxWidth: {
        shell: '1440px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(28, 25, 23, 0.05)',
        card: '0 10px 30px -4px rgba(28, 25, 23, 0.07)',
        deep: '0 25px 50px -12px rgba(28, 25, 23, 0.15)',
      },
    },
  },
  plugins: [],
}
