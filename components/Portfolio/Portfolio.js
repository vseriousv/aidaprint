import React, {Component} from 'react';
import Link from 'next/link';

import './Portfolio.less';

export default class Porfolio extends Component{

    boxInformation = [
        { id: 1, img: "visitca.jpg", text: "Визитные карточки" , url: "visitca"},
        { id: 2, img: "diplom.jpg", text: "Дипломы грамоты" , url: "diplom"},
        { id: 3, img: "package.jpg", text: "Пакеты" , url: "package"},
        { id: 4, img: "folder.jpg", text: "Папки" , url: "folder"},
        { id: 5, img: "giftCertificate.jpg", text: "Подарочные сертификаты" , url: "giftCertificate"},
        { id: 6, img: "souvenir.jpg", text: "Сувениры" , url: "souvenir"},
        { id: 7, img: "certificate.jpg", text: "Удостоверения" , url: "certificate"},
        { id: 8, img: "packaging.jpg", text: "Упаковка" , url: "packaging"},
        { id: 9, img: "photoAbum.jpg", text: "Фотоальбомы" , url: "photoAbum"},
        { id: 10, img: "wedding.jpg", text: "Свадебные пригласительные" , url: "wedding"},
        { id: 11, img: "flyer.jpg", text: "Листовки, флаеры" , url: "flyer"},
        { id: 12, img: "puzzles.jpg", text: "Пазлы" , url: "puzzles"},
        { id: 13, img: "notebook.jpg", text: "Ежедневники" , url: "notebook"},
        { id: 14, img: "postcard.jpg", text: "Открытки" , url: "postcard"}
    ]

  render() {
      
    return(
        <div className="portfolio">
            <div className="container">
                <div className="row">
                    {
                        this.boxInformation.map(item => (   
                        <div key={item.id} className="col-6 col-md-4 d-flex justify-content-top align-items-start card_portfolio">
                           <Link href={"/portfolio/" + item.url}>
                                <a> 
                                    <div className="box_img_portfolio">
                                        <div className="box_img" style={{ 
                                            backgroundImage: "url('/static/images/Portfolio/"+item.img+"')", 
                                            backgroundSize: "cover"}}>
                                        </div>
                                    </div>
                                    <p>{item.text}</p>
                                </a>
                            </Link>         
                        </div>
                        ))
                    }
                </div>
            </div>
	    </div>
    )
  }
}