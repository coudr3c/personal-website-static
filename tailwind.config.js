/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'], // Use explicit data-theme selector
  theme: {
    extend: {
      colors: {
        // Define custom theme-aware colors
        'theme-bg-primary': 'var(--bg-primary)',
        'theme-bg-secondary': 'var(--bg-secondary)',
        'theme-surface': 'var(--surface)',
        'theme-surface-hover': 'var(--surface-hover)',
        'theme-text-primary': 'var(--text-primary)',
        'theme-text-secondary': 'var(--text-secondary)',
        'theme-border': 'var(--border-color)',
      },
    },
  },
  plugins: [],
} 