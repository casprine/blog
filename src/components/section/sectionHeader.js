import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ContextConsumer } from "../../context/index";
import { white, grey } from "../common/index";

const SectionHeader = () => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme }) => (
          <ThemeProvider theme={{ mode: theme }}>
            <StyledSectionHeader>
              <img src="http://2ality.com/2011/10/logo-js/js.jpg" alt="" />
              <div className="heading book">
                <span>All Writings</span>
              </div>
              <div className="description medium">
                <span>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Soluta
                </span>
              </div>
            </StyledSectionHeader>
          </ThemeProvider>
        )}
      </ContextConsumer>
    </Fragment>
  );
};

const StyledSectionHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  div {
    padding: 15px 0;
    text-align: center;
  }

  img {
    width: 45px !important;
    height: 45px !important;
    border-radius: 4px;
  }

  .description {
    font-size: 20px;

    span {
      color: ${grey};
    }
  }

  .heading {
    font-size: 40px;
    span {
      color: ${white};
    }
  }
`;

export default SectionHeader;
