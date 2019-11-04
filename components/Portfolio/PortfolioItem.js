import React, {Component} from 'react';
import Link from 'next/link';

import './Portfolio.less';

export default class Porfolio extends Component{

    boxInformation = [
        { img: "visitca.jpg", url: "visitca" },
        { img: "visitca.jpg", url: "visitca" },
        { img: "visitca.jpg", url: "visitca" },
        { img: "visitca.jpg", url: "visitca" },
        { img: "visitca.jpg", url: "visitca" },
        { img: "diplom.jpg",  url: "diplom" },
        { img: "diplom.jpg",  url: "diplom" },
        { img: "diplom.jpg",  url: "diplom" },
        { img: "diplom.jpg",  url: "diplom" },
        { img: "diplom.jpg",  url: "diplom" },
        { img: "diplom.jpg",  url: "diplom" },
        { img: "package.jpg", url: "package" },
        { img: "package.jpg", url: "package" },
        { img: "package.jpg", url: "package" },
        { img: "package.jpg", url: "package" },
        { img: "folder.jpg", url: "folder" },
        { img: "giftCertificate.jpg",url: "giftCertificate" },
        { img: "souvenir.jpg", url: "souvenir" },
        { img: "certificate.jpg", url: "certificate" },
        { img: "packaging.jpg", url: "packaging" },
        { img: "photoAbum.jpg", url: "photoAbum" },
        { img: "wedding.jpg", url: "wedding" },
        { img: "flyer.jpg", url: "flyer" },
        { img: "puzzles.jpg", url: "puzzles" }
    ]

  render() {
      
    return(
        <div className="portfolio">
            <div className="container">
                <div className="row d-flex">
                    {
                        this.boxInformation.map(item => {

                        if(item.url == this.props.urlName){
                            return (
                                <div key={item.id} className="col-6 col-md-4 d-flex justify-content-top align-items-center card_portfolio">
                                    <div className="box_img_portfolio">
                                        <div className="box_img" style={{ 
                                            backgroundImage: "url('/static/images/Portfolio/"+item.img+"')", 
                                            backgroundSize: "cover"}}>
                                        </div>
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            );
                        }})
                    }
                </div>
            </div>
	    </div>
    )
  }
}