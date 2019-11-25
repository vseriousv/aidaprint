import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ScreenPrinting from '../components/Technologes/ScreenPrinting'

import { withApollo } from '../lib/apollo'

const screenPrinting = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Трафаретная печать</title>
    </Head>
    <Header />
    <ScreenPrinting />
    <Footer />
  </App>
)

export default withApollo(screenPrinting)