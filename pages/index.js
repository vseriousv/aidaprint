import App from '../components/App'
import Head from 'next/head'
import SliderMainPage from  '../components/SliderMainPage/SliderMainPage'
import OurProduction from   '../components/OurProduction/OurProduction'
import AdvantagesBlock from '../components/AdvantagesBlock/AdvantagesBlock'
import Whatsnews from '../components/Whatsnews/Whatsnews'

import './index.less'


export default () => (
  <App>
    <Head>
      <title>Aidaprint | Главная страница</title>
    </Head>
    <SliderMainPage />
    <OurProduction />
    <AdvantagesBlock />
    <Whatsnews />
  </App>
)
