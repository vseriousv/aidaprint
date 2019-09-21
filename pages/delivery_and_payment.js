import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import DelAndPay_Del from '../components/DelAndPay_Del/DelAndPay_Del'
import DelAndPay_Pay from '../components/DelAndPay_Pay/DelAndPay_Pay'

import { withApollo } from '../lib/apollo'

const Del_and_Pay = (props) => (
  <App>
    <Head>
      <title>Aidaprint | Контакты</title>
    </Head>
    <Header />
      <div style={{height: "10px"}}></div>
    <DelAndPay_Pay />
    <DelAndPay_Del />        
    <Footer />
  </App>
)

export default withApollo(Del_and_Pay)
