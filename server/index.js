
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const config = require('./config/dev')
const session = require('express-session')

const db = require('./database')
db.runDb()
const sess = {
  name: 'portfolio-session',
  secret: config.secret,
  cookie: {maxAge : 2*60*60*1000},
  resave : false,
  saveUninitialized: false,
  store: db.initSessionStore()

}

app.prepare().then(() => {
  const server = express()
  server.use(session(sess))
  const apolloServer = require('./grahpql').createApolloServer()
  // the server is the server = express()
  apolloServer.applyMiddleware({app: server})

  // server.use('/graphql', graphqlHTTP({
  //   schema,
  //   rootValue: root,
  //   //graphiql is a tool developpement for manage graphql
  //   graphiql: true
  // }))

  // all http request go thro by this function
  server.all('*', (req, res) => {

    return handle(req, res)
  })

  server.listen(port, err => {
    // throw err send error on the terminal
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
