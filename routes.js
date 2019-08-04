const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())


routes.add('prints', '/prints/:slug')
routes.add('about', '/about-us')
