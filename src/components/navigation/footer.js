import React, { Fragment } from "react";
import Link from "next/link";
import { Logo } from "../common/index";
import { ContextConsumer } from "../../context/index";

const Footer = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => (
        <nav className="footer padding-bottom center">
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
        </nav>
      )}
    </ContextConsumer>

    <style jsx>{`
      .logo-wrapper {
        margin-right: auto;
      }

      @media (max-width: 450px) {
        .logo-wrapper {
          width: 100%;
          margin-top: 20px;
        }
      }
    `}</style>
  </Fragment>
);

export default Footer;
