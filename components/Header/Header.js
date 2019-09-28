import { Container, Row, Col }  from 'react-bootstrap'
import Header_leftBlock         from './Header_leftBlock'
import Header_rightBlock        from './Header_rightBlock'
import Header_centerBlock       from './Header_centerBlock'
import Header_navbar            from './Header_navbar'
import Header_navbar_Fixed      from './Header_navbar_Fixed'
import PaddingComponent         from './PaddingComponent'

import './HeaderStyle.less';

class Header extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll = () => {

    var no_fixed_menu_bar = document.getElementById("no_fixed_menu_bar");
    var fixed_menu_bar = document.getElementById("fixed_menu_bar");
    if(window.scrollY <= "80"){
      no_fixed_menu_bar.classList.remove("d-none");
      fixed_menu_bar.classList.add("d-none");
    }else{
      fixed_menu_bar.classList.remove("d-none");
      no_fixed_menu_bar.classList.add("d-none");
    }
  }

  setMegaMenuDouble = (valueID) => {
    this.setState({megaMenuDouble: valueID})
  }
render() {
  // console.log(this.state.scroll_Y);
  return(
    <header>
      <Container className="header-Bar">
        <Row className="py-3">
          <Col className="my-auto" md={4} sm={1}><Header_leftBlock /></Col>
          <Col className="my-auto" md={4} sm={10}><Header_centerBlock /></Col>
          <Col className="my-auto" md={4} sm={1}><Header_rightBlock /></Col>
        </Row>
      </Container>
      <div id="no_fixed_menu_bar" className="container-fluid">
        <Row>
          <Header_navbar />
        </Row>
      </div>
      <div id="fixed_menu_bar" className="container-fluid d-none">
        <Row>
          <Header_navbar_Fixed />
        </Row>
      </div>
      <PaddingComponent />
    </header>
  )
}}

export default Header;
