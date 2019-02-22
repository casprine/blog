import React, { Fragment } from "react";
import { Logo, ThemeChanger } from "../common/index";
import styled from "styled-components";
import { ContextConsumer } from "../../context";
import { footer, footerText } from "../common/theme";

// const logger = () => {
//   console.log("clicked");
//   alert("Logged");
// };

const Navbar = () => (
  <Fragment>
    <StyledNavbar className="padding-top">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="themeToggler-wrapper">
        <ThemeChanger />
      </div>
    </StyledNavbar>

    <ContextConsumer>
      {({ footer, toggleFooter }) => (
        <>
          <StyledBottomNav>
            <div className={footer ? "nav" : "none"}>
              <div className="switch">
                <ThemeChanger />
              </div>
              <nav>
                <div className="link">
                  <a href="https://web-kun.netlify.com/work">
                    <span>Work</span>
                  </a>
                </div>

                <div className="link">
                  <a href="https://web-kun.netlify.com/design">
                    <span>Design</span>
                  </a>
                </div>
              </nav>
            </div>
            <div className="bar">
              <div className="logo">c</div>
              <div className="open" onClick={toggleFooter}>
                <span>&#11044;</span>
                <span>&#11044;</span>
                <span>&#11044;</span>
              </div>
            </div>
          </StyledBottomNav>
        </>
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  .ca-routes {
    width: 100%;
  }
  @media (max-width: 750px) {
    display: none;
  }

  * {
    margin: 0;
  }

  .themeToggler-wrapper {
    margin-left: auto;
  }
  .ca-routes {
    width: 20%;
    display: flex;
    margin-left: auto;
    justify-content: space-between;
  }
`;

const StyledBottomNav = styled.header`
  --safePaddingBottom: env(safe-area-inset-bottom);
  padding-bottom: calc(16px + var(--safePaddingBottom));
  padding-top: calc(16px + var(--safePaddingBottom));

  display: none;
  padding: 10px 0;
  grid-template-columns: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: ${footer};
  transition: all 0.3s;
  color: ${footerText};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (max-width: 750px) {
    display: grid;
  }

  .bar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px 30px;

    .open {
      margin-left: auto;
      letter-spacing: 5px;
      font-size: 7px;
      cursor: pointer;
    }
  }

  .none {
    display: none;
  }

  .nav {
    display: grid;
  }

  nav {
    flex-direction: column;
    display: flex;
    width: 100%;
    align-items: center;
    font-family: "Book";
    .link {
      text-decoration: none;
      color: inherit;
      display: block;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      padding: 16px 30px;
      color: inherit;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }

  .switch {
    padding: 12px 24px;
  }
`;

export default Navbar;
