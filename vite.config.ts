import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: 'Pokedex',
        short_name: 'Pokedex',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/path/to/icon.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  build: {
    rollupOptions: {
      plugins: [
        VitePWA({
          manifest: {
            name: 'Nombre de tu aplicación',
            short_name: 'Nombre corto',
            theme_color: '#ffffff',
            icons: [
              {
                src: '/path/to/icon.png',
                sizes: '192x192',
                type: 'image/png',
              },
            ],
          },
        }),
      ],
    }
  }
})


