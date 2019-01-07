import React, { Fragment, Component } from "react";
import { Layout } from "../src/components/common/index";
import { ArticleView } from "../src/components/article/index";
import { Footer, Navbar } from "../src/components/navigation/index";
import Head from "next/head";
import { ContextConsumer } from "../src/context/index";
import { withRouter } from "next/router";
import fetch from "isomorphic-unfetch";

class Article extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <Head>
          <title>Blog Post</title>
        </Head>
        <Layout>
          <Navbar />
          {/* <Tags /> */}
          <ArticleView {...this.props.article} />
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}

Article.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch("https://api.myjson.com/bins/15ll2w");
  const json = await res.json();
  const formattedJson = await Object.values(json);
  const article = await formattedJson.filter(article => {
    return article.id === id;
  });

  return {
    article: article
  };
};
export default withRouter(Article);
