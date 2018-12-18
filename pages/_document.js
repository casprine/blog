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
            :root {
              --defaultFont: -apple-system, BlinkMacSystemFont, "Segoe UI",
                Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
                sans-serif;
            }

            // font path
            @font-face {
              font-family: "circular";
              src: url("./static/fonts/ciruclar.ttf");
              font-weight: normal;
              font-style: normal;
              font-display: auto;
            }

            .circular {
              font-family: "circular", var(--defaultFont);
            }

            body {
              margin: 0;
              padding: 0;
              font-family: "circular", var(--defaultFont);
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: #0e0220;
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
