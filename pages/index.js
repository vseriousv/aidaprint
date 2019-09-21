import App from '../components/App'
import Head from 'next/head'
import SliderMainPage from  '../components/SliderMainPage/SliderMainPage'
import OurProduction from   '../components/OurProduction/OurProduction'
import AdvantagesBlock from '../components/AdvantagesBlock/AdvantagesBlock'
import Whatsnews from '../components/Whatsnews/Whatsnews'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

import { withApollo } from '../lib/apollo'

const IndexPage = props => (
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
export default withApollo(IndexPage)
