import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

class MyApp extends App {
  render () {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
