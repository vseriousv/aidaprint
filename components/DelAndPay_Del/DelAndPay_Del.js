import {Component} from 'react';

export default class DelAndPay_Del extends Component{
  render() {
    return(
      <>
        <div className="col-12 d-block mt-5 mb-2">
          <div className="headline d-flex px-3 pb-4 align-items-center justify-content-center w-100">
            <div className="px-2 w-25">
              <hr />
            </div>
            <div className="px-2 px-sm-4 text-center">
              <h2 className="h_18_app myblack p-0 m-0">Доставка</h2>
            </div>
            <div className="px-2 w-25">
              <hr />
            </div>
          </div>
        </div>
        <div className="payment container mb-5">
          <div className="row">
            <div className="col-6 mb-sm-5 mb-4 payment_box pochta_img">
              <img src="/static/images/otherimage/pochtarf.svg" alt="" />
              <div className="pochta_rf">
                <p className="mb-2 w-100">Доставка по России Почтой России  (тарифы на доставку)</p>
                <p className="mb-0 w-100">(Отправление первого класса) - 350 руб. (за 500 г., за каждые <br />последующие 100 г + 40 руб.)</p>
              </div>
            </div>
            <div className="col-6 mb-sm-5 mb-4 payment_box pochta_img">
              <img src="/static/images/otherimage/car.svg" alt="" />
              <p className="m-0">При заказе от 3000₽ бесплатная доставка по Новосибирску. При заказе до 3000₽ стоимость доставки по городу 300₽, удаленные районы 600₽</p>
            </div>
            <div className="col-6 offset-3 payment_box pochta_img">
              <img src="/static/images/otherimage/position.svg" alt="" />
              <p className="m-0">Самовывоз из офиса компании по адресу: г.Новосибирск, пр. Димитрова, 18. Бесплатно</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}