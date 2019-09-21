import {Component} from 'react';

export default class DelAndPay_Pay extends Component{
  render() {
    return(
      <>
        <div className="container mt-4 mb-2">
          <div className="row">
            <div className="col-12 d-block">
              <div className="headline d-flex px-3 pb-4 align-items-center justify-content-center w-100">
                <div className="px-2 w-25">
                  <hr />
                </div>
                <div className="px-2 px-sm-4 text-center">
                  <h2 className="h_18_app myblack p-0 m-0">Оплата</h2>
                </div>
                <div className="px-2 w-25">
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="payment container mb-5">
          <div className="row">
            <div className="col-6 mb-sm-5 mb-4 payment_box">
              <img src="/static/images/otherimage/rubl.svg" alt="" />
              <p className="m-0">Оплата по договору через банк от организации. <br />Комиссия 5%</p>
            </div>
            <div className="col-6 mb-sm-5 mb-4 payment_box">
              <img src="/static/images/otherimage/rbk.svg" alt="" />
              <p className="m-0">Оплата через платежные системы Яндекс Деньги, RBK money. <br />Комиссия 0%</p>
            </div>
            <div className="col-6 mb-sm-5 mb-4 payment_box">
              <img src="/static/images/otherimage/sberbank.svg" alt="" />
              <p className="m-0">Оплата через Сбербанк онлайн (подробности у менеджеров или через онлайн-консультанта). <br />Комиссия 0%</p>
            </div>
            <div className="col-6 mb-sm-5 mb-4 payment_box">
              <img src="/static/images/otherimage/2000rub.svg" alt="" />
              <p className="m-0">Оплата (предоплата) наличными в офисе компании по адресу: г.Новосибирск, пр. Димитрова, 18. <br />Комиссия 0%</p>
            </div>
            <div className="col-6 offset-3 p-0 payment_box">
              <img src="/static/images/otherimage/visa.svg" alt="" />
              <p className="m-0">Мы принимаем карты платежных систем Mastercard, VISA, МИР. Оплпта через интернет-экваринг, либо в офисе компании через терминал. <br />Комиссия 0%</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}