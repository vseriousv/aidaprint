import App from '../components/App'
import Head from 'next/head'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ContactMap from '../components/ContactsMap/ContactsMap'
import ContactsAddress from '../components/ContactsAddress/ContactsAddress'
import ContactsFeedback from '../components/ContactsFeedback/ContactsFeedback'

import { withApollo } from '../lib/apollo'

const Contact_us = (props) => (
  <App>
    <Head>
        <title>Aidaprint | Контакты</title>
        <script src="https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_6LepU8MUAAAAAI0wPoyuXi97aSLp4o90aQB2_lnJ"></script>
    </Head>
    <Header />
    <ContactMap />
    <ContactsAddress />
    <ContactsFeedback />
    <Footer />
  </App>
)

export default withApollo(Contact_us);
