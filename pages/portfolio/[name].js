import App from '../../components/App'
import Head from 'next/head'

import { useRouter } from 'next/router';

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PortfolioItem from '../../components/Portfolio/PortfolioItem'

import { withApollo } from '../../lib/apollo'

const Portfolio = (props) => {
  const router = useRouter();
  const { name } = router.query;

  return (  
    <App>
      <Head>
          <title>Портфолио | Визитки - Aidaprint</title>
        </Head>
        <Header />
        <PortfolioItem urlName={name}/>
        <Footer />
      </App>
    )
  }

export default withApollo(Portfolio)
