import React, { Component, Fragment } from "react";
import { Layout, SEO } from "../src/components/common/index";
import { SectionHeader } from "../src/components/section/index";
import { ArticleCard } from "../src/components/article/index";
import { Navbar, Footer } from "../src/components/navigation/index";
import matter from "gray-matter";

class Index extends Component {
  render() {
    return (
      <Fragment>
        <SEO
          title="Casprine's writings"
          description="Experiments on CSS, React, Javascript and Design"
        />
        <Layout>
          <Navbar />
          <SectionHeader />
          <div className="articles grid-3">
            {this.props.posts.map(({ document, slug }, i) => {
              return <ArticleCard {...document} slug={slug} key={i} />;
            })}
          </div>
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}

Index.getInitialProps = async () => {
  // Get posts from folder
  const posts = (ctx => {
    const keys = ctx.keys();
    const values = keys.map(ctx);

    const data = keys.map((key, index) => {
      // Create slug from file name
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      const value = values[index];

      // Parse document
      const document = matter(value);
      return {
        document,
        slug
      };
    });

    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    posts
  };
};

export default Index;
