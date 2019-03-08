import React, { Fragment } from "react";
import { Logo, ThemeChanger } from "../common/index";
import styled from "styled-components";
import { ContextConsumer } from "../../context";
import { footer, footerText } from "../common/theme";
import Link from "next/link";

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
      {({ footer, toggleFooter, theme }) => (
        <>
          <StyledBottomNav>
            <div className={footer ? "nav" : "none"}>
              <div className="switch">
                <ThemeChanger />
              </div>
              <nav>
                <div className="link">
                  <a href="https://web-kun.netlify.com/">
                    <span>home</span>
                  </a>
                </div>

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

              <div className="social">
                <Link href="https://dribbble.com/casprine">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20px"
                      height="20px"
                      fill="#ea4c89"
                    >
                      <path d="M256 64C150 64 64 150 64 256c0 106.1 86 192 192 192s192-85.9 192-192c0-106-86-192-192-192zm121.9 88.5c21.6 25.4 35.3 57.6 37.7 92.9-34.6-1.8-76-1.8-109.2 1.3-4.2-10.6-8.5-21-13.2-31 38.3-16.6 67.8-38.4 84.7-63.2zM256 96c38.8 0 74.4 13.8 102.1 36.8-17.4 22-44.7 41.1-78.7 55.6-18.6-34.4-40-64-62.8-87.3 12.7-3.2 25.8-5.1 39.4-5.1zm-72.4 17.5c23.1 23 44.8 52.3 63.8 86.6-36.1 11-77.5 17.3-121.7 17.3-8.4 0-16.6-.3-24.7-.8 11.5-45.1 42-82.5 82.6-103.1zM96.3 248.4c9.1.4 18.3.6 27.6.5 50.4-.6 97.3-8.5 137.6-21.4 3.8 7.9 7.4 16 10.8 24.3-5.5 1.3-10.4 2.7-14.3 4.3-55.1 23.1-98.5 60.4-122 105.5-24.8-28.2-40-65.1-40-105.6 0-2.6.1-5.1.3-7.6zM256 416c-37 0-71-12.6-98.1-33.7 21.3-42.2 59.3-77.1 107.2-98.8 4.5-2.1 10.5-3.8 17.4-5.3 5.7 15.8 10.8 32.2 15.3 49.2 6.9 26.5 11.8 52.7 14.8 78.1C295 412.2 276 416 256 416zm86.5-25.5c-3-25.7-7.9-52.1-14.9-78.9-3.4-13-7.3-25.6-11.5-37.9 31.4-2.6 69-2.2 98.9 0-5.4 49.1-33 91.3-72.5 116.8z" />
                    </svg>
                  </i>
                </Link>

                <Link href="https://www.twitter.com/casprine">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20px"
                      height="20px"
                      fill="rgb(0, 172, 237)"
                    >
                      <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                    </svg>
                  </i>
                </Link>
                <Link href="https://www.github.com/casprine">
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      width="20px"
                      height="20px"
                      fill={theme ? "black" : "white"}
                    >
                      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                    </svg>
                  </i>
                </Link>
              </div>
            </div>
            <div className="bar">
              <div className="logo">
                <Link href="/">
                  <img
                    src={
                      theme
                        ? "../../../static/images/circle-dark.webp"
                        : "../../../static/images/circle.webp"
                    }
                    alt=""
                  />
                </Link>
              </div>
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
  display: none;
  grid-template-columns: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 199999;
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

    img {
      width: 24px;
      height: 24px;
    }

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
    animation: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

  .social {
    margin: 0 auto;
    padding: 16px 30px;

    i {
      padding: 0 10px;
    }
  }

  .switch {
    padding: 12px 24px;
  }
`;

export default Navbar;
