import App from '../components/App'
import Head from 'next/head'
import SliderMainPage from  '../components/SliderMainPage/SliderMainPage'
import OurProduction from   '../components/OurProduction/OurProduction'
import AdvantagesBlock from '../components/AdvantagesBlock/AdvantagesBlock'
import Whatsnews from '../components/Whatsnews/Whatsnews'
import './index.less'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class Index extends React.Component {

  render () {
    return (
      <App>
        <Head>
          <title>Aidaprint | Главная страница</title>
        </Head>
        <Header />
          <SliderMainPage />
          <OurProduction />
          <AdvantagesBlock />
          <Whatsnews />
        <Footer />
      </App>
    )
  }
}
export default Index;
