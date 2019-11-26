import App from '../../components/App'
import Head from 'next/head'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import GravurePrinting from '../../components/Technologes/GravurePrinting'

import { withApollo } from '../../lib/apollo'

const gravurePrinting = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Глубокая печать</title>
    </Head>
    <Header />
    <GravurePrinting />
    <Footer />
  </App>
)

export default withApollo(gravurePrinting)