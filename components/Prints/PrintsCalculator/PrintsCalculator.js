import React from 'react';
import PrintsCalcChrome from './PrintsCalcChrome';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {  bussnessCart_countTirageIncrement,
          bussnessCart_countTirageDecriment,
          bussnessCart_chooseSize,
          bussnessCart_chooseCurnerCutting,
          bussnessCart_priceCalc
        } from '../../../store'

import './PrintsCalculator.less'

class PrintsCalculator extends React.Component {

  pricePayment(){
    const {
      bussnessCart_count_calc_tirage,
      bussnessCart_choose_size,
      bussnessCart_choose_curner_cutting,
      bussnessCart_choose_peper,
      bussnessCart_color_chrome,
      bussnessCart_price_calc
    } = this.props
    var quantity_on_list;
    var peperPrice;
    var EURO_COURSE = 71.25; // КУРС ЕВРО
    var DOLLAR_COURSE = 64.35; // КУРС ДОЛЛАРА
    var PERCENT_COMPANY = 1.6 // НАЦЕНКА КОМПАНИИ 60%
    //ВВОД ПАРАМЕТРОВ -----------------------------------------------
    var edition = bussnessCart_count_calc_tirage; //ТИРАЖ
    var size = bussnessCart_choose_size; //Размер 1 - 90x50; 2 - 85x55
    var corner_cuttin = bussnessCart_choose_curner_cutting; //С закругленными краями или нет
    /*Вид бумаги: 1 - мелованная бумага 300г/м2;
                  2 - Бумага с тиснением 300г/м2;
                  3 - Бумага металлизированная 300г/м2;
                  4 - toch cover 300u/м2; */
    var peper = bussnessCart_choose_peper;
    var color_chrome = bussnessCart_color_chrome; //Цветность: 4 - 4х0; 8 - 4х4
    //ВВОД ПАРАМЕТРОВ -----------------------------------------------
    //Условия стоимости бумаги
          if(peper == 1){peperPrice = 0.45*0.32*(300/1000)*1.3*EURO_COURSE*PERCENT_COMPANY}
    else  if(peper == 2){peperPrice = 0.27*EURO_COURSE*1.15}
    else  if(peper == 3){peperPrice = 0.55*EURO_COURSE*1.15}
    else  if(peper == 4){peperPrice = 1.02*DOLLAR_COURSE*1.15}

    //Условие определения количества экземпляров с одного листа
    if( size == "2"){           quantity_on_list = 20;//штук на листе
    }else{  if(peper = "1"){  quantity_on_list = 24;//штук на листе
        }else{                quantity_on_list = 25;//штук на листе
    }}
    //расчет количества листов бумаги с округлением до целого числа в большую сторону
    var quantity_peper = Math.ceil((edition / quantity_on_list));
    //расчет стоимости затрат на бумагу
    var price_quantity_peper = (quantity_peper * peperPrice).toFixed(2);//округлил до сотых
    //Стоимость затрат на резку визиток
    //Стоимость реза от тиража умножаем на коэф = 11 для визиток и количество листов А3
    var price_cut_list = (2.4 * Math.pow(edition, -0.354) * 11 * quantity_peper).toFixed(2);//округлил до сотых
    //Стоимость трудозатрат на резку углов
    if (corner_cuttin == "true"){ var price_corner_cutting = (edition*4*0.3).toFixed(2);}
    else{               var price_corner_cutting = 0;}
    //Стоимость за покраску 4+0 или 4+4
    var price_color_chrome = (((45 * Math.pow(color_chrome, -0.2)-(8.5/color_chrome)-8.5)/1+(0.107*EURO_COURSE)*1.45)*quantity_peper).toFixed(2);
    console.log("Стоимость за краску = "+price_color_chrome+" руб.");
    //СТОИМОСТЬ ЗА ВИЗИТКИ
    var total_price = (Number(price_quantity_peper) + Number(price_cut_list) + Number(price_corner_cutting) + Number(price_color_chrome)).toFixed(0);
    this.props.bussnessCart_priceCalc(total_price);
  }

