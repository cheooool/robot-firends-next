import App, { Container } from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'SEGA LOGO FONT';
    font-style: normal;
    font-weight: normal;
    src: local('SEGA LOGO FONT'), url('/static/font/SEGA.woff') format('woff');
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Container>
        <Provider store={reduxStore}>
          <GlobalStyle />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
