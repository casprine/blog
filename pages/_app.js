import React from "react";
import App, { Container } from "next/app";
import { ContextProvider } from "../components/context/index.js";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ContextProvider value="light">
          <Component {...pageProps} />
        </ContextProvider>
      </Container>
    );
  }
}

export default MyApp;
