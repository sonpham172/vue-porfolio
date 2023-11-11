/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      padding: '2rem',
      center: true
    },
    colors: {
      'primary-text': 'var(--primary-text)',
      'primary-secondary': 'var(--primary-secondary)',
      'primary-tertiary': 'var(--primary-secondary)',
      'primary-light-text': 'var(--primary-light-text)',
      'primary-border': 'var(--primary-border)',
      'accent': 'var(--accent)',
      'white': 'var(--white)',
      'black': 'var(--black)',
      'dark-mode-text': 'var(--dark-mode-text)',
      'dark-mode-border': 'var(--dark-mode-border)',
      'dark-mode-secondary-text': 'var(--dark-mode-secondary-text)',
      'dark-mode-tertiary-text': 'var(--dark-mode-tertiary-text)',
      'background': 'var(--background)',
      'background-secondary': 'var(--background-secondary)',
      'background-tertiary': 'var(--background-tertiary)',
      'component-background': 'var(--component-background)',
    }
  },
  plugins: [],
}

