const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('prints', '/prints/:name')
routes.add('photo_production', '/photo_production/:name')
routes.add('pos_horeca', '/pos_horeca/:name')
routes.add('canvases', '/canvases/:name')
routes.add('hard_cover/', '/hard_cover//:name')
routes.add('gifts', '/gifts/:name')
routes.add('board_games', '/board_games/:name')
routes.add('weddings_celebrations', '/weddings_celebrations/:name')
routes.add('packaging', '/packaging/:name')