import React, {Component} from 'react';

export default class Header_leftBlock extends Component {
    render(){
        return(
        <div className="callBlock d-lg-flex">
            <div className='callMenu callMenuDesktop d-lg-block d-none'>
                <a href="tel:+73832079393"><span><b>+7 (383) 207 93 93</b> (Новосибирск)</span></a><br />
                <a href="tel:88005556153"><span><b>8 800 555 61 53</b> (Звонок бесплатный)</span></a>
            </div>
        </div>
        );
    }
}