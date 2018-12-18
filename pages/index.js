import React, { Fragment } from "react";
import Head from "next/head";
import { Layout, Header } from "../components/common/index";
import "../static/sass/index.scss";

export default () => (
  <Fragment>
    <Head>
      <title>Casprine Assempah</title>
    </Head>

    <Layout>
      <Header />
    </Layout>
  </Fragment>
);
