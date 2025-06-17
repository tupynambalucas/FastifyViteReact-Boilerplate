import Fastify from 'fastify'
import  { resolve } from 'node:path'
import FastifyVite from '@fastify/vite'
import AutoLoad from '@fastify/autoload'

const server = Fastify({  
    logger: {
        transport: {
            target: '@fastify/one-line-logger',
        }
    }
})

await server.register(FastifyVite, {
    root: resolve(import.meta.dirname), // where to look for vite.config.js
    dev: process.argv.includes('--dev'),
    renderer: '@fastify/react',
})


await server.register(AutoLoad, {
    dir: resolve(import.meta.dirname, 'routes'),
})
console.log('Tudo Carregado')




await server.vite.ready()
await server.listen({host: '0.0.0.0', port: 8080 })