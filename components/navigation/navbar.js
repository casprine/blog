import React, { Fragment } from "react";
import Link from "next/link";
import { Logo, ThemeChanger } from "../common/index";

const Navbar = () => (
  <Fragment>
    <nav className="navbar padding-top  flex-wrap center">
      <Logo />
      <div className="ca-routes">
        <Link href="https://casprine-dev.netlify.com/work">
          <a className="link white">Work</a>
        </Link>
        <Link href="https://casprine-dev.netlify.com/design">
          <a
            className="link white"
            href="https://casprine-dev.netlify.com/design"
          >
            Design
          </a>
        </Link>
        <Link href="/bookmark">
          <span className="link white">Bookmarked</span>
        </Link>
      </div>
      <ThemeChanger />
    </nav>

    <style jsx>{`
      .navbar {
        padding-bottom: 40px;
      }

      .ca-routes {
        width: 20%;
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </Fragment>
);

export default Navbar;
