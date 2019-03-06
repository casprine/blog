import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import { ContextProvider } from "../src/context/index.js";
import GlobalStyle from "./global.css";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <html lang="en" />
        </Head>
        <GlobalStyle />
        <ContextProvider value="dark">
          <Component {...pageProps} />
        </ContextProvider>
      </Container>
    );
  }
}

export default MyApp;
