import App from '../components/App'
import React from 'react'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import PrintsPreviewBlock from '../components/Prints/PrintsPreviewBlock/PrintsPreviewBlock'
import PrintsAdvantageCardBlocks from '../components/Prints/PrintsAdvantageCardBlocks/PrintsAdvantageCardBlocks'
import ProductionPortfolio from '../components/ProductionPortfolio/ProductionPortfolio'

import './index.less'

class Photo_production extends React.Component {
  static route = '/prints/:name';
  pageQuery = gql`
  query page{
    page(url: "/photo_production/${this.props.router.query.name}"){
      id
      name
      text
      sectionID
      url
    }
  }
  `
  render () {
    return(
    <App>
      <Query query={this.pageQuery}>
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
        <ProductionPortfolio />
        <Footer />
    </App>
  );
}}

export default withRouter(Photo_production)
