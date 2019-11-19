import React, {Component} from 'react';
import { ReCaptcha } from 'react-recaptcha-google'

import './ContactsFeedback.less';

export default class ContactsFeedback extends Component{
	constructor(props, context) {
	super(props, context);

		this.state = {
			userEmail: "",
			userName: "",
			userMassage: "",
			reCapcha: true,
			userConsent: true
		};
		this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
		this.verifyCallback = this.verifyCallback.bind(this);

		this.handleCheck = this.handleCheckEmail.bind(this);
		this.handleCheck = this.handleCheckName.bind(this);
		this.handleCheck = this.handleCheckMassage.bind(this);
		// this.handleCheck = this.handleCheckCapcha.bind(this);
		this.handleCheck = this.handleCheckConsent.bind(this);

	  }

	  handleCheckEmail = (event) => {
		this.setState({userEmail: event.target.value});
		event.target.setAttribute("style", "border: 1px solid rgb(169, 169, 169);");
	  }
	  handleCheckName = (event) => {
		this.setState({userName: event.target.value});
		event.target.setAttribute("style", "border: 1px solid rgb(169, 169, 169);");
	  }
	  handleCheckMassage = (event) => {
		this.setState({userMassage: event.target.value});
		event.target.setAttribute("style", "border: 1px solid rgb(169, 169, 169);");
	  }
	//   handleCheckCapcha = () => {
	// 	this.setState({reCapcha: this.state.reCapcha ? false : true});
	//   }
	  handleCheckConsent = () => {
		this.setState({userConsent: this.state.userConsent ? false : true});
	  }
	 
	  handleSubmit = (event) => {
		event.preventDefault();
		console.log (	this.state.userEmail, 
						this.state.userName, 
						this.state.userMassage, 
						this.state.reCapcha, 
						this.state.userConsent);

		if (this.state.userEmail == "") {
			let inputEmail = document.getElementById ("clientMail");
			inputEmail.setAttribute("style", "border: 2px solid rgb(192, 0, 32);")
		}
		
		if (this.state.userName == "") {
			let inputName = document.getElementById ("clientName");
			inputName.setAttribute("style", "border: 2px solid rgb(192, 0, 32);")
		}

		if (this.state.userMassage == "") {
			let inputTxt = document.getElementById ("inputSms");
			inputTxt.setAttribute("style", "border: 2px solid rgb(192, 0, 32);")
		}
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
		<form onSubmit={this.handleSubmit}>
			<div className="feedback mb-5">		
				<div className="container">
					<div className="row">
						<div className="col-12 col-sm-6 mb-3">
							<div className="box_sms">
								<textarea 	id="inputSms"
											type="text" 
											className="input_sms" 
											placeholder="Сообщение" 
											value={this.state.userMassage} 
											onChange={this.handleCheckMassage}>
								</textarea> 
							</div> 
						</div>	
						<div className="col-12 col-sm-6 mb-3">
							<div className="box_data">
								<input 	id="clientName"
										type="text" 
										className="data_client text-center" 
										placeholder="Имя" value={this.state.userName} 
										onChange={this.handleCheckName}/>

								<input 	id="clientMail"
										type="text" 
										className="data_client text-center" 
										placeholder="E-mail" 
										value={this.state.userEmail} 
										onChange={this.handleCheckEmail}/>
							</div>
						</div>
						<div className="col-12 col-sm-6 security offset-sm-6 justify-content-center justify-content-sm-start">
							<div className="mb-4">
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
							</div>
							<div className="security_box mb-4">
								<input 	className="check_cec" 
										type="checkbox" 
										onClick={this.handleCheckConsent} 
										checked={this.state.userConsent} 
										id="defaultCheck2" />

								<label className="consent h_14 myblack" htmlFor="defaultCheck2">
									Я даю своё согласие на обработку персональных данных в соответствии с
									<a href="" className="site_rules"> правилами сайта</a>
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
		</form>
    );
  }
}
