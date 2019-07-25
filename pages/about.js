import App from '../components/App'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Head from 'next/head'

import './index.less'

export default () => (
  <App>
    <Head>
      <title>Aidaprint | О нас</title>
    </Head>
      <Header />
      <div className="hello_Two text-center"><h1>This is The About Page</h1></div>
      <div className="hello_one text-center"><h2> At the moment the page is under construction!</h2></div>
      <Footer />
  </App>
)
