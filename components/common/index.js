import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import "../../static/sass/index.scss";
import "../../static/sass/global.scss";

const layoutStyles = {
  outline: {
    backgroundColor: "#ebf0f6"
  },
  wrapper: {
    width: "85vw",
    marginRight: "auto",
    marginLeft: "auto"
  }
};

const Layout = props => {
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div style={layoutStyles.outline}>
        <div style={layoutStyles.wrapper}>{props.children}</div>

        <style jsx>{`
          @font-face {
            font-family: "circular";
            src: url("../../static/fonts/ciruclar.ttf");
            font-weight: normal;
            font-style: normal;
            font-display: auto;
          }

          @font-face {
            font-family: "geo";
            src: url("../../static/fonts/geo.ttf");
            font-weight: normal;
            font-style: normal;
            font-display: auto;
          }
        `}</style>
      </div>
    </Fragment>
  );
};

const Logo = () => (
  <Fragment>
    <Link href="/" to="/">
      <div className="ca-logo center">
        <div> C </div>
      </div>
    </Link>
  </Fragment>
);

const Navbar = () => (
  <Fragment>
    <nav className="navbar padding-top padding-bottom center">
      <Logo />
      <ul className="ca-routes">
        <Link href="https://casprine-dev.netlify.com/work">
          <a className="link">Work</a>
        </Link>
        <Link href="https://casprine-dev.netlify.com/design">
          <a className="link" href="https://casprine-dev.netlify.com/design">
            Design
          </a>
        </Link>
        <Link to="/writings" className="link">
          <a className="link">Bookmarked</a>
        </Link>
      </ul>
    </nav>
  </Fragment>
);
const Header = () => (
  <Fragment>
    <div className="header">
      <Navbar />
    </div>
  </Fragment>
);

const Colors = {
  primary: "#071e3d",
  secondary: "#eaa81b",
  grey: "hsl(0, 0%, 27%)",
  green: "#36622b",
  defaultFont: ` -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif`
};

export { Layout, Header, Colors, Logo };
