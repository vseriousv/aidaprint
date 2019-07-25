import React, {Component} from 'react'

export default class Footer_rightBlock extends Component {
    render(){
        return(
        <p className="footerAddress text-center text-sm-left">
          <span className="colorBlack font-weight-bold">Новосибирск</span> проспект Димитрова, 18
          вход со стороны площади Кондратюка,
          Метро “Площадь Ленина”, “Красный проспект”
        </p>
        );
    }
}
