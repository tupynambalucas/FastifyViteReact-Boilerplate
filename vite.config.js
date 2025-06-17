import { resolve } from 'node:path'
import viteReact from '@vitejs/plugin-react'
import fastifyReact from '@fastify/react/plugin'

export default {
  root: resolve(import.meta.dirname, 'client'),
  plugins: [
    viteReact(),
    fastifyReact()
  ],
  ssr: {
    external: [
      'use-sync-external-store'
    ]
  },
}