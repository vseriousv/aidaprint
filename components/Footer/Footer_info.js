import React, {Component}       from 'react'
import { Container, Row, Col }  from 'react-bootstrap'
import Footer_leftBlock         from './Footer_leftBlock'
import Footer_centerBlock       from './Footer_centerBlock'
import Footer_rightBlock        from './Footer_rightBlock'

export default class Footer_info extends Component {
  render(){
      return(
        <div className="footerInfo">
          <Container className="footer-Bar">
            <Row className="py-3">
              <Col className="" lg={4} sm={12}><Footer_leftBlock /></Col>
              <Col className="" lg={4} sm={6}><Footer_centerBlock /></Col>
              <Col className="" lg={4} sm={6}><Footer_rightBlock /></Col>
            </Row>
          </Container>
        </div>
      );
  }
}
