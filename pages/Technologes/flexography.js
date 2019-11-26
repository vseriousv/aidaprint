import App from '../../components/App'
import Head from 'next/head'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Flexography from '../../components/Technologes/Flexography'

import { withApollo } from '../../lib/apollo'

const flexography = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Флексография</title>
    </Head>
    <Header />
    <Flexography />
    <Footer />
  </App>
)

export default withApollo(flexography)