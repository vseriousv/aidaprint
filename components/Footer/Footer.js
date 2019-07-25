import Link                       from 'next/link'
import { Container, Row, Col }    from 'react-bootstrap'
import Footer_list                from './Footer_list'
import Footer_list_mobil          from './Footer_list_mobil'
import Footer_searchAndSubscribe  from './Footer_searchAndSubscribe'
import Footer_info                from './Footer_info'

import './Footer.less';

const Footer = () => (
  <footer className="w-100">
    <Footer_searchAndSubscribe />
    <Footer_list />
    <Footer_list_mobil />
    <Footer_info />
  </footer>
)
export default Footer;
