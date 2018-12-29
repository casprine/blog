import React, { Fragment } from "react";
import Link from "next/link";
import { Logo, ThemeChanger } from "../common/index";

const Navbar = () => (
  <Fragment>
    <nav className="navbar padding-top  flex-wrap center">
      <Logo />
      <div className="ca-routes">
        <Link href="https://casprine-dev.netlify.com/work">
          <span className="link white">Work</span>
        </Link>
        <Link href="https://casprine-dev.netlify.com/design">
          <span
            className="link white"
            href="https://casprine-dev.netlify.com/design"
          >
            Design
          </span>
        </Link>
        <Link href="/bookmark">
          <span className="link white">Bookmarked</span>
        </Link>
      </div>
      <ThemeChanger />
    </nav>
  </Fragment>
);

export default Navbar;
