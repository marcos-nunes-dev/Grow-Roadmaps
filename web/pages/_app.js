import App, { Container } from 'next/app';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import withApolloClient from '../libs/with-apollo-client';
import withReduxStore from '../libs/with-redux-store';
import { StoreContext } from 'redux-react-hook';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <Provider store={reduxStore}>
              <StoreContext.Provider value={reduxStore}>
                <Component {...pageProps} />
              </StoreContext.Provider>
            </Provider>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(withReduxStore(MyApp));
