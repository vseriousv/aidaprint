import App from '../../../components/App'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import PrintsPreviewBlock from '../../../components/Prints/PrintsPreviewBlock/PrintsPreviewBlock'
import PrintsAdvantageCardBlocks from '../../../components/Prints/PrintsAdvantageCardBlocks/PrintsAdvantageCardBlocks'
import ProductionPortfolio from '../../../components/ProductionPortfolio/ProductionPortfolio'
import PrintsCalculator from '../../../components/Prints/PrintsCalculator/PrintsCalculator'

import './index.less'

const Prints = () => {
  const router = useRouter()
  const { name } = router.query

  const pageQuery = gql`
  query page{
    page(url: "/prints/${ name }"){
      id
      name
      text
      sectionID
      url
    }
  }
  `
  return (
    <App>
      <Query query={pageQuery}>
           {({loading, error, data }) => {
              if (error) return `Error! ${error.message}`;
              if (loading) return <div>Loading</div>
              return (
                <>
                  <Head>
                    <title>Aidaprint | {data.page.name}</title>
                  </Head>
                  </>
                )
              }}
        </Query>
        <Header />
        <PrintsPreviewBlock />
        <PrintsAdvantageCardBlocks />
        <PrintsCalculator />
        <ProductionPortfolio />
        <Footer />
    </App>
  );
}

export default Prints
