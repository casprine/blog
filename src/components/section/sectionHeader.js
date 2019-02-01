import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ContextConsumer } from "../../context/index";
import { white, black, grey } from "../common/index";

const SectionHeader = () => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme }) => {
          console.log(theme);
          return (
            <ThemeProvider theme={{ mode: theme }}>
              <StyledSection>
                <img
                  src="https://2ality.com/2011/10/logo-js/js.jpg"
                  alt="jsImage"
                />
                <StyledHeading>All Writings</StyledHeading>
                <StyledDescription className="desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus sit ratione sapiente maiores iste totam
                </StyledDescription>
              </StyledSection>
            </ThemeProvider>
          );
        }}
      </ContextConsumer>
    </Fragment>
  );
};

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "book";
  img {
    width: 50px;
    height: 50px;
    padding: 15px 0;
  }

  div {
    padding: 10px 0;
  }
`;

const StyledHeading = styled.div`
  font-size: 35px;
  color: ${black};
`;

const StyledDescription = styled.div`
  color: ${grey};
  font-size: 18px;
`;

export default SectionHeader;
