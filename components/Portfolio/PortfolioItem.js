import React, {Component} from 'react';
import Link from 'next/link';

import './Portfolio.less';

export default class Porfolio extends Component{

    boxInformation = [
        { img: "visitca/1.jpg", url: "visitca" },
        { img: "visitca/2.jpg", url: "visitca" },
        { img: "visitca/3.jpg", url: "visitca" },
        { img: "visitca/4.jpg", url: "visitca" },
        { img: "visitca/5.jpg", url: "visitca" },
        { img: "visitca/6.jpg", url: "visitca" },
        { img: "visitca/7.jpg", url: "visitca" },
        { img: "visitca/8.jpg", url: "visitca" },
        { img: "visitca/9.jpg", url: "visitca" },
        { img: "visitca/10.jpg", url: "visitca" },
        { img: "visitca/11.jpg", url: "visitca" },
        { img: "diplom/1.jpg",  url: "diplom" },
        { img: "diplom/2.jpg",  url: "diplom" },
        { img: "diplom/3.jpg",  url: "diplom" },
        { img: "package/1.jpg", url: "package" },
        { img: "package/2.jpg", url: "package" },
        { img: "package/3.jpg", url: "package" },
        { img: "package/4.jpg", url: "package" },
        { img: "package/5.jpg", url: "package" },
        { img: "package/6.jpg", url: "package" },
        { img: "package/7.jpg", url: "package" },
        { img: "package/8.jpg", url: "package" },
        { img: "package/9.jpg", url: "package" },
        { img: "folder/1.jpg", url: "folder" },
        { img: "folder/2.jpg", url: "folder" },
        { img: "folder/3.jpg", url: "folder" },
        { img: "folder/4.jpg", url: "folder" },
        { img: "folder/5.jpg", url: "folder" },
        { img: "folder/6.jpg", url: "folder" },
        { img: "folder/7.jpg", url: "folder" },
        { img: "folder/8.jpg", url: "folder" },
        { img: "giftCertificate/1.jpg",url: "giftCertificate" },
        { img: "giftCertificate/2.jpg",url: "giftCertificate" },
        { img: "giftCertificate/3.jpg",url: "giftCertificate" },
        { img: "giftCertificate/4.jpg",url: "giftCertificate" },
        { img: "giftCertificate/5.jpg",url: "giftCertificate" },
        { img: "giftCertificate/6.jpg",url: "giftCertificate" },
        { img: "giftCertificate/7.jpg",url: "giftCertificate" },
        { img: "giftCertificate/8.jpg",url: "giftCertificate" },
        { img: "giftCertificate/9.jpg",url: "giftCertificate" },
        { img: "giftCertificate/10.jpg",url: "giftCertificate" },
        { img: "giftCertificate/11.jpg",url: "giftCertificate" },
        { img: "souvenir/1.jpg", url: "souvenir" },
        { img: "souvenir/2.jpg", url: "souvenir" },
        { img: "souvenir/3.jpg", url: "souvenir" },
        { img: "souvenir/4.jpg", url: "souvenir" },
        { img: "souvenir/5.jpg", url: "souvenir" },
        { img: "souvenir/6.jpg", url: "souvenir" },
        { img: "souvenir/7.jpg", url: "souvenir" },
        { img: "souvenir/8.jpg", url: "souvenir" },
        { img: "souvenir/9.jpg", url: "souvenir" },
        { img: "souvenir/10.jpg", url: "souvenir" },
        { img: "souvenir/11.jpg", url: "souvenir" },
        { img: "souvenir/12.jpg", url: "souvenir" },
        { img: "souvenir/13.jpg", url: "souvenir" },
        { img: "souvenir/14.jpg", url: "souvenir" },
        { img: "souvenir/15.jpg", url: "souvenir" },
        { img: "souvenir/16.jpg", url: "souvenir" },
        { img: "souvenir/17.jpg", url: "souvenir" },
        { img: "souvenir/18.jpg", url: "souvenir" },
        { img: "certificate/1.jpg", url: "certificate" },
        { img: "certificate/2.jpg", url: "certificate" },
        { img: "packaging/1.jpg", url: "packaging" },
        { img: "packaging/2.jpg", url: "packaging" },
        { img: "packaging/3.jpg", url: "packaging" },
        { img: "packaging/4.jpg", url: "packaging" },
        { img: "packaging/5.jpg", url: "packaging" },
        { img: "packaging/6.jpg", url: "packaging" },
        { img: "packaging/7.jpg", url: "packaging" },
        { img: "packaging/8.jpg", url: "packaging" },
        { img: "packaging/9.jpg", url: "packaging" },
        { img: "packaging/10.jpg", url: "packaging" },
        { img: "packaging/11.jpg", url: "packaging" },
        { img: "packaging/12.jpg", url: "packaging" },
        { img: "packaging/13.jpg", url: "packaging" },
        { img: "packaging/14.jpg", url: "packaging" },
        { img: "packaging/15.jpg", url: "packaging" },
        { img: "packaging/16.jpg", url: "packaging" },
        { img: "packaging/17.jpg", url: "packaging" },
        { img: "packaging/18.jpg", url: "packaging" },
        { img: "packaging/19.jpg", url: "packaging" },
        { img: "photoAbum/1.jpg", url: "photoAbum" },
        { img: "photoAbum/2.jpg", url: "photoAbum" },
        { img: "photoAbum/3.jpg", url: "photoAbum" },
        { img: "photoAbum/4.jpg", url: "photoAbum" },
        { img: "photoAbum/5.jpg", url: "photoAbum" },
        { img: "photoAbum/6.jpg", url: "photoAbum" },
        { img: "photoAbum/7.jpg", url: "photoAbum" },
        { img: "photoAbum/8.jpg", url: "photoAbum" },
        { img: "photoAbum/9.jpg", url: "photoAbum" },
        { img: "wedding/1.jpg", url: "wedding" },
        { img: "wedding/2.jpg", url: "wedding" },
        { img: "wedding/3.jpg", url: "wedding" },
        { img: "wedding/4.jpg", url: "wedding" },
        { img: "wedding/5.jpg", url: "wedding" },
        { img: "wedding/6.jpg", url: "wedding" },
        { img: "flyer/1.jpg", url: "flyer" },
        { img: "flyer/2.jpg", url: "flyer" },
        { img: "puzzles/1.jpg", url: "puzzles" },
        { img: "puzzles/2.jpg", url: "puzzles" },
        { img: "puzzles/3.jpg", url: "puzzles" },
        { img: "puzzles/4.jpg", url: "puzzles" },
        { img: "puzzles/5.jpg", url: "puzzles" },
        { img: "puzzles/6.jpg", url: "puzzles" },
        { img: "notebook/1.jpg", url: "notebook" },
        { img: "notebook/2.jpg", url: "notebook" },
        { img: "notebook/3.jpg", url: "notebook" },
        { img: "notebook/4.jpg", url: "notebook" },
        { img: "notebook/5.jpg", url: "notebook" },
        { img: "postcard/1.jpg", url: "postcard" },
        { img: "postcard/2.jpg", url: "postcard" },
        { img: "postcard/3.jpg", url: "postcard" },
        { img: "postcard/4.jpg", url: "postcard" }
    ]

  render() {
      
    return(
        <div className="portfolio">
            <div className="container">
                <div className="row d-flex">
                    {
                        this.boxInformation.map((item, index) => {

                        if(item.url == this.props.urlName){
                            return (
                                <div key={index} className="col-6 col-md-4 d-flex justify-content-top align-items-center card_portfolio">
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
                <Link href={"/portfolio"}>
                    <div className="boxButton">
                        <a>Назад</a>
                    </div>
                </Link>
            </div>
	    </div>
    )
  }
}