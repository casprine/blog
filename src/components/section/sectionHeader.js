import React, { Fragment } from "react";
import styled, { ThemeProvider } from "styled-components";
import { ContextConsumer } from "../../context/index";
import { white, black, grey } from "../common/theme";

const SectionHeader = () => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme }) => {
          return (
            <ThemeProvider theme={{ mode: theme }}>
              <StyledSection>
                <img
                  src="data:image/png;base64,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"
                  alt="jsImage"
                />
                <div className="title">All Writings</div>
                <div className="desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Natus sit ratione sapiente maiores iste totam
                </div>
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

  .title {
    color: ${white};
    font-size: 35px;
  }

  .desc {
    color: ${grey};
    text-align: center;
    line-height: 30px;
  }
`;
export default SectionHeader;
