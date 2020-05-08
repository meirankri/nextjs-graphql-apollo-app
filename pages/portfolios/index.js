import axios from 'axios';
import {
  useGetPortfolio,
  useUpdatePortfolio,
  useDeletePortfolio,
  useCreatePortfolio } from '@/apollo/actions';
import PortfolioCard from "@/components/portfolios/portfolioCard.js"
import Link from 'next/link';
import withApollo from '@/hoc/withApollo';
import { getDataFromTree } from '@apollo/react-ssr';


const Portfolios = () =>{

const {data} = useGetPortfolio()
const [updatePortfolio] = useUpdatePortfolio()
const [deletePortfolio] = useDeletePortfolio()
const [createPortfolio] = useCreatePortfolio()


  const portfolios = data && data.portfolios || [];
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
              onClick={() => updatePortfolio({variables: {id: portfolio._id}})}>
              update portfolio</button>
              <button
              onClick={() =>deletePortfolio({variables: {id: portfolio._id}})}
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

export default withApollo(Portfolios, { getDataFromTree })
