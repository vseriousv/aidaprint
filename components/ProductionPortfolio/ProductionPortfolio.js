import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

import './ProductionPortfolio.less'

const PrintsPreviewBlock =()=> {
  const router = useRouter()
  const { name } = router.query

  const PRODUCTION_PORTFOLIO_CART_QUERY= gql`
   query PRODUCTION_PORTFOLIO_CART_QUERY{
     productionportfoliocart(url: "/prints/${ name }"){
   		id
       img
       header
       text
       url
     }
   }
 `
 const { loading, error, data, fetchMore, networkStatus } = useQuery(
  PRODUCTION_PORTFOLIO_CART_QUERY,
  {
    notifyOnNetworkStatusChange: true
  }
)

if (error) return <div>ERROR</div>
if (loading) return <div>Loading</div>

const { productionportfoliocart } = data

if (productionportfoliocart != null){
return (
  <div className="container BlockPortfolioBussinessCard">
  <div className="row">
    {productionportfoliocart.map((item, index) => {
      return(
      <div key={index} className="col-6 my-3">
        <div className={"d-flex justify-content-center bic-toBusCardPage"}>
            <img className="img-fluid" src={"/static/images/productionPortfolio/"+item.img+".png"} />
        </div>
        <div className="ml-5 mt-3 mr-3">
            <h3 className="font-weight-bold">{item.header}</h3>
            <p>{item.text}</p>
        </div>
      </div>

    )})}
    </div>
  </div>
);}else{
  return <div className="text-center my-4 text-uppercase">This is component on construction</div>
}
}
export default PrintsPreviewBlock;
