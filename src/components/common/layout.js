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
              </div>
            </body>
          );
        }}
      </ContextConsumer>
    </Fragment>
  );
};

export default Layout;
