import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Layout } from "../src/components/common/index";
import { SectionHeader } from "../src/components/section/index";
import { ArticleCard } from "../src/components/article/index";
import { Navbar, Footer } from "../src/components/navigation/index";
import { ContextConsumer } from "../src/context/index";

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
          <ContextConsumer>
            {({ articles }) => {
              return (
                <div className="articles grid-3">
                  {articles.map((post, i) => {
                    return <ArticleCard {...post} key={i} />;
                  })}
                </div>
              );
            }}
          </ContextConsumer>
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}
export default Index;
