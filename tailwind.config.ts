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
        obsidian: '#0A0A0A',
        charcoal: '#1A1A1A',
        graphite: '#2C2C2C',
        smoke: '#6B6B6B',
        stone: '#D4C9B8',
        parchment: '#F5F0E8',
        gold: {
          accent: '#C9A96E',
        }
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      letterSpacing: {
        architect: '0.15em',
        cinematic: '0.25em',
      },
    },
  },
  plugins: [],
}
export default config