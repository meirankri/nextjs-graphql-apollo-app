

exports.portfoliosTypes = `
  type Portfolio {
    _id: ID
    title: String
    company: String
    companyWebsite: String
    location: String
    jobTitle: String
    description:String
    startDate:String
    endDate:String
  }

  input portfolioInput {
    title: String
    company: String
    companyWebsite: String
    location: String
    jobTitle: String
    description:String
    startDate:String
    endDate:String
  }
`