    handleClickChooseCart(e){
        var getElementIDChoose = document.getElementById("Parent"+e.target.id);
        var getElementIClassChooseCart = document.getElementsByClassName("chooseCart");
        for (var i=1;i<getElementIClassChooseCart.length+1;++i){
            var statusElementChooseID = document.getElementById("ParentchooseCartID"+i);
            statusElementChooseID.classList.remove("activeChooseCart");
        }
        getElementIDChoose.classList.add("activeChooseCart");
    }
    handleClickChooseMaterial(e){
        e.preventDefault()
        var getElementIDChoose = document.getElementById("Parent"+e.target.id);
        var getElementIClassChooseCart = document.getElementsByClassName("chooseMaterial");
        for (var i=1;i<getElementIClassChooseCart.length+1;++i){
            var statusElementChooseID = document.getElementById("ParentchooseMaterialID"+i);
            statusElementChooseID.classList.remove("activeChooseMaterial");
        }
        getElementIDChoose.classList.add("activeChooseMaterial");
    }

    bussnessCart_color_choose_size_cutting = (e) => {

      var getElementIDChooseCLICK = document.getElementById(e.target.id);
      var getElementDATA_SIZE =  getElementIDChooseCLICK.getAttribute("data-size");
      var getElementDATA_CURNER =  getElementIDChooseCLICK.getAttribute("data-curner");
        this.props.bussnessCart_chooseSize(getElementDATA_SIZE);
        this.props.bussnessCart_chooseCurnerCutting(getElementDATA_CURNER);
        this.handleClickChooseCart(e);
    }
    bussnessCart_color_tirage_increment = () => {
      const { bussnessCart_countTirageIncrement } = this.props
      bussnessCart_countTirageIncrement()
    }

    bussnessCart_color_tirage_decrement = () => {
      const { bussnessCart_count_calc_tirage, bussnessCart_countTirageDecriment } = this.props
      if(bussnessCart_count_calc_tirage != 50){
        bussnessCart_countTirageDecriment()
      }
    }

