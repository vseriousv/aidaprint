import React, {Component} from 'react';
import Link                     from 'next/link'
import { Query }                from 'react-apollo'
import gql                      from 'graphql-tag'
import { Container, Row, Col, Carousel }  from 'react-bootstrap'

import './Whatsnews.less';

export const newsQuery = gql`
query news{
  news{
    id
    title
    description
  }
}
`

export default class Whatsnews extends Component{
  render() {
    return(
      <Query query={newsQuery}>
       {({loading, error, data}) => {
          if (error) return `Error! ${error.message}`;
          if (loading) return <div>Loading</div>
          return (
              <div className="container-fluid WhatNewBlockComponent mt-4">
                <div className="container RenderProductionCartID mb-4">
                  <div className="w-100 position-relative">
                    <div className={"w-100 renderTransition screencartProductElement position-absolute"}>
                      <div className="container">
                          <div className="row">
                              <div className="col-xl-3"></div>
                              <div className="col-xl-2 col-lg-3 col-md-0 col-0"><hr className="hrLine justify-content-center"/></div>
                              <div className="col-xl-2 col-lg-6 col-md-12 col-12 my-auto"><h6 className="text-uppercase text-center font-weight-bold my-auto color-black ">Что нового?</h6></div>
                              <div className="col-xl-2 col-lg-3 col-md-0 col-0"><hr className="hrLine justify-content-center"/></div>
                              <div className="col-xl-3"></div>
                          </div>
                          <div className="row mt-3">
                          {/* отображение самой карточки */}
                          {data.news.map((item, index) => {
                            if(index == 0){
                            return (
                              <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-sm-block px-1 imageNewsBlock">
                                <img src={"/static/images/newsImgPreview/"+item.id+".jpg"} className="img-fluid" />
                                <h6 className="text-uppercase text-center font-weight-bold my-3 small color-black">{item.title}</h6>
                                <p className="min-height-P text-overflow-ellipsis text-sm-left text-center"><small className="">{item.description}</small></p>
                                <div className="BTN-cart">
                                  <h6>Подробнее</h6>
                                  <div className={"BGR-BTN-cart BGR-BTN-cart1"}></div>
                                </div>
                              </div>
                            );
                          }else{
                            return (
                              <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 d-sm-block d-none px-1 imageNewsBlock">
                                <img src={"/static/images/newsImgPreview/"+item.id+".jpg"} className="img-fluid" />
                                <h6 className="text-uppercase text-center font-weight-bold my-3 small color-black">{item.title}</h6>
                                <p className="min-height-P text-overflow-ellipsis text-sm-left text-center"><small className="">{item.description}</small></p>
                                <div className="BTN-cart">
                                  <h6>Подробнее</h6>
                                  <div className={"BGR-BTN-cart BGR-BTN-cart1"}></div>
                                </div>
                              </div>
                            );
                          }
                          }
                          )}
                          {/*Закрыто отображение самой карточки*/}
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
          );
        }}
      </Query>
    );
  }
}
