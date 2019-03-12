import React, { Fragment, useEffect, useState } from "react";
import { ContextConsumer } from "../../context/index";
import styled from "styled-components";
import { white } from "./theme";

const ThemeChanger = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  });

  return (
    <Fragment>
      <ContextConsumer>
        {({ theme, toggleTheme }) => (
          <StyledToggler onClick={toggleTheme}>
            <span className={theme === "dark" ? "icon" : "light"} theme={theme}>
              {theme === "dark" ? (
                <i>
                  <svg
                    data-v-adffe394=""
                    tabIndex="0"
                    role="radio"
                    aria-checked="false"
                    aria-label="Switch to night mode"
                    data-theme-id="dark-theme"
                    width="14"
                    height="14"
                    fill={width >= 750 ? "white" : "hsl(36, 77%, 49%)"}
                    xmlns="http://www.w3.org/2000/svg"
                    className="Icon"
                  >
                    <path
                      data-v-adffe394=""
                      stroke="none"
                      d="M13.2 8.01a6.409 6.409 0 0 1-1.554.194c-3.235 0-5.823-2.577-5.823-5.797 0-.515.065-1.03.194-1.546.065-.193 0-.45-.194-.644C5.63.024 5.435-.04 5.176.024 2.136.926 0 3.76 0 6.915 0 10.845 3.17 14 7.117 14c3.17 0 6.018-2.125 6.859-5.217.064-.193 0-.45-.194-.644-.13-.129-.389-.193-.583-.129z"
                    />
                  </svg>
                </i>
              ) : (
                <StyledIcon>
                  <svg
                    data-v-adffe394=""
                    tabIndex="0"
                    role="radio"
                    aria-checked="true"
                    data-theme-id="light-theme"
                    aria-label="Switch to day mode"
                    width="18"
                    height="18"
                    fill=" hsl(36, 77%, 49%)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      data-v-adffe394=""
                      d="M1 9h.727M3.327 3.327l.51.51M9 1v.727M14.673 3.327l-.51.51M17 9h-.727M14.673 14.673l-.51-.51M9 17v-.727M3.327 14.673l.51-.51"
                      strokeWidth="1.555"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      data-v-adffe394=""
                      d="M9 13.364a4.364 4.364 0 1 0 0-8.727 4.364 4.364 0 0 0 0 8.727z"
                    />
                  </svg>
                </StyledIcon>
              )}
            </span>
          </StyledToggler>
        )}
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
    padding-top: 1px;
    font-size: 30px;
  }
  .icon {
  }

  .text {
    font-family: "gte";
  }
`;

const StyledIcon = styled.i`
  svg {
    stroke: hsl(36, 77%, 49%);
  }
`;

export default ThemeChanger;
