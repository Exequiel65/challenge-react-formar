import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> ={
  registerType : "prompt",
  includeAssets: ["/images/pokebola2.png"],
  manifest : {
    name : "Pokedex",
    short_name : "Pokedex",
    description : "Challenge de Pokedex con react vite",
    icons: [
      {
        src : "/images/pokebola2.png",
        sizes : "192x192",
        type : "image/png"
      }
    ],
    theme_color : "#171717",
    background_color : "#e8ebf2",
    display : "standalone",
    scope : "/",
    start_url : "/",
    orientation : "portrait"
  },
  devOptions : {
    enabled : true
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  base : "./",
  plugins: [
    react(),
    VitePWA(manifestForPlugin),
  ],
})


