import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import DigitalPrinting from '../components/Technologes/DigitalPrinting'

import { withApollo } from '../lib/apollo'

const digitalPrinting = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Цифровая печать</title>
    </Head>
    <Header />
    <DigitalPrinting />
    <Footer />
  </App>
)

export default withApollo(digitalPrinting)