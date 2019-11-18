import React, {Component} from 'react';
import { ReCaptcha } from 'react-recaptcha-google'

import './ContactsFeedback.less';

export default class ContactsFeedback extends Component{
	constructor(props, context) {
		super(props, context);
		this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
		this.verifyCallback = this.verifyCallback.bind(this);
	}

	componentDidMount() {
		if (this.captchaDemo) {
			console.log("started, just a second...")
			this.captchaDemo.reset();
		}
	}
	onLoadRecaptcha() {
		if (this.captchaDemo) {
			this.captchaDemo.reset();
		}
	}
	verifyCallback(recaptchaToken) {
		// Here you will get the final recaptchaToken!!!
		console.log(recaptchaToken, "<= your recaptcha token")
	}

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
						{/*<div className="capcha_box mb-4">*/}
							<ReCaptcha
								ref={(el) => {this.captchaDemo = el;}}
								size="normal"
								data-theme="light"
								render="explicit"
								sitekey="6LeHA7oUAAAAABmSgN0MbTrSAjOSonBbqeaS43l3"
								onloadCallback={this.onLoadRecaptcha}
								verifyCallback={this.verifyCallback}
							/>
						{/*</div>*/}
						<div className="security_box mb-4">
							<input className="check_cec" name="" type="checkbox" value="" id="defaultCheck2" />
							 <label className="consent h_14 myblack" htmlFor="defaultCheck2">
								 Я даю своё согласие на обработку персональных данных в соответствии с
                                    <a href="" className="site_rules">правилами сайта</a>
							 </label>
						</div>
						<div className="data_button">
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
