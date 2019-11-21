import React, {Component} from 'react';

import './AboutAdvantageBlock.less';

export default class AboutAdvantageBlock extends Component{
  render() {
    return(
        <div className="advantages mb-4">
			<div className="container">
				<div className="row">
					<div className="col-12 d-block">
						<div className="headline d-flex px-3 pb-4 align-items-center justify-content-center w-100">
							<div className="px-2 w-25">
								<hr />
							</div>
							<div className="px-2 px-sm-4 text-center">
								<h2 className="h_18_app myblack p-0 m-0">НАШИ ПРЕИМУЩЕСТВА</h2>
							</div>
							<div className="px-2 w-25">
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>		
			<div className="box_advantages">
				<div className="container">
					<div className="row">	
						<div className="col-lg-4 col-sm-6 col-12">
							<div className="advantages_1 d-block px-3 h-100">
								<div className="equipment d-flex justify-content-center p-4 w-100">
									<img src="/static/images/otherimage/equipment.png" alt="Оснащенность" />
								</div>
								<div className="d-none d-md-block px-lg-4 pt-3 pb-md-4 pb-lg-5 px-md-3">
									<h3 className="h_18_app myblack mb-2"><b>Оснащенность</b></h3>
									<p className="h_14 myblack m-0">В парке нашей компании более 20 единиц печатного и поспечатного оборудования, более 10 технологий нанесения изображений</p>
								</div>
								<div className="d-md-none d-block px-sm-3 px-4 pt-2 pb-sm-4 pb-5">
									<h3 className="h_14_app myblack mb-2"><b>Оснащенность</b></h3>
									<p className="h_11 myblack m-0">В парке нашей компании более 20 единиц печатного и поспечатного оборудования, более 10 технологий нанесения изображений</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 col-12 mt-4 mt-sm-0">
							<div className="advantages_2 d-block px-3 mylight_blue h-100">
								<div className="service d-flex justify-content-center p-4 w-100">
									<img src="/static/images/otherimage/service.png" alt="Сервис" /> 
								</div>
								<div className="d-none d-md-block px-lg-4 pt-3 pb-md-4 pb-lg-5 px-md-3">
									<h3 className="h_18_app myblack mb-2"><b>Сервис</b></h3>
									<p className="h_14 myblack m-0">Мы ценим ваше время, бережем нервы и экономим деньги. Поэтому предлагаем удобный сервис заказа, доставку готовой продукции, бесплатные консультации</p>
								</div>
								<div className="d-md-none d-block px-sm-3 px-4 pt-2 pb-sm-4 pb-5">
									<p className="h_14_app myblack mb-2"><b>Сервис</b></p>
									<p className="h_11 myblack m-0">Мы ценим ваше время, бережем нервы и экономим деньги. Поэтому предлагаем удобный сервис заказа, доставку готовой продукции, бесплатные консультации</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-sm-6 col-12 offset-lg-0 offset-sm-3 offset-0 mt-4 mt-lg-0">
							<div className="advantages_3 d-block px-3 myviolet h-100">
								<div className="competence d-flex justify-content-center p-4 w-100">
									<img src="/static/images/otherimage/competence.png" alt="Компетентность" />
								</div>
								<div className="d-none d-md-block px-lg-4 pt-3 pb-md-4 pb-lg-5 px-md-3">
									<h3 className="h_18_app myblack mb-2"><b>Компетентность</b></h3>
									<p className="h_14 myblack m-0">Мы прекрасно разбираемся в том, что делаем, у нас работает 15 сотрудников различной специализации и высокого уровня профессионализма</p>
								</div>
								<div className="d-md-none d-block px-sm-3 px-4 pt-2 pb-sm-4 pb-5">
									<h3 className="h_14_app myblack mb-2"><b>Компетентность</b></h3>
									<p className="h_11 myblack m-0">Мы прекрасно разбираемся в том, что делаем, у нас работает 15 сотрудников различной специализации и высокого уровня профессионализма</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}