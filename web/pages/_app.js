import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import withApolloClient from '../libs/with-apollo-client';
import withReduxStore from '../libs/with-redux-store';

class MyApp extends App {
  render () {
    const {Component, pageProps, reduxStore, apolloClient} = this.props
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(withReduxStore(MyApp))
