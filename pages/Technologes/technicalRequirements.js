import App from '../../components/App'
import Head from 'next/head'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import TechnicalRequirements from '../../components/Technologes/TechnicalRequirements'

import { withApollo } from '../../lib/apollo'

const technicalRequirements = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Технические требоваия</title>
    </Head>
    <Header />
    <TechnicalRequirements />
    <Footer />
  </App>
)

export default withApollo(technicalRequirements)