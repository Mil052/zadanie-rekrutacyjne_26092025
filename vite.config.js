import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // https://ucilasmana.medium.com/deploying-a-static-vite-app-on-github-pages-with-github-actions-03a67bb9ac4e
  base: '/zadanie-rekrutacyjne_26092025/',
  plugins: [
    tailwindcss(),
  ],
})