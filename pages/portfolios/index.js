import axios from 'axios';
import { useLazyQuery, useMutation } from '@apollo/react-hooks';
import { GET_PORTFOLIOS, CREATE_PORTFOLIO } from '@/apollo/queries';
import PortfolioCard from "@/components/portfolios/portfolioCard.js"
import Link from 'next/link';
import { useState, useEffect } from 'react'
import withApollo from '@/hoc/withApollo';



const graphUpdatePortfolio = (id) => {
  const query = `
  mutation updatePortfolio {
    updatePortfolio(id: "${id}", input: {
       title: "Update Job"
        company: "update Company"
        companyWebsite: "update Website"
        location: "update Location"
        jobTitle: "update Job Title"
        description: "update Desc"
        startDate: "12/12/2012"
        endDate: "14/11/2013"

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
  }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.updatePortfolio)
}
const graphDeletePortfolio = (id) => {
  const query = `
  mutation deletePortfolio {
    deletePortfolio(id: "${id}")
  }`;
  return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) => graph.data)
    .then(data => data.deletePortfolio)
}


const Portfolios = () =>{

const [portfolios, setPortfolios] = useState([])
const [getPortfolios, {loading, data}] = useLazyQuery(GET_PORTFOLIOS)
const [createPortfolio]
= useMutation(CREATE_PORTFOLIO,{
  update(cache, {data : {createPortfolio}}){
    // get data from the cache
    const {portfolios} = cache.readQuery({query : GET_PORTFOLIOS})
    //write on the cache the same data with the new data that we create
    cache.writeQuery({
      query: GET_PORTFOLIOS,
      data: {portfolios : [...portfolios, createPortfolio]}
    })
  }
})

useEffect(()=>{
  getPortfolios()
},[])

if (data && data.portfolios.length > 0 && (portfolios.length === 0 || data.portfolios.length !== portfolios.length )) {
  setPortfolios(data.portfolios)
}
if (loading ) {return 'Loading...'}



const updatePortfolio = async( id)=>{
  const updated = await graphUpdatePortfolio(id)
  console.log(updated);

  const index = portfolios.findIndex(p => p._id === id)
  const newPortfolios = portfolios.slice()
  newPortfolios[index] = updated
  setPortfolios(newPortfolios)


}

const deletePortfolio = async (id) =>{
  const deletedPortfolio = await graphDeletePortfolio(id)
  const index = portfolios.findIndex(p => p._id === deletedPortfolio)
  const newPortfolios = portfolios.slice()
  newPortfolios.splice(index,1)
  setPortfolios(newPortfolios)
}
  return(
    <>
      <section className="section-title">
        <div className="px-2">
          <div className="pt-5 pb-4">
            <h1>Portfolios</h1>
          </div>
        </div>
      </section>
      <button
        onClick={createPortfolio}
        className="btn btn-primary">
        create protfolio
      </button>
      <section className="pb-5">
        <div className="row">
          {portfolios.map(portfolio =>(
            <div key={portfolio._id} className="col-md-4">
              <Link
                href={`/portfolios/[id]`}
                as={`/portfolios/${portfolio._id}`}>
                <a className='card-link'><PortfolioCard portfolio={portfolio} /></a>
              </Link>
              <button
              className="btn btn-warning"
              onClick={() => updatePortfolio(portfolio._id)}>
              update portfolio</button>
              <button
              onClick={() =>deletePortfolio(portfolio._id)}
              className="btn btn-danger"
              >
              delete portfolio
              </button>
            </div>
          ))}

        </div>
      </section>
    </>
    )
}
// Portfolios.getInitialProps = async () =>{
//   const portfolios = await fetchPortfolios()
//   return {
//     data: {portfolios}
//   }
// }

export default withApollo(Portfolios)
