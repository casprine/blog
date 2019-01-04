import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Layout } from "../src/components/common/index";
import { SectionHeader } from "../src/components/section/index";
import { ArticleCard } from "../src/components/article/index";
import { Navbar, Footer } from "../src/components/navigation/index";
import data from "../data.json";
class Index extends Component {
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
            {data.map((post, i) => {
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
