import React, {Component} from 'react';

export default class ContactsAddress extends Component{
  render() {
    return(
    <>
        <div className="contacts myblu_box px-3 py-5 d-none d-sm-flex">
            <h2 className="h_18_app text-center mywhite mb-4">Контакты</h2>
            <div className="address h_14 mywhite d-flex mb-3 w-100 mx-auto">
                <p className="m-0 mr-4 w-50 text-right">
                    г. Новосибирск, ул. Димитрова, 18, вход со стороны площади Кондратюка
                </p>
                <p className="m-0 w-50">
                    +7 383 207 93 93 <br />
                    8 800 555 61 53 (звонок бесплатный)
                </p>
            </div>
            <div className="h_14 mywhite d-flex w-100">
                <p className="m-0 mr-4 w-50 text-right">
                    9:00 — 18:00 будние дни
                </p>
                <p className="m-0 w-50">
                    welcome@aidaprint.ru
                </p>
            </div>
        </div>
        <div className="contacts myblu_box px-3 py-4 d-sm-none">
            <h2 className="h_18_app text-center mywhite mb-4">Контакты</h2>
            <p className="h_14 mywhite mb-2 w-75 mx-auto text-center">
                г. Новосибирск, ул. Димитрова, 18, вход со стороны площади Кондратюка
            </p>
            <p className="h_14 mywhite mb-4 w-100 m-0 text-center">
                +7 383 207 93 93 <br />
                8 800 555 61 53 (звонок бесплатный)
            </p>
            <p className="h_14 mywhite mb-2 w-100 m-0 text-center">
                9:00 — 18:00 будние дни
            </p>
            <p className="h_14 mywhite w-100 m-0 text-center">
                welcome@aidaprint.ru
            </p>
        </div>
    </>
    )
  }
}