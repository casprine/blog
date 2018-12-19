import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html>
        <Head />

        <style jsx global>
          {`
            body {
              margin: 0;
              padding: 0;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #0e0220;
              // background-color: #f6f9fa;
              background-color: #ebf0f6;
              scroll-behavior: smooth;
            }

            .flex {
              display: flex;
            }

            .flex-wrap {
              display: flex;
              flex-wrap: wrap;
            }
          `}
        </style>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
