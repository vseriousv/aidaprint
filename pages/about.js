import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import AboutBlock from '../components/AboutBlock/AboutBlock'
import AboutAdvantageBlock from '../components/AboutAdvantageBlock/AboutAdvantageBlock'
import AboutWeWorking from '../components/AboutWeWorking/AboutWeWorking'
import AboutGaranties from '../components/AboutGaranties/AboutGaranties'
import AboutHistory from '../components/AboutHistory/AboutHistory'

import { withApollo } from '../lib/apollo'

const About = (props) => (
  <App>
    <Head>
      <title>Aidaprint | О нас</title>
    </Head>
    <Header />
    <AboutBlock />
    <AboutAdvantageBlock />
    <AboutWeWorking />
    <AboutGaranties />
    <AboutHistory />
    <Footer />
  </App>
)

export default withApollo(About)
