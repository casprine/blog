import React, { Fragment } from "react";
import { withRouter } from "next/router";
import { Layout } from "../src/components/common/index";
import { ArticleView } from "../src/components/article/index";
import { Footer, Navbar } from "../src/components/navigation/index";
import Head from "next/head";

export default withRouter(props => {
  return (
    <Fragment>
      <Head>
        <title>Blog Post</title>
      </Head>
      <Layout>
        <Navbar />
        {/* <Tags /> */}
        <ArticleView />
        <Footer />
      </Layout>
    </Fragment>
  );
});
