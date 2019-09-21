import React, {Component} from 'react';

import './AboutWeWorking.less';

export default class AboutWeWorking extends Component{
  render() {
    return(
        <div className="we_working mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-block">
                        <div className="headline  d-flex px-3 pb-4 align-items-center justify-content-center w-100">
                            <div className="px-2 w-25">
                                <hr />
                            </div>
                            <div className="px-4">
                                <h2 className="h_18_app myblack p-0 m-0 text-center">КАК РАБОТАЕТ AIDAPRINT</h2>
                            </div>
                            <div className="px-2 w-25">
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box_work">
                <div className="container">
                    <div className="row">
                        <div className="col-4 px-1 px-sm-3">
                            <div className="work advantages_1 d-flex px-4 py-4 py-md-5 w-100 h-25 justify-content-center align-items-center">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg" alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">У вас есть готовый макет</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">У вас есть готовый макет</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">У вас есть готовый макет</p>
                            </div>
                            <div className="work color1_1 d-flex px-4 py-4 py-md-5  w-100 h-25 justify-content-center align-items-center">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg"  alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Загружаете макет</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Загружаете макет</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Загружаете макет</p>
                            </div>
                            <div className="work color1_2 d-flex px-4 py-4 py-md-5  w-100 h-25 justify-content-center align-items-center">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg"  alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Оплачиваете</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Оплачиваете</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Оплачиваете</p>
                            </div>
                            <div className="work myorange d-flex px-4 py-4 py-md-5  w-100 h-25 justify-content-center align-items-center">
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Получаете готовый тираж</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Получаете готовый тираж</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Получаете готовый тираж</p>
                            </div>
                        </div>
                        <div className="col-4 px-1 px-sm-3">
                            <div className="work advantages_2 d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg"  alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Макета нет, нравится готовый вариант на сайте</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Макета нет, нравится готовый вариант на сайте</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Макета нет, нравится готовый вариант на сайте</p>
                            </div>
                            <div className="work color2_1 d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg"  alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Выбираете дизайн</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Выбираете дизайн</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Выбираете дизайн</p>
                            </div>
                            <div className="work color2_2 d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg"  alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Загружаете информацию для макета</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Загружаете информацию для макета</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Загружаете информацию для макета</p>
                            </div>
                            <div className="work color2_3 d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg" alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Оплачиваете</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Оплачиваете</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Оплачиваете</p>
                            </div>
                            <div className="work color2_4 d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg"  alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Согласовываете готовый дизайн с внесенной информацией</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Согласовываете готовый дизайн с внесенной информацией</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Согласовываете готовый дизайн с внесенной информацией</p>
                            </div>
                            <div className="work mylight_blue d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center">
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Получаете готовый тираж</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Получаете готовый тираж</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Получаете готовый тираж</p>
                            </div>
                        </div>
                        <div className="col-4 px-1 px-sm-3">
                            <div className="work advantages_3 d-flex px-4 py-4 py-md-5  w-100  justify-content-center align-items-center height20prcent">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg" alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Макета нет, нужен оригинальный дизайн</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Макета нет, нужен оригинальный дизайн</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Макета нет, нужен оригинальный дизайн</p>
                            </div>
                            <div className="work color3_1 d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center height20prcent">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg" alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Заполняете бриф</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Заполняете бриф</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Заполняете бриф</p>
                            </div>
                            <div className="work color3_2 d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center height20prcent">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg" alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Оплачиваете</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Оплачиваете</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Оплачиваете</p>
                            </div>
                            <div className="work color3_3 d-flex px-4 py-4 py-md-5 w-100 justify-content-center align-items-center height20prcent">
                                <div className="arrow">
                                    <img src="/static/images/otherimage/arrow.svg" alt="Ниже" />
                                </div>
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Согласовываете готовый дизайн </p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Согласовываете готовый дизайн </p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Согласовываете готовый дизайн</p>
                            </div>
                            <div className="work myviolet d-flex px-4 py-4 py-md-5  w-100 justify-content-center align-items-center height20prcent">
                                <p className="h_18 myblack m-0 text-center d-none d-md-flex">Получаете готовый тираж</p>
                                <p className="h_14 myblack m-0 text-center d-none d-sm-flex d-md-none">Получаете готовый тираж</p>
                                <p className="h_11 myblack m-0 text-center d-sm-none">Получаете готовый тираж</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>	
        </div>
    );
  }
}