import React, {Component} from 'react';
import { Container, Row, Col, Carousel }  from 'react-bootstrap'


import './AboutBlock.less';

export default class AboutBlock extends Component{
  render() {
    return(
      <div className="box-menu myblu_box pt-4 pb-5 mb-4">
        <div className="container">
          <div className="row mt-4">
            <div className="col-12 d-block">
              <div className="d-flex px-0 pb-4 align-items-center justify-content-center w-100">
                <div className="px-2 w-25">
                  <hr className="mr-0" />
                </div>
                <div className="px-2 px-sm-4">
                  <p className="h_18_app mywhite p-0 m-0">О КОМПАНИИ</p>
                </div>
                <div className="px-2 w-25">
                  <hr className="ml-0" />
                </div>
              </div>
              <div className="px-3 mywhite h_11 d-block">
                <p className="mb-2">aidaprint — это не только качественный сервис печати, а полноценная онлайн-типография, где можно заказать практически любую печатную продукцию. У нас представлены технологии цифровой и офсетной печати для листовой полноцветной продукции, латексная, пигментная и УФ печать для изделий большого формата, шелкография, флексопечать, тиснение, конгрев, гравировка, планшетная и ролевая плоттерная резка, ламинация и многое другое. Симбиоз технологий позволяет создавать множество разнообразных печатных изделий.</p> 
                <p className="mb-2">Большинство из типографских технологий было доступно только для корпоративного клиента при заказе больших тиражей. Сервис Aidaprint создан для того, чтобы сделать типографские изделия доступными для всех.</p> 
                <p className="mb-2">Компания основана с 2011 года, как цифровое подразделение офсетного производства. За последнее десятилетие рынок цифровой печати сильно изменился и продвинулся, появились новые технологии, оборудование стало совершеннее, а качество выше. Мы находимся в авангарте всех событий на рынке и гибко реагируем на появление новых технологий и оборудования. Поэтому парк оборудования нашего производства постоянно растет, а специалисты осваивают новые методики.</p> 
                <p className="m-0">Мы уделяем большое внимане качеству выпускаемой продукции и сервису потому, что нам нравится, то что мы делаем, мы любим полиграфию, и те продукты которые создаем, и радуемся вместе со своими клиентами качественному результату.</p>
              </div>
            </div>  
          </div>
        </div>
      </div>
    )
  }
}