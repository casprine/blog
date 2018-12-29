import React, { Fragment } from "react";
import "../static/sass/global.scss";
import { withRouter } from "next/router";
import { Layout, Navbar } from "../components/common/index";
import { Tags, SectionHeader } from "../components/common/section";
import ArticleView from "../components/common/article";
import Footer from "../components/common/footer";

import Head from "next/head";

export default withRouter(props => {
  return (
    <Fragment>
      <Head>
        <title>Blog Post</title>
      </Head>
      <Layout>
        <Navbar />
        <Tags />
        <ArticleView />
        <Footer />
      </Layout>
    </Fragment>
  );
});
