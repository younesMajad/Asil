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
        obsidian: '#0a0a0a',
        charcoal: '#1a1a1a',
        graphite: '#3a3a3a',
        smoke: '#6b6b6b',
        stone: '#a8a29e',
        parchment: '#f5f0e8',
        'gold-accent': '#d4a574',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      letterSpacing: {
        architect: '0.15em',
        cinematic: '0.08em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config