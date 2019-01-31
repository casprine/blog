import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ContextConsumer } from "../../context/index";
import { grey, white } from "../common/index";

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
              <div className="description book">
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
    text-align: center;
  }

  img {
    width: 45px !important;
    height: 45px !important;
    border-radius: 4px;
    padding: 15px 0;
  }

  .description {
    font-size: 20px;
    text-transform: lowercase;
    color: ${white};
    span {
      color: inherit;
    }
  }

  .heading {
    font-size: 40px;
    padding: 15px 0 10px 0;
    color: ${white};

    span {
      color: inherit;
    }
  }
`;

export default SectionHeader;
