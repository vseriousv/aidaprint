import App from '../../components/App'
import Head from 'next/head'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Letterpress from '../../components/Technologes/Letterpress'

import { withApollo } from '../../lib/apollo'

const letterpress = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Технологии | Высокая печать</title>
    </Head>
    <Header />
    <Letterpress />
    <Footer />
  </App>
)

export default withApollo(letterpress)