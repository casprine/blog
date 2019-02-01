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
                <h2>All Writings</h2>
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
    span {
      color: ${grey};
    }
  }

  .heading {
    font-size: 25px;

    h2 {
      color: ${white};
    }
  }
`;

export default SectionHeader;
