// @ts-check
import { defineConfig } from 'astro/config'

import cloudflare from '@astrojs/cloudflare'
import node from '@astrojs/node'

import tailwindcss from '@tailwindcss/vite'

import preact from '@astrojs/preact'

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
      : node({
          mode: 'standalone'
        }),
  devToolbar: {
    enabled: false
  },
  integrations: [preact()]
})
