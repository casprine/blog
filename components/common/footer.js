import React, { Fragment } from "react";
import Link from "next/link";
import { Logo } from "./index";
import "../../static/sass/index.scss";

const Footer = () => (
  <Fragment>
    <nav className="navbar  padding-bottom center">
      <Logo />
      <div className="ca-routes" id="fotter-links">
        <Link href="https://dribbble.com/casprine" className="link-inverse">
          <span className="link-inverse">Dribbble</span>
        </Link>
        <Link href="https://www.uplabs.com/casprine">
          <span className="link-inverse">Uplabs</span>
        </Link>
        <Link href="https://www.twitter.com/casprine">
          <span className="link-inverse">Twitter</span>
        </Link>
        <Link href="https://www.github.com/casprine">
          <span className="link-inverse">Github</span>
        </Link>
        <Link to="/writings" className="link-inverse">
          <span className="link-inverse">Bookmarked</span>
        </Link>
      </div>
    </nav>
  </Fragment>
);

export default Footer;
