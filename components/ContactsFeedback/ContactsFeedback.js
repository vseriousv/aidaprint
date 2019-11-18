import React, {Component} from 'react';
import Recaptcha from "react-recaptcha";

import './ContactsFeedback.less';

export default class ContactsFeedback extends Component{

	verifyCallback = ()  => {
		console.log('Done!!!!');
	};

  render() {
    return(
		<div className="feedback mb-5">
			<div className="container">
				<div className="row">
					<div className="col-12 col-sm-6 mb-3">
						<div className="box_sms">
							<textarea type="text" name="" className="input_sms" placeholder="Сообщение"></textarea>
						</div>
					</div>
					<div className="col-12 col-sm-6 mb-3">
						<div className="box_data">
							<input type="text" name="" className="data_client text-center" placeholder="Имя" />
							<input type="text" name="" className="data_client text-center" placeholder="E-mail" />
						</div>
					</div>
					<div className="col-12 col-sm-6 security offset-sm-6 justify-content-center justify-content-sm-start">
						<div className="capcha_box mb-4">
							<Recaptcha
								sitekey="6LeHA7oUAAAAABmSgN0MbTrSAjOSonBbqeaS43l3"
								render="explicit"
								className="captchaReact"
								onloadCallback={this.verifyCallback}
							/>
						</div>
						<div className="security_box mb-4">
							<input className="check_cec" name="" type="checkbox" value="" id="defaultCheck2" />
							 <label className="consent h_14 myblack" for="defaultCheck2">
								 Я даю своё согласие на обработку персональных данных в соответствии с
                                    <a href="" className="site_rules">правилами сайта</a>
							 </label>
						</div>
						<div class="data_button">
							<button className="button_send h_14 myblack"><strong>Отправить</strong></button>
							<div className="button_send_before"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}
