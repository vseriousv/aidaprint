import Link                     from 'next/link'
import { withRouter }           from 'next/router'
import { Container, Row, Col }  from 'react-bootstrap';
import Header_leftBlock         from './Header_leftBlock'; 
import Header_rightBlock        from './Header_rightBlock';
import Header_centerBlock       from './Header_centerBlock';

import './Header.less';

const Header = ({ router: { pathname } }) => (
  <header>
    <Container>
      <Row>
        <Col className="my-auto" md={4} sm={1}><Header_leftBlock /></Col> 
        <Col className="my-auto" md={4} sm={10}><Header_centerBlock /></Col> 
        <Col className="my-auto" md={4} sm={1}><Header_rightBlock /></Col>      
      </Row>
    </Container>

    <Link prefetch href='/'>
      <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link prefetch href='/about'>
      <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </header>
)

export default withRouter(Header)