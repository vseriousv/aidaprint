import App from '../../components/App'
import Head from 'next/head'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import LatexPrint from '../../components/Technologes/LatexPrint'

import { withApollo } from '../../lib/apollo'

const latexPrint= (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Латексная печать</title>
    </Head>
    <Header />
    <LatexPrint />
    <Footer />
  </App>
)

export default withApollo(latexPrint)