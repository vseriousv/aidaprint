import React, {Component} from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'

import './PrintsAdvantageCardBlocks.less'

const PrintsAdvantageCardBlocks =()=> {
  const router = useRouter()
  const { name } = router.query

  const printsadvantagecardblockQuery = gql`
  query printsadvantagecardblock{
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
  return(
    <Query query={printsadvantagecardblockQuery}>
         {({loading, error, data }) => {
            if (error) return `Error! ${error.message}`;
            if (loading) return <div>Loading</div>
            if (data.printsadvantagecardblock != null){
            return (
              <div className="container BlockTwoBussinessCard">
                <div className="position-absolute textHeaderInBlockTwoBussinessCard">
                    <h3>{data.printsadvantagecardblock.title}</h3>
                </div>
                <div className="row">
                    <div id="imageBlock_QVG_1" className="col heightblock mx-1 my-3 imageBlock-QVG">
                        <div className="yellowBlock BlockHover"></div>
                        <img src={'/static/images/PrintsAdvantageCardBlocks/'+data.printsadvantagecardblock.cart_1_img+'.png'} />
                        <h3>{data.printsadvantagecardblock.cart_1_header}<span className="blockSpanRed">.</span></h3>
                        <p>{data.printsadvantagecardblock.cart_1_text}</p>
                    </div>
                    <div id="imageBlock_QVG_2" className="col heightblock mx-1 my-3 imageBlock-QVG">
                        <div className="greenBlock BlockHover"></div>
                        <img src={'/static/images/PrintsAdvantageCardBlocks/'+data.printsadvantagecardblock.cart_2_img+'.png'} />
                        <h3>{data.printsadvantagecardblock.cart_2_header}<span className="blockSpanRed">.</span></h3>
                        <p>{data.printsadvantagecardblock.cart_2_text}</p>
                    </div>
                    <div id="imageBlock_QVG_3" className="col  heightblock mx-1 my-3 imageBlock-QVG">
                        <div className="filBlock BlockHover"></div>
                        <img src={'/static/images/PrintsAdvantageCardBlocks/'+data.printsadvantagecardblock.cart_3_img+'.png'} />
                        <h3>{data.printsadvantagecardblock.cart_3_header}<span className="blockSpanRed">.</span></h3>
                        <p>{data.printsadvantagecardblock.cart_3_text}</p>
                    </div>
                </div>
            </div>
            )
          }else{
             return <div className="text-center my-4 text-uppercase">This is component on construction</div>
          }}}
    </Query>
  );
}

export default PrintsAdvantageCardBlocks;
