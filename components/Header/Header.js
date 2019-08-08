import Link                     from 'next/link'
import { Container, Row, Col }  from 'react-bootstrap'
import Header_leftBlock         from './Header_leftBlock'
import Header_rightBlock        from './Header_rightBlock'
import Header_centerBlock       from './Header_centerBlock'
import Header_navbar            from './Header_navbar'
import PaddingComponent         from './PaddingComponent'

import './Header.less';



const Header = () => (

  <header>
    <Container className="header-Bar">
      <Row className="py-3">
        <Col className="my-auto" md={4} sm={1}><Header_leftBlock /></Col>
        <Col className="my-auto" md={4} sm={10}><Header_centerBlock /></Col>
        <Col className="my-auto" md={4} sm={1}><Header_rightBlock /></Col>
      </Row>
    </Container>
    <Header_navbar />
    <PaddingComponent />
  </header>
)

export default Header;
