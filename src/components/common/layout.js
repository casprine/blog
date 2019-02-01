import React, { Fragment } from "react";
import { ContextConsumer } from "../../context/index";
import Head from "next/head";
import { body } from "./theme";
import styled, { ThemeProvider } from "styled-components";

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
            <ThemeProvider theme={{ mode: theme }}>
              <StyledLayout>
                <div>
                  <div style={layoutStyles.wrapper}>{children}</div>
                </div>
              </StyledLayout>
            </ThemeProvider>
          );
        }}
      </ContextConsumer>
    </Fragment>
  );
};

const StyledLayout = styled.div`
  background: ${body};
`;

export default Layout;
