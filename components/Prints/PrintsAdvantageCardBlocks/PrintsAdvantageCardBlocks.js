import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/react-hooks'

import './PrintsAdvantageCardBlocks.less'

const PrintsAdvantageCardBlocks =()=> {
  const router = useRouter()
  const { name } = router.query

  const PRINTS_ADAVANTAGE_CARD_QUERY = gql`
  query PRINTS_ADAVANTAGE_CARD_QUERY{
  	printsadvantagecardblock(url: "/prints/${ name }"){
      id
     	title
      cart_1_img
      cart_1_header
      cart_1_text
      cart_2_img
      cart_2_header
      cart_2_text
      cart_3_img
      cart_3_header
      cart_3_text
      url
    }
  }
 `
    const { loading, error, data, fetchMore, networkStatus } = useQuery(
    PRINTS_ADAVANTAGE_CARD_QUERY,
    {
      notifyOnNetworkStatusChange: true
    }
    )

    if (error) return <div>ERROR</div>
    if (loading) return <div>Loading</div>

    const { printsadvantagecardblock } = data
    if (printsadvantagecardblock != null){
      return (
        <div className="container BlockTwoBussinessCard">
          <div className="position-absolute textHeaderInBlockTwoBussinessCard">
              <h3>{printsadvantagecardblock.title}</h3>
          </div>
          <div className="row">
              <div id="imageBlock_QVG_1" className="col heightblock mx-1 my-3 imageBlock-QVG">
                  <div className="yellowBlock BlockHover"></div>
                  <img src={'/static/images/PrintsAdvantageCardBlocks/'+printsadvantagecardblock.cart_1_img+'.png'} />
                  <h3>{printsadvantagecardblock.cart_1_header}<span className="blockSpanRed">.</span></h3>
                  <p>{printsadvantagecardblock.cart_1_text}</p>
              </div>
              <div id="imageBlock_QVG_2" className="col heightblock mx-1 my-3 imageBlock-QVG">
                  <div className="greenBlock BlockHover"></div>
                  <img src={'/static/images/PrintsAdvantageCardBlocks/'+printsadvantagecardblock.cart_2_img+'.png'} />
                  <h3>{printsadvantagecardblock.cart_2_header}<span className="blockSpanRed">.</span></h3>
                  <p>{printsadvantagecardblock.cart_2_text}</p>
              </div>
              <div id="imageBlock_QVG_3" className="col  heightblock mx-1 my-3 imageBlock-QVG">
                  <div className="filBlock BlockHover"></div>
                  <img src={'/static/images/PrintsAdvantageCardBlocks/'+printsadvantagecardblock.cart_3_img+'.png'} />
                  <h3>{printsadvantagecardblock.cart_3_header}<span className="blockSpanRed">.</span></h3>
                  <p>{printsadvantagecardblock.cart_3_text}</p>
              </div>
          </div>
      </div>
      )
    }else{
       return <div className="text-center my-4 text-uppercase">This is component on construction</div>
    }
}

export default PrintsAdvantageCardBlocks;
