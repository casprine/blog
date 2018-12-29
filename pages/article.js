import React, { Fragment } from "react";
import { withRouter } from "next/router";
import { Layout } from "../components/common/index";
import { Tags } from "../components/section/index";
import { ArticleView } from "../components/article/index";
import { Footer, Navbar } from "../components/navigation/index";
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
