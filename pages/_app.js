import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import { ContextProvider } from "../src/context/index.js";
import "./bundle.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <html lang="en" />
        </Head>
        <ContextProvider value="light">
          <Component {...pageProps} />
        </ContextProvider>
      </Container>
    );
  }
}

export default MyApp;
