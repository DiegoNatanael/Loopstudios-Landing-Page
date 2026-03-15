// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://DiegoNatanael.github.io',
  base: '/Loopstudios-Landing-Page',
  vite: {
    plugins: [tailwindcss()]
  }
});