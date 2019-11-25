import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import InkjetPrinting from '../components/Technologes/InkjetPrinting'

import { withApollo } from '../lib/apollo'

const inkjetPrinting = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Струйная печать</title>
    </Head>
    <Header />
    <InkjetPrinting />
    <Footer />
  </App>
)

export default withApollo(inkjetPrinting)