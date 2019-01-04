import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Layout } from "../src/components/common/index";
import { SectionHeader } from "../src/components/section/index";
import { ArticleCard } from "../src/components/article/index";
import { Navbar, Footer } from "../src/components/navigation/index";
import data from "../posts.json";
class Index extends Component {
  state = {
    articles: null
  };
  componentWillMount() {
    console.log(Object.values(data));
    const posts = Object.values(data);
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
export default Index;
