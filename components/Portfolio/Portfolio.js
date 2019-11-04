import React, {Component} from 'react';

import './Portfolio.less';

export default class Porfolio extends Component{

    boxInformation = [
        { id: 1, img: "visitca.jpg", text: "Визитные карточки" },
        { id: 2, img: "diplom.jpg", text: "Дипломы грамоты" },
        { id: 3, img: "package.jpg", text: "Пакеты" },
        { id: 4, img: "folder.jpg", text: "Папки" },
        { id: 5, img: "giftCertificate.jpg", text: "Подарочные сертификаты" },
        { id: 6, img: "souvenir.jpg", text: "Сувениры" },
        { id: 7, img: "certificate.jpg", text: "Удостоверения" },
        { id: 8, img: "packaging.jpg", text: "Упаковка" },
        { id: 9, img: "photoAbum.jpg", text: "Фотоальбомы" },
        { id: 10, img: "wedding.jpg", text: "Свадебные пригласительные" },
        { id: 11, img: "flyer.jpg", text: "Листовки, флаеры" },
        { id: 11, img: "puzzles.jpg", text: "Пазлы" }
    ]

  render() {
      
    return(
        <div className="portfolio">
            <div className="container">
                <div className="row d-flex">
                    {
                        this.boxInformation.map(item => (   
                        <div key={item.id} className="col-6 col-md-4 d-flex justify-content-top align-items-center card_portfolio">
                            <div className="box_img_portfolio">
                                <a href=""> 
                                    <div className="box_img" style={{ 
                                        backgroundImage: "url('/static/images/Portfolio/"+item.img+"')", 
                                        backgroundSize: "cover"}}>
                                    </div>
                                </a>
                            </div>
                            <p>{item.text}</p>
                        </div>
                        ))
                    }
                </div>
            </div>
	    </div>
    )
  }
}