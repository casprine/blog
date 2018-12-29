import React from "react";
import App, { Container } from "next/app";
import { ContextProvider } from "../context/index.js";
import "../static/sass/index.scss";
import "../static/sass/global.scss";
import "../static/sass/prism.scss";
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
