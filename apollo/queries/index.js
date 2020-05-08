import { gql } from 'apollo-boost'


export const GET_PORTFOLIO = gql`
query Portfolio($id: ID) {
  portfolio (id: $id) {
    _id,
    title,
    company,
    companyWebsite
    location
    jobTitle
    description
    startDate
    endDate
  }
}
`

export const GET_PORTFOLIOS = gql`
query Portfolios {
  portfolios {
    _id,
    title,
    company,
    companyWebsite
    location
    jobTitle
    description
    startDate
    endDate
  }
}
`
export const CREATE_PORTFOLIO = gql`
mutation CreatePortfolio {
  createPortfolio(input: {
    title: "New Job"
    company: "New Company"
    companyWebsite: "New Website"
    location: "New Location"
    jobTitle: "New Job Title"
    description: "New Desc"
    startDate: "2012-12-12t23:59Z"
    endDate: "2013-11-14t23:59Z"
  }) {
    _id,
    title,
    company,
    companyWebsite
    location
    jobTitle
    description
    startDate
    endDate
  }
}`
export const UPDATE_PORTFOLIO = gql`
  mutation UpdatePortfolio($id: ID) {
    updatePortfolio(id: $id, input: {
      title: "Update Job"
        company: "update Company"
        companyWebsite: "update Website"
        location: "update Location"
        jobTitle: "update Job Title"
        description: "update Desc"
        startDate: "2012-12-12t23:59Z"
        endDate: "2013-11-14t23:59Z"

    }){
      _id
      title
      company
      companyWebsite
      location
      jobTitle
      description
      startDate
        endDate
    }
  }
`
export const DELETE_PORTFOLIO = gql`
mutation deletePortfolio($id: ID) {
  deletePortfolio(id: $id)
}`
