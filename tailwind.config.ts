// tailwind.config.ts

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
        'primary-blue': '#1A3B7A',      // Azul escuro principal
        'secondary-blue': '#4DA6FF',   // Azul claro para destaques
        'dark-gray': '#333333',         // Cinza para texto e fundos escuros
        'light-gray': '#F8F8F8',        // Cinza bem claro para fundos
        'accent-yellow': '#FFD700',     // Amarelo dourado para botões (CTA)
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-background.png')", // Imagem de fundo para a seção Hero
      },
    },
  },
  plugins: [],
}
export default config