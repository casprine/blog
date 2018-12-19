import React, { Fragment } from "react";
import Link from "next/link";
import "../../static/sass/index.scss";
import "../../static/sass/global.scss";

const layoutStyles = {
  outline: {
    backgroundColor: "#f6f9fa"
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
      <div style={layoutStyles.outline}>
        <div style={layoutStyles.wrapper}>{props.children}</div>
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
    <nav className="ca-header padding-top center">
      <Logo />
      <ul className="ca-routes">
        <Link href="https://casprine-dev.netlify.com/work" className="link">
          <a className="link">Work</a>
        </Link>
        <Link href="https://casprine-dev.netlify.com/design" className="link">
          <a className="link">Design</a>
        </Link>
        <Link to="/writings" className="link">
          <a className="active-link">Writings</a>
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

export { Layout, Header };
