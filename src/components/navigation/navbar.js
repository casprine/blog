import React, { Fragment } from "react";
import Link from "next/link";
import { Logo, ThemeChanger } from "../common/index";

const Navbar = () => (
  <Fragment>
    <nav className="navbar padding-top">
      <div className="logo-wrapper">
        <Logo />
      </div>
      {/* <div className="ca-routes">
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
      </div> */}
      <div className="themeToggler-wrapper">
        <ThemeChanger />
      </div>
    </nav>

    <style jsx>{`
      .navbar {
        padding-bottom: 40px;
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

      // @media (max-width: 450px) {
      //   .themeToggler-wrapper {
      //     position: absolute;
      //     right: 0;
      //     top: 48px;
      //     margin-right: 20px;
      //   }

      //   .logo-wrapper {
      //     width: 100%;
      //   }

      //   .ca-routes {
      //     margin-top: 30px;
      //     width: 100%;
      //   }
      // }
    `}</style>
  </Fragment>
);

export default Navbar;
