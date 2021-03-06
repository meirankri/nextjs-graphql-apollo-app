import axios from 'axios';
const fetchPortfolioById = (id) => {
  const query = `
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
    }`;
    const variables = {id}
  return axios.post('http://localhost:3000/graphql', { query,variables })
    .then(({data: graph}) => graph.data)
    .then(data => data.portfolio)
}
const PortfolioDetail = ({portfolio}) => {

  return (
    <div className="portfolio-detail">
  <div className="container">

    <div className="jumbotron">
      <h1 className="display-3"></h1>
      <p className="lead"> {portfolio.title} </p>
      <p>
        <a className="btn btn-lg btn-success" href={portfolio.companyWebsite} role="button">
        {portfolio.jobTitle}</a>
        </p>
    </div>

    <div className="row marketing">
      <div className="col-lg-6">
        <h4 className="title"> Location </h4>
        <p className="text"> {portfolio.location} </p>

        <h4 className="title"> Start date </h4>
        <p className="text">{portfolio.startDate}</p>
      </div>

      <div className="col-lg-6">
        {/* TODO: days later... */}
        <h4 className="title">Days</h4>
        <p className="text">44</p>

        <h4 className="title">End Date</h4>
        <p className="text"> {portfolio.endDate} </p>
      </div>
      <div className="col-md-12">
        <hr />
        <h4 className="title">Description</h4>
          <p>{portfolio.description} </p>
        </div>
    </div>
  </div>
</div>
  )
}

PortfolioDetail.getInitialProps = async ({query}) => {
  const portfolio = await fetchPortfolioById(query.id)
  return {portfolio};
}



export default PortfolioDetail;
