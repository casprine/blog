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
    return (
      <Fragment>
        <Head>
          <title>Blog Post</title>
        </Head>
        <Layout>
          <Navbar />
          {/* <Tags /> */}
          <ContextConsumer>
            {({ articles }) => {
              const article = articles.filter(article => {
                return article.title === this.props.router.query.id;
              });
              return <ArticleView {...article} />;
            }}
          </ContextConsumer>
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}

export default withRouter(Article);
