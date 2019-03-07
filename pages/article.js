import React, { Fragment, Component } from "react";
import { Layout } from "../src/components/common/index";
import { ArticleView } from "../src/components/article/index";
import { Footer, Navbar } from "../src/components/navigation/index";
import matter from "gray-matter";

class Article extends Component {
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

Article.getInitialProps = async ({ query }) => {
  const post = await import(`../posts/${query.id}.md`);
  const document = matter(post.default);

  return {
    ...document,
    query
  };
};

export default Article;
