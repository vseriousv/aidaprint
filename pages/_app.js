import App, { Container } from 'next/app'
import React from 'react'
import withApolloClient from '../lib/with-apollo-client'
import { ApolloProvider } from 'react-apollo'
import { Provider } from 'react-redux'
import withReduxStore from '../lib/with-redux-store'
import withRedux    from 'next-redux-wrapper';

class MyApp extends App {
  render () {
    const { Component, pageProps, reduxStore, apolloClient } = this.props
    return (
      <ApolloProvider client={apolloClient}>
        <Container>
          <Provider store={reduxStore}>

            <Component {...pageProps} />

          </Provider>
        </Container>
      </ApolloProvider>
    )
  }
}

export default withApolloClient(withReduxStore(MyApp))
