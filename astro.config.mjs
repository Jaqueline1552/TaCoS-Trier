// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jaqueline1552.github.io',
  base: '/TaCoS-Trier',

  vite: {
    plugins: [tailwindcss()]
  }
});