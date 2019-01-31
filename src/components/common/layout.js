import React, { Fragment } from "react";
import { ContextConsumer } from "../../context/index";
import Head from "next/head";

const layoutStyles = {
  wrapper: {
    width: "85vw",
    minHeight: "100vh",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column"
  }
};

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ContextConsumer>
        {({ theme }) => {
          return (
            <body className={theme ? "dark" : "light"}>
              <div>
                <div style={layoutStyles.wrapper}>{children}</div>
                {/* <style jsx>{`
                  @font-face {
                    font-family: "circular";
                    src: url("../../static/fonts/ciruclar.ttf");
                    font-weight: normal;
                    font-style: normal;
                    font-display: auto;
                  }

                  @font-face {
                    font-family: "geo";
                    src: url("../../static/fonts/geo.ttf");
                    font-weight: normal;
                    font-style: normal;
                    font-display: auto;
                  }
                `}</style> */}
              </div>
            </body>
          );
        }}
      </ContextConsumer>
    </Fragment>
  );
};

export default Layout;
