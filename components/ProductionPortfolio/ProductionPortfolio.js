import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'

import './ProductionPortfolio.less'

const PrintsPreviewBlock =()=> {
  const router = useRouter()
  const { name } = router.query

  const printsadvantagecardblockQuery = gql`
   query productionportfoliocart{
     productionportfoliocart(url: "/prints/${ name }"){
   		id
       img
       header
       text
       url
     }
   }
 `
  return(
    <Query query={printsadvantagecardblockQuery}>
         {({loading, error, data }) => {
            if (error) return `Error! ${error.message}`;
            if (loading) return <div>Loading</div>
            if (data.productionportfoliocart != null){
            return (
              <div className="container BlockPortfolioBussinessCard">
              <div className="row">
                {data.productionportfoliocart.map((item, index) => {
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
         }}
    </Query>
  )
}
export default PrintsPreviewBlock;
