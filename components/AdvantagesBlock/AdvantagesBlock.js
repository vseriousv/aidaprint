import React, {Component} from 'react';
import Link                     from 'next/link'
import { Query }                from 'react-apollo'
import gql                      from 'graphql-tag'
import { Container, Row, Col, Carousel }  from 'react-bootstrap'

import './AdvantagesBlock.less';

export const advantagesQuery = gql`
query componentAdvantage{
 	componentAdvantage(id: "5d3ebd9ff9eb3c8afaada18e"){
    images
    title
    item1
    item11
    item111
    item2
    item22
    item222
    item3
    item33
    item333
    item4
    item44
    item444
  }
}
`

export default class AdvantagesBlock extends Component{
  render() {
    return(

      <Query query={advantagesQuery} >
      {({loading, error, data}) => {
         if (error) return `Error! ${error.message}`;
         if (loading) return <div>Loading</div>
          return (
      <div>
        <div className="container-fluid BlockAdvantageComponent">
            <div className="container">
              <div className="row">
                  <div className="col-xl-5 col-lg-5 col-lmd-5 col-sm-5 col-12 d-none d-lg-block">
                      <img className="imagesAdvantage" src="/static/images/AdvantagesBlock/imgAdvantage.png" />
                  </div>

        <div className="d-lg-none gridBlock4">
          <div className="itemBlocAdvan">
              <div className="">
                  <h2 className="specialFontAdvan text-center">100%</h2>
              </div>
              <div className="">
                  <p className="specialFontAdvanP text-center">Возврат перечисленных средств, если<br />качество не будет соответствовать<br />заявленому</p>
              </div>
          </div>
          <div className="itemBlocAdvan">
              <div className="">
                  <h2 className="specialFontAdvan text-center">0₽</h2>
              </div>
              <div className="">
                  <p className="specialFontAdvanP text-center">Стоимость доставки, "по пути" или при<br />заказе свыше 3000₽</p>
              </div>
          </div>
          <div className="itemBlocAdvan">
              <div className="">
                  <h2 className="specialFontAdvan text-center">15<small>минут</small></h2>
              </div>
              <div className="">
                  <p className="specialFontAdvanP text-center">Минимальный срок изготовления тиража,<br />например визиток, листовок, плакатов,<br />футболок или фотографий</p>
              </div>
          </div>
          <div className="itemBlocAdvan">
              <div className="">
                  <h2 className="specialFontAdvan text-center">85+</h2>
              </div>
              <div className="">
                  <p className="specialFontAdvanP text-center">Более 85 видов полиграфической и<br />сувенирной продукции</p>
              </div>
          </div>
                  </div>

                  <div className="col-xl-7 col-lg-7 d-none d-lg-block">
                      <div className="container-fluid">
                          <div className="row mt-4 d-none d-lg-block">
                              <div className="col">
                                  <h2 className="mt-4 font-weight-bold">АЙ ДА ТИПОГРАФИЯ —<br />AIDA PRINT</h2>
                              </div>
                          </div>
                          <div className="row my-3">
                              <div className="col-4">
                                  <h2 className="specialFontAdvan">100%</h2>
                              </div>
                              <div className="col-8">
                                  <p className="specialFontAdvanP">Возврат перечисленных средств, если<br />качество не будет соответствовать<br />заявленому</p>
                              </div>
                          </div>
                          <div className="row my-3">
                              <div className="col-4">
                                  <h2 className="specialFontAdvan">0₽</h2>
                              </div>
                              <div className="col-8">
                                  <p className="specialFontAdvanP">Стоимость доставки, "по пути" или при<br />заказе свыше 3000₽</p>
                              </div>
                          </div>
                          <div className="row my-3">
                              <div className="col-4">
                                  <h2 className="specialFontAdvan">15<small>минут</small></h2>
                              </div>
                              <div className="col-8">
                                  <p className="specialFontAdvanP">Минимальный срок изготовления тиража,<br />например визиток, листовок, плакатов,<br />футболок или фотографий</p>
                              </div>
                          </div>
                          <div className="row my-3">
                              <div className="col-4">
                                  <h2 className="specialFontAdvan">85+</h2>
                              </div>
                              <div className="col-8">
                                  <p className="specialFontAdvanP">Более 85 видов полиграфической и<br />сувенирной продукции</p>
                              </div>
                          </div>
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
