import React, { Fragment } from "react";
import Link from "next/link";
import { Logo } from "../common/index";

const Footer = () => (
  <Fragment>
    <nav className="footer padding-bottom center">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="ca-routes">
        <Link href="https://dribbble.com/casprine">
          <span className="link white">Dribbble</span>
        </Link>
        <Link href="https://www.uplabs.com/casprine">
          <span className="link white">Uplabs</span>
        </Link>
        <Link href="https://www.twitter.com/casprine">
          <span className="link white">Twitter</span>
        </Link>
        <Link href="https://www.github.com/casprine">
          <span className="link white">Github</span>
        </Link>
        {/* <Link to="/writings" className="link-inverse">
          <span className="link white">Bookmarked</span>
        </Link> */}
      </div>
    </nav>

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
