import App from '../../components/App'
import Head from 'next/head'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import FlatPrint from '../../components/Technologes/FlatPrint'

import { withApollo } from '../../lib/apollo'

const flatPrint = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Офсетная печать</title>
    </Head>
    <Header />
    <FlatPrint />
    <Footer />
  </App>
)

export default withApollo(flatPrint)