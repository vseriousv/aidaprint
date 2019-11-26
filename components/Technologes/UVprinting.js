import React, {Component} from 'react'

import './Technologes.less'

export default class UVprinting extends Component{

  render() {
      
    return(
        <div className="technologes mx-3">
            <div className="container">
                <div className="row">
                    <div className="titleTechnologes py-3 w-100"><b>УФ печать</b></div>
                    <p className="titleDescription pb-3"><b>Принцип сольвентной печати</b></p>
                    <div className="boxTxtTechnologes ">
                        <p>Принцип УФ печати построен на принципе отверждения краски. Если в классических 
                            методиках печати краска закрепляется разными способами: за счет нагрева материала 
                            и отверждения краски, за счет впитывания краски в материал и последующего высыхания, 
                            за счет испарения активных компонентов и закрепления красочных на поверхности. В УФ 
                            печати используются краски которые отвердевают под действием УФ излучения. Скорость 
                            отверждения гораздо выше чем у других способов печати, при этом материал не требует 
                            нагрева. В последнее время УФ лампы заменяют на светодиодные линейки, что существенно 
                            уменьшает энергопотребление и увеличивает срок жизни излучателя. УФ технологии позволяют 
                            наносить изображения на материалы с не впитывающей поверхностью и термо-зависимые 
                            материалы, такие как пластик и полимерные пленки.
                        </p>
                    </div>
                    <div className="box_img w-100">
                        <img className="imgInkjetPrinting" src="/static/images/Technologes/UVprint.svg" />
                    </div>
                    <p className="titleDescription py-3"><b>Применение УФ печати</b></p>
                    <div className="boxTxtTechnologes ">
                        <p>Офсетные УФ машины широко используются в печати упаковки в парфюмерии и в 
                            производстве алкогольной продукции, где очень популярны фольгированные 
                            бумаги и картоны, а так же пластик и пленка.
                            Широкоформатная УФ печать по принципу аналогична <a href="">струйной печати</a>. Отличием 
                            является тип чернил и способ закрепления изображения. В последнее время 
                            струйная УФ печать получила огромное распространение, технология продолжает 
                            развиваться и совершенствоваться, об этом свидетельствует активный 
                            пользовательский интерес и растущее количество предложений от производителей, 
                            так на самой популярной в Европе выставке <a href="">Drupa (Dusseldorf/Germany) 2016</a> под 
                            оборудования и материалы для УФ печати заняли более 2х огромных павильонов. 
                            Струйная УФ печать широко применяется в производстве наружной рекламы, 
                            интерьерной печати и маркировке сувенирной продукции.
                        </p>
                    </div>
                    <p className="titleDescription py-3"><b>Плюсы и минусы УФ печати</b></p>
                    <div className="boxTxtTechnologes mb-4">
                        <p>Плюсы:
                            <ul className="mb-3 mt-2">
                                <li>Возможность нанесения изображения практически на любую поверхность</li>
                                <li>Высокая скорость закрепления изображения</li>
                            </ul>
                        </p>
                        <p>Минусы:
                            <ul className="mt-2">
                                <li>Более высокая стоимость печати по сравнению с традициоными аналогами</li>
                                <li>Высокие требования к транспортировке и хранению красок</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
	    </div>
    )
  }
}
