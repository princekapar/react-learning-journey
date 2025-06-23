import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({

  darkMode: 'class', // or 'media' – for theme switching, use 'class'
  theme: {
    extend: {},
  },

  plugins: [react(),
      tailwindcss(),
  ],
})
