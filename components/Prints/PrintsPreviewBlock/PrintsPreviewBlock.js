import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import React, {Component} from 'react'
import { useRouter } from 'next/router'

import './PrintsPreviewBlock.less'

export default function Header_leftBlock () {

  const router = useRouter();
  const { name } = router.query;
  
  const PRINTS_PREVIEW_BLOCK_QUERY = gql`
   query PRINTS_PREVIEW_BLOCK_QUERY{
     printspreviewblock(url: "/prints/${ name }"){
       id
       img{
          name
          type
          path
        }
       opsection{
         name
         text
       }
       titlepage
       subtext_1
       subtext_2
       subtext_3
       button_1
       url_btn_1
       button_2
       url_btn_2
     }
   }
 `

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    PRINTS_PREVIEW_BLOCK_QUERY,
    {
      notifyOnNetworkStatusChange: true
    }
  )

  if (error) return <div>ERROR</div>
  if (loading) return <div>Loading</div>

  const { printspreviewblock } = data

  if (printspreviewblock != null){
    return (
    <div className="containter-fluid BlockSliderBussinessCard">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <img className="img-fluid" src={'/static/'+printspreviewblock.img.type+printspreviewblock.img.path+printspreviewblock.img.name} />
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-12 classBGRBluurOpacity">
                <div className="col-12 text-center text-xl-left text-lg-left text-md-left">
                  <div className="row">
                    <div className="aidaFontProductOn font-sizeProductOn col-1">{printspreviewblock.opsection.text}</div>
                    <div className="font-size-3 font-color-product margin-left-product col-10 my-auto font-weight-bold  text-uppercase">
                      {printspreviewblock.opsection.name}</div>
                  </div>
                </div>
                <div className="col-12 text-center text-xl-left text-lg-left text-md-left HeadSlide">
                  <h1>{printspreviewblock.titlepage}</h1>
                  <h1 className="redText">{printspreviewblock.subtext_1} <span>{printspreviewblock.subtext_2}</span></h1></div>
                  <div className="col-12 text-center text-xl-left text-lg-left text-md-left subHeadSlide">
                    <h4><b>{printspreviewblock.subtext_3}</b></h4></div>
                  <div className="col-12 my-auto">
                    <div className="BTNHeadSlide">
                      <h1>{printspreviewblock.button_1}</h1>
                      <div className="BTNBGRSLide"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )}else{
    return <div className="text-center my-4 text-uppercase">This is component on construction</div>
  }
}
