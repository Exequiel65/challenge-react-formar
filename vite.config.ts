import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> ={
  registerType : "prompt",
  includeAssets: ["vite.svg"],
  manifest : {
    name : "Pokedex",
    short_name : "Pokedex",
    description : "Challenge de Pokedex con react vite",
    theme_color : "#171717",
    background_color : "#e8ebf2",
    display : "standalone",
    scope : "/",
    start_url : "/",
    orientation : "portrait"
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA(manifestForPlugin),
  ]
})


