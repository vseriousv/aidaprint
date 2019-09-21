import React, {Component} from 'react';

import './AboutGaranties.less';

export default class AboutGaranties extends Component{
  render() {
    return(
		<div className="guarantees mybrown py-4 mb-4 d-flex align-items-center justify-content-center">
			<div className="list_doc mr-4">
				<img src="/static/images/otherimage/guarantees.png" alt="Гарантии" />
			</div>
			<div className="d-block col-6 col-sm-4">
				<div className="d-flex align-items-center mb-2 w-100">
					<h2 className="h_18_app mywhite my-0 p-0 mr-4 d-none d-sm-flex">ГАРАНТИЯ</h2>
					<h2 className="h_14_app mywhite my-0 p-0 mr-4 d-sm-none">ГАРАНТИЯ</h2>
					<hr className="mywhite m-0 p-0 w-25" />
				</div>
					<p className="h_14 myblack m-0 d-none d-md-flex">Мы уверены в качестве своей продукции, поэтому даем гарантию полного возврата денег, если продукция не соответствует заявленным характеристикам. А так же гарантируем исполнени</p>
					<p className="h_11 myblack m-0 d-md-none">Мы уверены в качестве своей продукции, поэтому даем гарантию полного возврата денег, если продукция не соответствует заявленным характеристикам. А так же гарантируем исполнени</p>
			</div>
		</div>
    );
  }
}