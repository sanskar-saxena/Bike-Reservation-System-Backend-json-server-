const jsonServer = require('json-server')
const auth = require('json-server-auth')
var cors = require('cors')
const port = process.env.PORT || 8080


const server = jsonServer.create()
server.use(cors())
const router = jsonServer.router('./db.json')


const middleware=jsonServer.defaults()
// /!\ Bind the router db to the app
server.db = router.db

// You must apply the auth middleware before the router
server.use(auth)
server.use(middleware)
server.use(router)
server.listen(port)