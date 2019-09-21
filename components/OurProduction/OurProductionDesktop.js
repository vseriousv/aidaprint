import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

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

  const handleClickOnLink = (event) => {
    event.preventDefault();
    /* переменным elementID присваиваем id+block элемента по которому кликнули и
    screenElementID присваиваем screen+id элемента по которому кликнули*/
    var elementID = document.getElementById(event.target.id+"block");
    var screenElementID = document.getElementById("screen"+event.target.id);
    /*нахожу все элементы с классом "cartProduct"*/
    var searchElements = document.getElementsByClassName("cartProduct");
    /*задаю цикл внутри которого буду удалять класс "cartProductActive" у всех элементов
    с ID "cartProduct"+id+"block", и добавляю класс всем "d-none" всем элементам с ID
    "screencartProduct"+i*/
    for (var i=1;i<searchElements.length+1;++i){
        var elementRemoveClass = document.getElementById("cartProduct"+i+"block");
        var screenelemDis = document.getElementById("screencartProduct"+i);
        /*проверка присутсвия класса  "cartProductActive" и условие того что
         этот элемент в цикле не совпадает по ID с кликнутым элементом*/
        if(elementRemoveClass.classList.contains("cartProductActive")){
        elementRemoveClass.classList.remove("cartProductActive");
        screenelemDis.classList.add("d-none");}
    }
     /* удаляем или присваиваем класс в зависимости от его присутсвия в элементах с ID со
     значениями переменных*/
    elementID.classList.toggle("cartProductActive");
    screenElementID.classList.toggle("d-none");
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
    <div className="container-fluid BlockChooseProductComponent d-none d-lg-block desktopView">
      {/*Блок с карточками выбора продукции открыт*/}
      <div className="container my-5">
          <div className="rowCartProduct my-2">
          {opsection.map(i => {
              return (
                    <div key={i.section_id} id={"cartProduct"+i.section_id+"block"} className={"h-100 cartProduct cartProduct"+i.section_id+" "+i.classNameActive}>
                        <div className="cartIcon position-absolute w-100"><h1 className="aidaFontProduct text-center w-100">{i.text}</h1></div>
                        <div className="cartText position-absolute w-100"><h3 className="text-center w-100 aidaText ">{i.name}</h3></div>
                        <div id={"cartProduct"+i.section_id} onClick={handleClickOnLink} className="cartBGR"></div>
                    </div>
                );
          })}
          </div>
      </div>
      {/*Блок с карточками выбора продукции ЗАКРЫТ*/}
      {/*-----------------------------------------*/}
{/*Блок под карточками в котором отображается то какая карточка выбрана*/}
<div className="container RenderProductionCartID mb-4">
<div className="w-100 position-relative">
{data.opsection.map(i => {
        return (
          <div key={i.section_id} id={"screencartProduct"+i.section_id} className={"w-100 renderTransition screencartProductElement position-absolute "+i.className}>
<div className="container">
<div className="row">
    <div className="col-xl-2"></div>
    <div className="col-xl-2 col-lg-3 col-md-0 col-0"><hr className="hrLine justify-content-center"/></div>
    <div className="col-xl-4 col-lg-6 col-md-12 col-12 my-auto"><h6 className="text-uppercase text-center font-weight-bold my-auto">{i.name}</h6></div>
    <div className="col-xl-2 col-lg-3 col-md-0 col-0"><hr className="hrLine justify-content-center"/></div>
    <div className="col-xl-2"></div>
</div>
{/* отображение самой карточки */}
<div className="row mt-3">
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
{/*Конец отображения самой карточки */}
</div>
</div>
    )
})}
</div>
</div>
{/*Блок под карточками в котором отображается то какая карточка выбрана ЗАКРЫТ*/}
    </div>
  ) 
}
