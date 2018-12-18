import React, { Fragment } from "react";
import Link from "next/link";
import "../../static/sass/index.scss";

const layoutStyles = {
  width: "85vw",
  marginRight: "auto",
  marginLeft: "auto"
  //   outline: "1px solid red"
};

const Layout = props => {
  return (
    <Fragment>
      <div style={layoutStyles}>
        <div>{props.children}</div>
      </div>
    </Fragment>
  );
};

const Header = () => (
  <Fragment>
    <div className="header">Casprine</div>
  </Fragment>
);

export { Layout, Header };
