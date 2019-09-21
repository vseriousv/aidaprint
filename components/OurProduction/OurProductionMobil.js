import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'
import gql from 'graphql-tag'
import { Container, Row, Col, Carousel }  from 'react-bootstrap'
import Link from 'next/link';

import './OurProduction.less';

export const OPSECTION_QUERY = gql`
query OPSECTION_QUERY{
  opsection{
    id
    section_id
    name
    text
    classNameActive
    valueCart{
      img
      hCart
      pText
    }
    className
  }
}
`
export default function OurProductionDesktop () {

  const handleRightClick = (event) => {
      event.preventDefault();
      var elementClick = document.getElementById(event.target.id);
      var number = elementClick.getAttribute('data-ident');
      var itemid = elementClick.getAttribute('data-itemid');
      var elementActionThis = document.getElementById(itemid+number);
      if(+number == 10){var numberNext = 1}else{            var numberNext = +number+1;        }
      var elementActionNext = document.getElementById(itemid+numberNext);
      elementActionThis.classList.add("d-none");
      elementActionNext.classList.remove("d-none");
    }
  const handleLeftClick = (event) => {
      event.preventDefault();
      var elementClick = document.getElementById(event.target.id);
      var number = elementClick.getAttribute('data-ident');
      var itemid = elementClick.getAttribute('data-itemid');
      var elementActionThis = document.getElementById(itemid+number);
      if(+number == 1){var numberNext = 10}else{            var numberNext = +number-1;        }
      var elementActionNext = document.getElementById(itemid+numberNext);
      elementActionThis.classList.add("d-none");
      elementActionNext.classList.remove("d-none");
  }

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    OPSECTION_QUERY,
    {
      notifyOnNetworkStatusChange: true
    }
  )

  if (error) return <div>ERROR</div>
  if (loading) return <div>Loading</div>

  const { opsection } = data

  return (
    <div className="container-fluid BlockChooseProductComponent d-lg-none mobilView mt-5">
    {/*Блок под карточками в котором отображается то какая карточка выбрана*/}
    <div className="container RenderProductionCartID mb-4">
        <div className="w-100 position-relative">
        {data.opsection.map(i => {
                    return (
        <div key={i.section_id} id={"screencartMobilProduct"+i.section_id} className={"w-100 renderTransition screencartProductElement position-absolute "+i.className}>
            {/*---------*/}
            <div className="container">
                <div className="row">
                    <div className="col-xl-2"></div>
                    <div className="col-xl-2 col-lg-3 col-md-0 col-0"><hr className="hrLine justify-content-center"/></div>
                    <div className="d-lg-none d-flex col-2 justify-content-start heightNavigationCart">
                        <a  href="#"  onClick={handleLeftClick} >
                            <img id={"leftSliderBTN"+i.section_id} data-ident={i.section_id} data-itemid="screencartMobilProduct" className="leftSliderBTN SliderBTNClick" src="/static/images/OurProduction/leftSliderBTN.png"/>
                        </a>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-8 col-8 my-auto">
                        <h6 className="text-uppercase text-center font-weight-bold my-auto textNavigationCart">
                            {i.name}
                        </h6>
                    </div>
                    <div className="d-lg-none d-flex col-2 justify-content-end heightNavigationCart">
                        <a  href="#"  onClick={handleRightClick} >
                            <img id={"rightSliderBTN"+i.section_id} data-ident={i.section_id} data-itemid="screencartMobilProduct" className=" rightSliderBTN SliderBTNClick" src="/static/images/OurProduction/rightSliderBTN.png" />
                        </a>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-0 col-0"><hr className="hrLine justify-content-center"/></div>
                    <div className="col-xl-2"></div>
                </div>
    {/* отображение самой карточки */}
               <div className="row mt-3 d-none d-sm-flex">
               {i.valueCart.map((item, index) => {
                 return(
                   <div key={index} className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 px-1">
                      <img src={"/static/images/OurProduction/"+item.img+".jpg"} className="img-fluid" />
                      <h6 className="text-uppercase text-center font-weight-bold my-3 small">{item.hCart} <small>{item.pText}₽</small></h6>
                       <div className="BTN-cart">
                           <h6>Заказать</h6>
                           <div className={"BGR-BTN-cart BGR-BTN-cart1"}></div>
                       </div>
                   </div>
                 );
               })}
                </div>
                <div className="row mt-3 d-flex d-sm-none">
                {i.valueCart.map((itemMobil,index) => {
                  if(index == 0){
                  return(
                    <div key={index} className="col-12 px-1 justify-content-center imgCartProduct">
                       <img src={"/static/images/OurProduction/"+itemMobil.img+".jpg"} className="img-fluid" />
                       <h6 className="text-uppercase text-center font-weight-bold my-3 small">{itemMobil.hCart} <small>{itemMobil.pText}₽</small></h6>
                        <div className="BTN-cart">
                            <h6>Заказать</h6>
                            <div className={"BGR-BTN-cart BGR-BTN-cart1"}></div>
                        </div>
                    </div>
                  );
                }
                })}
                </div>
    {/*Конец отображения самой карточки */}
            </div>
            {/*---------*/}
        </div>
      );
                })}
        </div>
    </div>
    {/*Блок под карточками в котором отображается то какая карточка выбрана ЗАКРЫТ*/}
    </div>
  ) 
}
