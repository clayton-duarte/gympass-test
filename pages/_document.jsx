import Document, { Head, Main, NextScript as Script } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  // pré renderiza os estilos
  static getInitialProps({ renderPage }) {
    const sSs = new ServerStyleSheet();
    const page = renderPage(App => props => sSs.collectStyles(<App {...props} />));
    const styleTags = sSs.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="pt-BR">
        <Head>
          {/* responsividade */}
          <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          {/* estilos globais */}
          <style>{'body{font-family:system-ui,sans-serif;font-size:16px;color:#222;margin:0;}'}</style>
          {/* estilos pré renderizados */}
          {this.props.styleTags}
        </Head>
        <body>
          {/* APP */}
          <Main />
          {/* NEXT.JS */}
          <Script />
        </body>
      </html>
    );
  }
}
