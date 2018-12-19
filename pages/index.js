import React, { Fragment } from "react";
import Head from "next/head";
import { Layout, Header } from "../components/common/index";
import { Tags, SectionHeader } from "../components/common/section";
import "../static/sass/index.scss";

export default () => (
  <Fragment>
    <Head>
      <title>Casprine Assempah</title>
    </Head>

    <Layout>
      <Header />
      <Tags />
      <SectionHeader />
    </Layout>
  </Fragment>
);
