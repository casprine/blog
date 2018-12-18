import React, { Fragment } from "react";
import Head from "next/head";
import "../static/sass/index.scss";

export default () => (
  <Fragment>
    <Head>
      <title>Casprine Assempah</title>
    </Head>
    <div className="flex container">
      <p>
        Happy Hacking with Backpack{" "}
        <span role="img" aria-label="fire">
          🧳
        </span>
        <span role="img" aria-label="fire">
          🔥
        </span>
      </p>
    </div>
  </Fragment>
);
