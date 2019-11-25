import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import UVprinting from '../components/Technologes/UVprinting'

import { withApollo } from '../lib/apollo'

const uvPrinting = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | УФ печать</title>
    </Head>
    <Header />
    <UVprinting />
    <Footer />
  </App>
)

export default withApollo(uvPrinting)