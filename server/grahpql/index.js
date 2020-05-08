const mongoose = require('mongoose')
const { ApolloServer , gql} = require('apollo-server-express')

const { portfoliosQuery, portfoliosMutations, userMutations } = require('./resolvers')

const {portfoliosTypes, userTypes} = require('.//types')
const { buildAuthContext } = require('./context')
const Portfolio = require('./models/Portfolio')
const User = require('./models/User')



exports.createApolloServer = () =>{
  // schema from apollo
  // type query is use to fetch data
  //type mutation used for post update delete
  const typeDefs = gql`
    ${portfoliosTypes}
    ${userTypes}
    type Query {
      portfolio(id: ID): Portfolio
      portfolios: [Portfolio]
    }
    type Mutation {
      createPortfolio(input: portfolioInput): Portfolio
      updatePortfolio(id: ID, input : portfolioInput) : Portfolio
      deletePortfolio(id: ID) : ID

      signIn(input: SignInInput): String
      signUp(input: SignUpInput): String
      signOut: String
    }
  `;


  const resolvers ={
    Query: {
      ...portfoliosQuery
    },
    Mutation: {
      ...portfoliosMutations,
      ...userMutations
    },
  }

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    // to use a external class to make the request database
    context: () =>({
      ...buildAuthContext(),
      models: {
        Portfolio: new Portfolio(mongoose.model('Portfolio')),
        User: new User(mongoose.model('User'))
      }
    })
  })

  return apolloServer
}
