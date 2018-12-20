import React, { Fragment } from "react";
import "../static/sass/global.scss";
import { withRouter } from "next/router";
import { Layout, Header } from "../components/common/index";
import { Tags, SectionHeader } from "../components/common/section";

import Head from "next/head";

export default withRouter(props => {
  console.log(props);
  return (
    <Fragment>
      <Head>
        <title>Blog Post</title>
      </Head>

      <Layout>
        <Header />
        <SectionHeader />
        <Tags />
      </Layout>
    </Fragment>
  );
});
