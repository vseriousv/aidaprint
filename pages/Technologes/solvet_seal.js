import App from '../../components/App'
import Head from 'next/head'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import SolvetSeal from '../../components/Technologes/SolvetSeal'

import { withApollo } from '../../lib/apollo'

const solvetSeal = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Сольветная печать</title>
    </Head>
    <Header />
    <SolvetSeal />
    <Footer />
  </App>
)

export default withApollo(solvetSeal)