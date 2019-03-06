import React, { Fragment, Component } from "react";
import { Layout } from "../src/components/common/index";
import { ArticleView } from "../src/components/article/index";
import { Footer, Navbar } from "../src/components/navigation/index";
import matter from "gray-matter";

class Article extends Component {
  static async getInitialProps({ query }) {
    console.log(query, "query");
    const post = await import(`../posts/${query.id}.md`);
    const document = matter(post.default);

    return {
      ...document,
      query
    };
  }

  render() {
    return (
      <Fragment>
        <Layout>
          <Navbar />
          <ArticleView {...this.props} />
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}

export default Article;