    render(){
      const { bussnessCart_count_calc_tirage,
              bussnessCart_choose_size,
              bussnessCart_choose_curner_cutting,
              bussnessCart_choose_peper,
              bussnessCart_color_chrome,
              bussnessCart_price_calc } = this.props
        return(
        <div className="container-fluid BlockThreeBussinessCard">
            <div className="container pt-5">
               <h4 className="text-uppercase font-weight-bold">Калькулятор визиток</h4>
               <div className="calculator">
                   <div className="rowOneCalculator">
                       <div className="tiragTag">
                            <h5>ТИРАЖ</h5>
                            <input id="colorback" className="tiragTagLeft cursor-pointer" type="text" defaultValue="<" readOnly={true} onClick={this.bussnessCart_color_tirage_decrement} />
                            <input className="tiragTagEnter" name="tirage" type="text" defaultValue={bussnessCart_count_calc_tirage} readOnly={true}/>
                            <input className="tiragTagEnter" type="text" defaultValue="ЭКЗ." readOnly={true} />
                            <input id="colorback" className="tiragTagRight cursor-pointer" type="text" defaultValue=">" readOnly={true} onClick={this.bussnessCart_color_tirage_increment} />
                       </div>
                       <div className="tiragTag">
                            <h5>ЦВЕТНОСТЬ
                              <div className="helpQuestBtn">
                                <img className="img-fluir" src="/static/images/helpQuest.png" />
                                <div className="helpQuestBlock">
                                    <small>4+0 - означает, что полноцветное изображение только с одной стороны, 4+4 - полноцвет с двух сторон.</small>
                                </div>
                              </div>
                            </h5>
                            <PrintsCalcChrome />
                       </div>
                   </div>
                   <div className="rowTwoCalculator">
                    <h4 className="text-uppercase font-weight-bold text-center">размер, форма</h4>
                    <div className="row">
                        <div id="ParentchooseCartID1" className="col chooseCart chooseCartID1 activeChooseCart"><div id="chooseCartID1" data-size="1" data-curner="false" onClick={(e) => this.bussnessCart_color_choose_size_cutting(e)} className="fullGround"></div><small>90x50 мм, Прямые углы</small><span>.</span></div>
                        <div id="ParentchooseCartID2" className="col chooseCart chooseCartID2">                 <div id="chooseCartID2" data-size="2" data-curner="false" onClick={(e) => this.bussnessCart_color_choose_size_cutting(e)} className="fullGround"></div><small>85x55 мм, Прямые углы</small><span>.</span></div>
                        <div id="ParentchooseCartID3" className="col chooseCart chooseCartID3">                 <div id="chooseCartID3" data-size="1" data-curner="true"  onClick={(e) => this.bussnessCart_color_choose_size_cutting(e)} className="fullGround"></div><small>90x50 мм, Скругленные углы</small><span>.</span></div>
                        <div id="ParentchooseCartID4" className="col chooseCart chooseCartID4">                 <div id="chooseCartID4" data-size="2" data-curner="true"  onClick={(e) => this.bussnessCart_color_choose_size_cutting(e)} className="fullGround"></div><small>85x55 мм, Скругленные углы</small><span>.</span></div>
                    </div>
                   </div>
                   <div className="rowTwoCalculator">
                    <h4 className="text-uppercase font-weight-bold text-center">материал</h4>
                    <div className="row">
                        <div id="ParentchooseMaterialID1" className="col chooseMaterial chooseMaterialID1 activeChooseMaterial"><div id="chooseMaterialID1" onClick={this.handleClickChooseMaterial} className="fullGround"></div><small>Мелованная бумага 300 г/м2</small><span>.</span></div>
                        <div id="ParentchooseMaterialID2" className="col chooseMaterial chooseMaterialID2"><div id="chooseMaterialID2" onClick={this.handleClickChooseMaterial} className="fullGround"></div><small>Бумага с тиснением 300 г/м2</small><span>.</span></div>
                        <div id="ParentchooseMaterialID3" className="col chooseMaterial chooseMaterialID3"><div id="chooseMaterialID3" onClick={this.handleClickChooseMaterial} className="fullGround"></div><small>Бумага мателлизированная 300г/м2</small><span>.</span></div>
                        <div id="ParentchooseMaterialID4" className="col chooseMaterial chooseMaterialID4"><div id="chooseMaterialID4" onClick={this.handleClickChooseMaterial} className="fullGround"></div><small>Бумага с тиснением 300г/м2</small><span>.</span></div>
                    </div>
                   </div>
                   <div className="rowOneCalculator">
                     <div className="tiragTag">
                          <div className="pricessParent">
                              <div onClick={() => this.pricePayment()} className="float-left button_peyload">Расчитать стоимость:</div>
                              <div className="priceecSumm">{bussnessCart_price_calc}₽</div>
                          </div>
                    </div>
                   </div>
               </div>
            </div>
       </div>
    );
}
}
function mapStateToProps (state) {
  const { bussnessCart_count_calc_tirage,
          bussnessCart_choose_size,
          bussnessCart_choose_curner_cutting,
          bussnessCart_choose_peper,
          bussnessCart_color_chrome,
          bussnessCart_price_calc
         } = state
  return {bussnessCart_count_calc_tirage,
          bussnessCart_choose_size,
          bussnessCart_choose_curner_cutting,
          bussnessCart_choose_peper,
          bussnessCart_color_chrome,
          bussnessCart_price_calc }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    bussnessCart_countTirageIncrement,
    bussnessCart_countTirageDecriment,
    bussnessCart_chooseSize,
    bussnessCart_chooseCurnerCutting,
    bussnessCart_priceCalc
  }, dispatch)

export default connect( mapStateToProps, mapDispatchToProps )(PrintsCalculator)
