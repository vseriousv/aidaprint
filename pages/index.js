import App from '../components/App'
import Head from 'next/head'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import SliderMainPage from '../components/SliderMainPage/SliderMainPage'

import './index.less'


export default () => (
  <App>
    <Head>
      <title>Aidaprint | Главная страница</title>
    </Head>
    <Header />
    <SliderMainPage />
    <div className="hello_Two text-center"><h1>This is The Main Page</h1></div>
    <div className="hello_one text-center"><h2>At the moment the page is under construction!</h2></div>
    <Footer />
  </App>
)
