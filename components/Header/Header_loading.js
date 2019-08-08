import React, {Component}       from 'react'
import { Query }                from 'react-apollo'
import gql                      from 'graphql-tag'
import { Container, Row, Col }  from 'react-bootstrap'
//import Link                     from 'next/link'
import { Link, Router } from '../../routes'

import Header_MobilMenu         from './Header_MobilMenu'

export default class Header_loading extends Component {
  render(){
    return(
      <div id="fixedMenuBar" className="container-fluid d-none">
      <div id="megaMenu1" className="container-fluid MegaMenu MegaMenu-top-one d-none"></div>
      <div id="megaMenu4" className="container-fluid MegaMenu MegaMenu-top-one d-none"></div>
      </div>
      );
  }
}
