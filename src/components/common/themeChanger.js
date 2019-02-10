import React, { Fragment } from "react";
import { ContextConsumer } from "../../context/index";
import styled from "styled-components";
import { body, grey, white } from "./theme";

const ThemeChanger = () => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme, switchTheme }) => {
          return (
            <StyledToggler onClick={switchTheme}>
              <span className={theme ? "icon" : "light"} theme={theme}>
                {theme ? "◉" : "○"}
              </span>
              <span className="text">
                {theme ? "Night Mode" : "Light Mode"}
              </span>
            </StyledToggler>
          );
        }}
      </ContextConsumer>
    </Fragment>
  );
};

const StyledToggler = styled.div`
  color: ${white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  * {
    padding: 0 5px;
    display: block;
  }

  .light {
    line-height: 10px;
    align-self: center;
    margin-top: -2px;
    font-size: 20px;
  }
  .icon {
    margin-top: 2px;
  }

  .text {
    /* font-size: 15px; */
    font-family: "Book";
  }
`;
export default ThemeChanger;
