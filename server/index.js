
const express = require('express')
const next = require('next')
//const graphqlHTTP = require('express-graphql')
//const {buildSchema}=  require('graphql')

const { ApolloServer , gql} = require('apollo-server-express')
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { portfoliosQuery, portfoliosMutations } = require('./grahpql/resolvers')

const {portfoliosTypes} = require('./grahpql/types')
app.prepare().then(() => {
  const server = express()



  // construct a schema using graphql schema language
  // ! to say that the return can't be null
  // type query is use to fetch data
  //type mutation used for post update delete
  const typeDefs = gql`
    ${portfoliosTypes}

    type Query {
      hello: String
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }
    type Mutation {
      createPortfolio(input: portfolioInput): Portfolio
      updatePortfolio(id: ID, input : portfolioInput) : Portfolio
      deletePortfolio(id: ID) : ID
    }
  `;


  const resolvers ={
    Query: {
      ...portfoliosQuery
    },
    Mutation: {
      ...portfoliosMutations
    },
  }

  const apolloServer = new ApolloServer({typeDefs, resolvers})
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
