import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Materials from '../components/Technologes/Materials'

import { withApollo } from '../lib/apollo'

const materials = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Материалы</title>
    </Head>
    <Header />
    <Materials />
    <Footer />
  </App>
)

export default withApollo(materials)