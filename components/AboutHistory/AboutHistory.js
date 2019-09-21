import React, {Component} from 'react';

import './AboutHistory.less';

export default class AboutHistory extends Component{
  render() {
    return(
    <>
        <div className="story_company">
			<div className="container">
				<div className="row">
					<div className="col-12 d-block">
						<div className="headline  d-flex px-3 pb-4 align-items-center justify-content-center w-100">
							<div className="px-2 w-25">
								<hr />
							</div>
							<div className="px-4">
								<h2 className="h_18_app myblack p-0 m-0 text-center">История компании</h2>
							</div>
							<div className="px-2 w-25">
								<hr />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="box_story mb-4">
			<div className="box_year d-flex mx-auto mb-4 mb-md-5 px-3">
				<div className="col-12 col-md-4 d-flex justify-content-center align-items-start mb-3 mb-md-0">
					<h3 className="year myblack m-0">2011</h3>
				</div>
				<div className="col-12 col-md-8 event d-flex justify-content-center h_11 myblack">
					<p className="mb-2"><strong>Создание цифрового печатного салона под брендом “PRINTA”</strong></p>
					<p className="m-0">Была куплена первая цифровая печатная машина KonicaMinolta BIZHUB 5502C, позолотный пресс для тиснения и набор поспечатного оборудования для старта салона оперативной печати</p>
				</div>
			</div>
			<div className="box_year d-flex mx-auto mb-4 mb-md-5 px-3">
				<div className="col-12 col-md-4 d-flex justify-content-center align-items-start mb-3 mb-md-0">
					<h3 className="year myblack m-0">2012</h3>
				</div>
				<div className="col-12 col-md-8 event d-flex justify-content-center h_11 myblack">
					<p className="mb-2"><strong>Появление направление интерьерной печати</strong></p>
					<p className="mb-1">Весной 2012 был приобретен латексный плоттер интерьерной печати HP Designjet 26500L и широкоформатная резка, компания стала предлагать услуги интерьерной и широкоформатной печати. Наряду с этим была проведена модернизация всего поспечатного оборудования, вместо ручных приобретены полуавтоматические станки.</p>
					<p className="m-0">В этом же году руководители компании посетили главную полиграфическую выставку DRUPA-2012 в Дюссельдорфе (Германия), после чего было принято решение внедрить web-to-print систему. На тот момент, в России сервис онлайн печати предоставляло менее десятка компаний</p>
				</div>
			</div>
			<div className="box_year d-flex mx-auto mb-4 mb-md-5 px-3">
				<div className="col-12 col-md-4 d-flex justify-content-center align-items-start mb-3 mb-md-0">
					<h3 className="year myblack m-0">2013</h3>
				</div>
				<div className="col-12 col-md-8 event d-flex justify-content-center h_11 myblack">
					<p className="mb-2"><strong>Рождение aidaprint. Появление онлайн-типографии с сервисом web-to-print</strong></p>
					<p className="mb-1">После сравнения предложений по веб сервисам был выбран pixelpark на базе которого была создана первая версия проекта. Компания начала принимать первые заказы через интернет.</p>
					<p className="m-0">Было расширено производство, куплено более производительное послепечатное оборудование, Куплена мощная плоттерная резка Valiani, куплен механический гравёр Roland для изготовления клише из магния и латуни</p>
				</div>
			</div>
			<div className="box_year d-flex mx-auto mb-4 mb-md-5 px-3">
				<div className="col-12 col-md-4 d-flex justify-content-center align-items-start mb-3 mb-md-0">
					<h3 className="year myblack m-0">2014</h3>
				</div>
				<div className="col-12 col-md-8 event d-flex justify-content-center h_11 myblack">
					<p className="mb-2"><strong>Проведена крупная модернизация производства</strong></p>
					<p className="m-0">Куплена новая современная печатная машина KonicaMinolta BIZHUB 1060, расширены возможности послепечатных работ за счет нового оборудования для переплета</p>
				</div>
			</div>
			<div className="box_year d-flex mx-auto mb-4 mb-md-5 px-3">
				<div className="col-12 col-md-4 d-flex justify-content-center align-items-start mb-3 mb-md-0">
					<h3 className="year myblack m-0">2018</h3>
				</div>
				<div className="col-12 col-md-8 event d-flex justify-content-center h_11 myblack">
					<p className="mb-2"><strong>Новое место, новые возможности</strong></p>
					<p className="m-0">Компания перехала на новый адрес в центр Новосибирска. Стали доступнее для большинства наших клиентов. Кризис миновал и мы начали вновь улучшать свое производство, закупили новый скоростной ламинатор и различное мелкое оборудование для специфических операций, таких как штриховка корешка книги</p>
				</div>
			</div>
			<div className="box_year d-flex mx-auto px-3">
				<div className="col-12 col-md-4 d-flex justify-content-center align-items-start mb-3 mb-md-0">
					<h3 className="year myblack m-0">2019</h3>
				</div>
				<div className="col-12 col-md-8 event d-flex justify-content-center h_11 myblack">
					<p className="mb-2"><strong>Расширена производственная линейка</strong></p>
					<p className="m-0">Закуплено новое оборудование для печати больших форматов, автоматизированы процессы постепатной обработки, в частности автоматизированная биговальная машина Morgana digicreaser</p>
				</div>
			</div>
		</div>
    </>
    );
  }
}