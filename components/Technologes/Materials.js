import React, {Component} from 'react'

import './Technologes.less'

export default class Materials extends Component{

  render() {
      
    return(
        <div className="technologes mx-3">
            <div className="container">
                <div className="row">
                    <div className="titleTechnologes py-3 w-100"><b>Материалы</b></div>
                    <div className="titleDescription py-3"><b>LumiArt, LumiSilk</b></div>
                    <div className="boxTxtTechnologes ">
                        <p>Чистоцеллюлозная бумага (art – глянцевая, silk - матовая) многократного 
                            мелования производства StoraEnso, Финляндия. Обладает великолепными 
                            характеристиками по однородности, белизне и яркости. Используется для 
                            широчайшего спектра листовой полиграфии, доступна в плотностях от 90 до 300 г/м2.
                        </p>
                    </div>
                    <p className="titleDescription py-3"><b>Majestic</b></p>
                    <div className="w-100">
                        <img className="imgMajestic" src="/static/images/Technologes/majestic.jpg" />
                    </div>
                    <div className="boxTxtTechnologes">
                        <p>Бумага дизайнерской серии производства FAVINI, Италия, тонированная в массе с 
                            металлизированным напылением. Коллекция Majestic включает широкую линейку 
                            цветовых оттенков, наиболее популярны: белый мрамор, волшебная свеча, настоящее 
                            золото и настоящее серебро. Доступна в плотностях 120, 250 и 290 г/м2. Так же линейка 
                            включает в себя конверты размерами 22х11 и 17х17 см.
                        </p>
                    </div>
                    <p className="titleDescription py-3"><b>Soft skin</b></p>
                    <div className="boxTxtTechnologes">
                        <p>Пленка для ламинации с ярко выраженным тактильным эффектом. Поверхность имеет 
                            бархатистую структуру по ощущениям схожую с поверхностью Touch cover. Пленка 
                            имеет толщину 32 мкм и широко применяется в изготовлении рекламно-акцедентной 
                            полиграфической продукции.
                        </p>
                    </div>
                    <p className="titleDescription py-3"><b>Touch cover</b></p>
                    <div className="w-100">
                        <img className="imgMajestic" src="/static/images/Technologes/touchcover.jpg" />
                    </div>
                    <div className="boxTxtTechnologes mb-4">
                        <p>Бумага дизайнерской серии производства Fiber Mark, США, тонированная в массе 
                            с латексным напылением. Отличительной особенностью материала являются ярко 
                            выраженные тактильные характеристики. Бумага имеет бархатистую структуру и 
                            приятна на ощупь, в сочетании с высокой плотностью 301 г/м2 стала бестселлером. 
                            Качество и широкая цветовая гамма сделали touch cover очень популярным материалом, 
                            не смотря, на относительно высокую стоимость.
                        </p>
                    </div>
                </div>
            </div>
	    </div>
    )
  }
}
