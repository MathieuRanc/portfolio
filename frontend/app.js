// const { Nuxt } = require('nuxt-start')

// // Require nuxt config
// const config = require('./nuxt.config.js')

// // Create a new nuxt instance (config needs dev: false)
// const nuxt = new Nuxt(config)

// // Start nuxt server
// nuxt.listen(3000) // nuxt.listen(port, host)

// // Or use `nuxt.render` as an express middleware

const { loadNuxt, build } = require('nuxt')

const app = require('express')()
// const isDev = process.env.NODE_ENV !== 'production'
const isDev = false
const port = process.env.PORT || 3000

async function start() {
  // We get Nuxt instance
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // Render every route with Nuxt
  app.use(nuxt.render)

  // Build only in dev mode with hot-reloading
  if (isDev) {
    build(nuxt)
  }
  // Listen the server
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()