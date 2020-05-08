import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  GET_PORTFOLIOS,
  CREATE_PORTFOLIO,
  UPDATE_PORTFOLIO,
  DELETE_PORTFOLIO } from '../queries';

export const useGetPortfolio = () => useQuery(GET_PORTFOLIOS)
export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO)


export const useDeletePortfolio = () => useMutation(DELETE_PORTFOLIO,{
  update(cache, {data: {deletePortfolio}}){
    const {portfolios} = cache.readQuery({query : GET_PORTFOLIOS})
    const newPortfolios = portfolios.filter(p=> p._id !== deletePortfolio)
    cache.writeQuery({
      query:GET_PORTFOLIOS,
      data: {portfolios: newPortfolios}
    })
  }
}
  )
export const useCreatePortfolio = () => useMutation(CREATE_PORTFOLIO,{
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
