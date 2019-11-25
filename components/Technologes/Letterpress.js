import React, {Component} from 'react'

import './Technologes.less'

export default class Letterpress extends Component{

  render() {
      
    return(
        <div className="technologes mx-3">
            <div className="container">
                <div className="row">
                    <div className="titleTechnologes py-3"><b>Высокая печать</b></div>
                    <div className="boxTxtTechnologes ">
                        <p> Для всех способов высокой печати характерно то, что печатающие элементы расположены 
                            выше, чем пробельные. Все печатающие элементы (участки изображения), находящиеся на 
                            одном уровне по высоте, покрываются слоем краски равной толщины при помощи накатных 
                            валиков красочного аппарата. Затем происходит перенос краски на материал, например, 
                            бумагу.
                        </p>
                        <p>Технология высокой печати используется в следующих печатных системах:
                            <ul className="my-3">
                                <li>типографская печать;</li>
                                <li><a href="">флексографская печать;</a></li>
                                <li>типоофсетная печать, или высокий офсет.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="box_img w-100">
                        <img className="imgLetterpress_1" src="/static/images/Technologes/Letterpress-01.svg" />
                    </div>
                    <div className="boxTxtTechnologes">
                        <p> Офсет – важнейший вид плоской печати, при котором краска с печатной формы 
                            переносится сначала на эластичный промежуточный носитель – резино-тканевое 
                            полотно, а затем на запечатываемый материал. Принцип офсетной печати изображен 
                            на рисунке. Чтобы на печатной форме достичь эффекта отталкивания краски, 
                            используют два метода, основанных на различном взаимодействии поверхности 
                            печатной формы и краски: В традиционном офсете печатная форма увлажняется 
                            увлажняющим раствором. Раствор очень тонким слоем с помощью валиков наносится 
                            на форму. Участки формы, не несущие изображения, гидрофильны, т.е. воспринимают 
                            воду, а участки, несущие краску, олеофильны (воспринимают краску). Пленка
                            увлажняющего раствора препятствует передаче краски на пробельные участки формы.
                            Так как этот способ наиболее широко распространен, с офсетной печатью вообще 
                            всегда связывают взаимодействие краски и увлажняющего раствора. Таким образом, 
                            для машины «офсетной печати» необходимы красочный и увлажняющий аппараты. 
                            Типичный пример изображен на втором рисунке.
                        </p>
                    </div>
                    <p className="titleDescription py-3"><b>Типографская печать*</b></p>
                    <div className="boxTxtTechnologes mb-5">
                        <p> Типографская печать – это старейший способ высокой печати. Гениальное изобретение 
                            Гутенберга в середине XV века, заключающееся в изготовлении и использовании 
                            отдельных подвижных литер для набора, сделало возможным экономичное и быстрое 
                            размножение рукописей и производство книг.
                        </p>
                        <p> В типографской печати применяются разные схемы печатного контакта:

                            <ul className="my-3">
                                <li>плоскость – плоскость – печать на тигельных машинах;</li>
                                <li>плоскость – цилиндр – печать на плоскопечатных машинах (историческое название – скоропечатная машина);</li>
                                <li>цилиндр – цилиндр – печать на ротационных машинах, или ротационная печать.</li>
                            </ul>

                            В последние десятилетия типографская печать все больше теряет свое значение, прежде 
                            всего из-за трудоемкости способов изготовления печатных форм. Качественная печать 
                            листовой продукции больших форматов достижима только на плоскопечатных машинах. 
                            Типичным для типографской печати является множество используемых печатных форм или 
                            частей печатных форм: линотипный набор, ручной набор, пластины и стереотипы. Они могут 
                            быть изготовлены из различных материалов: сплава гарта, цинка, меди и 
                            фотополимеризующихся синтетических материалов. Для изготовления высокохудожественной 
                            малотиражной продукции используют формы из дерева и линолеума. Печатные формы для печати 
                            на тигельных и плоскопечатных машинах состоят в большинстве случаев из набора плоских 
                            элементов. Для ротационной печати применяют полукруглые отлитые металлические печатные 
                            формы (стереотипы) или гибкие пластины из синтетических материалов, так называемые 
                            фотополимерные формы. При изготовлении текстовых печатных форм в типографской печати
                            используются способы строкоотливного набора или фотонабора. При этом строкоотливной набор, 
                            доминировавший еще 20 лет назад, в настоящее время применяется только при печати малоформатной 
                            акцидентной продукции в старейших типографиях или при любительской печати.
                        </p>
                        <p>Для печати иллюстраций и графики в типографской печати применяют различные пластины:
                            <ul className="my-3">
                                <li>изготовленные вручную печатные формы (например, деревянные клише) имеют и сегодня 
                                    определенное значение при художественных работах с оригинальной графикой;</li>
                                <li>металлические клише, получаемые травлением при использовании фотомеханики, а также гравированием;</li>
                                <li>фотополимерные клише, получаемые путем фотополимеризации и вымывания слоя, имеют наибольшее применение.
                                    На место ранее применяемых исключительно металлических клише (в особенности цинковых) приходят фотополимерные клише.</li>
                            </ul>
                        </p>
                    </div>
                    <div className="box_img w-100">
                        <img className="imgLetterpress_2" src="/static/images/Technologes/Letterpress-02.svg" />
                    </div>
                    <div className="boxTxtTechnologes mb-5">
                        <p> Фотополимерную форму можно быстро и легко изготовить. В настоящее время предлагается 
                            широкий ассортимент фотополимеризующихся пластин с разнообразными свойствами, глубиной 
                            вымывания и материалами подложки, предназначенными для различных способов обработки. 
                            Фотополимеризующиеся пластины для высокой печати, например Nyloprint (BASF), состоят 
                            из светочувствительного синтетического материала, который благодаря подслою прочно связан 
                            с материалом подложки. Материал подложки в зависимости от способа применения – алюминий, 
                            сталь или синтетический. На рис. а) изображена микрофотография формы высокой печати 
                            (латунная печатная форма). Оттиск, изготовленный способом высокой печати, можно определить 
                            по скоплению краски по краям печатающих элементов, как это представлено на рис. б).
                        </p>   
                        <p className="mt-4">* - Использован материал из издания Г.Киппхан "Энциклопедия по печатным средствам информации"</p>
                    </div>
                </div>
            </div>
	    </div>
    )
  }
}
