import React, { Fragment } from "react";
import { ContextConsumer } from "../../context/index";

const ThemeChanger = () => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme, switchTheme }) => {
          return (
            <div className="theme-changer pointer" onClick={switchTheme}>
              <span role="img" aria-label="moon">
                {theme ? "🌚" : "🌝"}
              </span>
            </div>
          );
        }}
      </ContextConsumer>

      {/* <style jsx>
        {`
          div {
            margin-left: auto;
          }

          span {
            font-size: 20px !important;
          }

          span:last-child {
            font-size: 14px;
          }
        `}
      </style> */}
    </Fragment>
  );
};

export default ThemeChanger;
