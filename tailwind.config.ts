import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        primaryHover: 'var(--primary-hover)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        container: 'var(--container)',
        title: 'var(--title)',
        text: 'var(--text)',
        border: 'var(--border)',
      },
    },
  },
  plugins: [],
}
export default config
