import React, {Component} from 'react'

import './Technologes.less'

export default class Flexography extends Component{

  render() {
      
    return(
        <div className="technologes mx-3">
            <div className="container">
                <div className="row">
                    <div className="titleTechnologes py-3"><b>Флексография</b></div>
                    <div className="boxTxtTechnologes ">
                        <p>Флексографская печать* – это единственный способ высокой печати, применение которого 
                            расширяется преимущественно в упаковочной, этикеточной и газетной печати. Главная 
                            отличительная черта флексографской печати – использование гибких, по сравнению с 
                            типографской печатью, относительно мягких печатных форм, которые позволили изменить 
                            процесс подачи краски. При помощи эластичных (мягких) печатных форм и специально 
                            подобранных печатных красок (низкой вязкости) можно получать большую палитру цветов 
                            на впитывающих и невпитывающих материалах. На рисунке показан принцип работы печатной 
                            секции флексографской машины. Жидкая печатная краска равномерно переносится ячейками 
                            накатного валика с растрированной поверхностью (так называемого растрированного 
                            (анилоксного) валика, линиатура растра от 200 до 600 лин/см, керамическая или 
                            хромированная поверхность) на печатающие элементы. На формном цилиндре находится 
                            резиновое клише или клише из синтетического материала. Давление печатного цилиндра 
                            обеспечивает перенос краски на запечатываемый материал. Применение ракеля вместе с 
                            системой подачи краски оказывает стабилизирующее действие на печатный процесс благодаря 
                            равномерному заполнению краской ячеек, находящихся на растрированном валике. С применяемыми 
                            ранее исключительно резиновыми печатными формами была возможна печать лишь простых 
                            изображений и грубых штриховых рисунков невысокого качества. Сегодня для удовлетворения 
                            постоянно растущих требований к качеству, прежде всего в печати упаковки, используются 
                            фотополимерные вымывные печатные пластины (например, Nyloflex фирмы BASF и 
                            Cyrel фирмы DuPont), которые обеспечивают возможность использования линиатуры растра 
                            до 60 лин/см.

                            <p className="mt-4">* - Использован материал из издания Г.Киппхан "Энциклопедия по печатным средствам информации"</p>
                        </p>
                    </div>
                    
                    <div className="box_img w-100">
                        <img className="imgInkjetPrinting" src="/static/images/Technologes/Flexography.svg" />
                    </div>
                </div>
            </div>
	    </div>
    )
  }
}
