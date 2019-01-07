import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Layout } from "../src/components/common/index";
import { SectionHeader } from "../src/components/section/index";
import { ArticleCard } from "../src/components/article/index";
import { Navbar, Footer } from "../src/components/navigation/index";
import fetch from "isomorphic-unfetch";

class Index extends Component {
  state = {
    articles: null
  };

  componentWillMount() {
    const posts = Object.values(this.props.articles);
    this.setState({
      articles: posts
    });
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>Casprine Assempah</title>
        </Head>
        <Layout>
          <Navbar />
          <SectionHeader />
          {/* <Tags /> */}
          <div className="articles grid-3">
            {this.state.articles.map((post, i) => {
              return <ArticleCard {...post} key={i} />;
            })}
          </div>
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}

Index.getInitialProps = async () => {
  const res = await fetch("https://api.myjson.com/bins/15ll2w");
  const json = await res.json();
  return {
    articles: json
  };
};

export default Index;
