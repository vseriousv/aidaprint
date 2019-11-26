import React, {Component} from 'react'

import './Technologes.less'

export default class GravurePrinting extends Component{

  render() {
      
    return(
        <div className="technologes mx-3">
            <div className="container">
                <div className="row">
                    <div className="titleTechnologes py-3"><b>Глубокая печать</b></div>
                    
                    <div className="box_img w-100">
                        <img className="imgInkjetPrinting" src="/static/images/Technologes/GravurePrinting.svg" />
                    </div>
                    
                    <div className="boxTxtTechnologes">
                        <p> Способ глубокой печати характеризуется применением форм с углублением печатающих элементов.
                            Пробельные элементы на форме расположены в одной постоянной плоскости. На всю печатную форму 
                            (пробельные и печатающие элементы) при печати наносится краска, т.е. форма заливается ею. Перед 
                            печатью соответствующее средство (ткань или бумага для снятия краски или ракель) обеспечивает 
                            удаление печатной краски с пробельных элементов. Таким образом, она остается только в углублениях. 
                            Высокое давление и силы адгезии обеспечивают перенос краски из углублений на запечатываемый материал. 
                            Принцип глубокой печати показан на рисунке. В типографиях нашла применение так называемая глубокая 
                            ракельная печать. Формы глубокой печати, как правило, цилиндрические. Особенность глубокой ракельной 
                            печати состоит в том, что на каждое цветоделенное изображение используется комплектный формный 
                            цилиндр (без формной пластины). Это означает, что в четырехкрасочной машине при каждом новом заказе 
                            должны быть заменены четыре отдельных формных цилиндра. Предприятие с частыми повторяющимися заказами 
                            вынуждено хранить большое количество этих цилиндров. Формные цилиндры глубокой печати обычно имеют 
                            значительный вес и требуют специальных транспортной и обслуживающей систем. Традиционная глубокая 
                            печать (изменяется только глубина ячеек) также все больше теряет свое значение, так как изготовление 
                            печатных форм основывается на сложных, не поддающихся стандартизации процессах копирования и травления. 
                            По этой причине на практике добилась признания глубокая печать с переменными глубиной и площадью ячеек, 
                            которая в промышленном применении основана на электронно механическом гравировании (с помощью резца). 
                            В процессе растрирования изображение разделяется на печатающие элементы формы (ячейки) и пробельные 
                            элементы (металлические перегородки). Металлические перегородки между ячейками служат опорой для ракеля 
                            при снятии лишней краски. После снятия краски с поверхности формы она остается только в ячейках. Если 
                            на краях ячеек останется краска, то при печати будет наблюдаться тенение или при наличии дефектов 
                            ракеля – полошение.
                        </p>
                    </div>

                    <p className="titleDescription py-3"><b>Области применения, отличительные черты и виды печатной продукции</b></p>
                    <div className="boxTxtTechnologes mb-5">
                        <p> Глубокая печать – это очень хороший способ достижения высочайшего качества оттисков
                            иллюстрационных изданий. При использовании формных цилиндров с ячейками переменной 
                            глубины, гравированных электронным способом, ячейки принимают соответствующее 
                            количество краски. На запечатываемом материале образуется слой краски различной 
                            толщины соответственно тоновым градациям оригинала. Поэтому иллюстрация, напечатанная 
                            способом глубокой печати, воспроизводит непрерывные изменения тоновых градаций изображения 
                            очень близко к оригиналу. Зрительное восприятие улучшается еще и благодаря тому, что после 
                            нанесения жидкая печатная краска в области глубоких тонов немного растекается на запечатываемом 
                            материале и, таким образом, не дает четко ограниченных растровых точек, а пробельные элементы 
                            печатной формы также становятся незаметными.
                        </p>
                        <p>Характерные особенности глубокой печати:
                            <ul className="mb-3 mt-2">
                                <li>зубчатые края букв и линий;</li>
                                <li>воспроизведение полутонов очень хорошее благодаря переменной глубине ячеек (т.е. соответственно различному объему краски);</li>
                                <li>применение форм с переменной глубиной квадратных ячеек во всех тоновых градациях в светлых тонах приводит часто к непропечатке;</li>
                                <li>использование растровых точек с переменными глубиной и площадью ячеек.</li>
                            </ul>
                        </p>
                        <p>Типичным для глубокой печати является получение высокотиражной высококачественной печатной продукции:
                            <ul className="mb-3 mt-2">
                                <li>иллюстрированные газеты, журналы, рекламные каталоги, рассылаемые по почте;</li>
                                <li>печать на полимерных пленках;</li>
                                <li>печать на металлической фольге;</li>
                                <li>пакеты с ручками;</li>
                                <li>ценные бумаги, почтовые марки, банкноты.</li>
                            </ul>
                        </p>
                        <p className="mt-4">* - Использован материал из издания Г.Киппхан "Энциклопедия по печатным средствам информации"</p>
                    </div>
                </div>
            </div>
	    </div>
    )
  }
}