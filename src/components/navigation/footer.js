import React, { Fragment } from "react";
import Link from "next/link";
import { Logo } from "../common/index";
import { ContextConsumer } from "../../context/index";
import styled from "styled-components";
const Footer = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => (
        <StyledFooter className="footer padding-bottom center">
          <div className="logo-wrapper">
            <Logo />
          </div>
          <div className="ca-routes">
            <Link href="https://dribbble.com/casprine">
              <span className={theme ? "lightText" : "darkText"}>Dribbble</span>
            </Link>
            <Link href="https://www.uplabs.com/casprine">
              <span className={theme ? "lightText" : "darkText"}>Uplabs</span>
            </Link>
            <Link href="https://www.twitter.com/casprine">
              <span className={theme ? "lightText" : "darkText"}>Twitter</span>
            </Link>
            <Link href="https://www.github.com/casprine">
              <span className={theme ? "lightText" : "darkText"}>Github</span>
            </Link>
            {/* <Link to="/writings" className="link-inverse">
          <span className="link white">Bookmarked</span>
        </Link> */}
          </div>
        </StyledFooter>
      )}
    </ContextConsumer>
  </Fragment>
);

const StyledFooter = styled.nav`
  .logo-wrapper {
    margin-right: auto;
  }

  .ca-routes {
    width: 30%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    span {
      padding-bottom: 8px;
      border-bottom: 2px solid transparent;
      -webkit-transition: all 200ms ease;
      transition: all 200ms ease;
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid $primary;
      }
    }

    @media (max-width: 450px) {
      width: 100%;
      padding: 30px 0 20px 0;

      * {
        margin: 5px;
      }
    }
  }
  @media (max-width: 450px) {
    .logo-wrapper {
      width: 100%;
      margin-top: 20px;
    }
  }
`;

export default Footer;
