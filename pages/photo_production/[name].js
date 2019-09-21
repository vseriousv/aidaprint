import App from '../../components/App'
import React from 'react'
import Head from 'next/head'
import gql from 'graphql-tag'
import { useRouter } from 'next/router';

import { withApollo } from '../../lib/apollo'

import { useQuery } from '@apollo/react-hooks'
import { NetworkStatus } from 'apollo-client'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PrintsPreviewBlock from '../../components/Prints/PrintsPreviewBlock/PrintsPreviewBlock'
import PrintsAdvantageCardBlocks from '../../components/Prints/PrintsAdvantageCardBlocks/PrintsAdvantageCardBlocks'
import ProductionPortfolio from '../../components/ProductionPortfolio/ProductionPortfolio'
// import PrintsCalculator from '../../components/Prints/PrintsCalculator/PrintsCalculator'


const Photo_production =  () => {

  const router = useRouter();
  const { name } = router.query;
  
  const PAGE_QUERY = gql`
  query PAGE_QUERY{
      page(url: "/photo_production/${ name }"){
      id
      name
      text
      sectionID
      url
      }
  }
  `
    const { loading, error, data, fetchMore, networkStatus } = useQuery(
      PAGE_QUERY,
      {
        notifyOnNetworkStatusChange: true
      }
    )
  
    if (error) return <div>ERROR</div>
    if (loading) return <div>Loading</div>
  
    const { page } = data

    return(
    <App>
        <Head>
          <title>Aidaprint | {page.name}</title>
        </Head>
        <Header />
        <PrintsPreviewBlock />
        <PrintsAdvantageCardBlocks />
        <ProductionPortfolio />
        <Footer />
    </App>
  );
}

export default withApollo(Photo_production)
