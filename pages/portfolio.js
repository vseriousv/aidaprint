import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Portfolio from '../components/Portfolio/Portfolio'

import { withApollo } from '../lib/apollo'

const About = (props) => (
  <App>
    <Head>
      <title>Aidaprint | О нас</title>
    </Head>
    <Header />
    <Portfolio />
    <Footer />
  </App>
)

export default withApollo(About)
