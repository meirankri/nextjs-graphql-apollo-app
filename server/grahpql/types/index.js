const portfolioFields = `
title: String
    company: String
    companyWebsite: String
    location: String
    jobTitle: String
    description:String
    startDate:String
    endDate:String
  `

exports.portfoliosTypes = `
  type Portfolio {
    _id: ID
    ${portfolioFields}
  }

  input portfolioInput {
    ${portfolioFields}
  }
`
exports.userTypes = `
  input SignUpInput{
    avatar: String
    username: String!
    name: String
    email: String!
    password: String!
    passwordConfirmation: String!

  }
  input SignInInput {
    email: String!
    password: String !
  }
`
