import React, { Fragment } from "react";
import Head from "next/head";
import { Layout, Header } from "../components/common/index";
import { Tags, SectionHeader } from "../components/common/section";
import { Article } from "../components/common/post";
import "../static/sass/global.scss";

export default () => (
  <Fragment>
    <Head>
      <title>Casprine Assempah</title>
    </Head>

    <Layout>
      <Header />
      <SectionHeader />
      <Tags />
      <div className="articles grid-3">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </Layout>
  </Fragment>
);
