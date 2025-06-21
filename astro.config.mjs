// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [tailwindcss()]
  },
  adapter:
    process.env.NODE_ENV === 'production'
      ? cloudflare({
          platformProxy: {
            enabled: true
          },
          imageService: 'cloudflare'
        })
      : undefined
})
