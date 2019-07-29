import React, {Component} from 'react';
import Link                     from 'next/link'
import { Container, Row, Col, Carousel }  from 'react-bootstrap'

import OurProductionDesktop from './OurProductionDesktop'
import OurProductionMobil from './OurProductionMobil'

import './OurProduction.less';

export default class OurProduction extends Component{
  render() {
    return(
      <div className="OurProduction container-fluid">
        <OurProductionDesktop/>
        <OurProductionMobil/>
      </div>
    );
  }
}
