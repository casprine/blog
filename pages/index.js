import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Layout } from "../src/components/common/index";
import { SectionHeader } from "../src/components/section/index";
import { ArticleCard } from "../src/components/article/index";
import { Navbar, Footer } from "../src/components/navigation/index";
import { ContextConsumer } from "../src/context/index";
import { env } from "../src/utils/helpers";
class Index extends Component {
  render() {
    return (
      <Fragment>
        <Head>
          <title>Journal</title>
          <meta
            name="title"
            content="Writings on CSS and Javascript written by Casprine. Frontend Developer and Designer"
          />
          <meta
            name="description"
            content="Writings of personal tweaks, hacks and tutorials on CSS, Design, Javascipt,  Reactjs, Vuejs and all things Zeit"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={env.url} />
          <meta
            property="og:title"
            content="Writings on CSS and Javascript written by Casprine. Frontend Developer and Designer"
          />
          <meta
            property="og:description"
            content="Writings of personal tweaks, hacks and tutorials on CSS, Design, Javascipt,  Reactjs, Vuejs and all things Zeit"
          />
          <meta
            property="og:image"
            content="https://pbs.twimg.com/profile_images/1044281937949577216/mO5YBqkE_400x400.jpg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={env.url} />
          <meta
            property="twitter:title"
            content="Writings on CSS and Javascript written by Casprine. Frontend Developer and Designer"
          />
          <meta
            property="twitter:description"
            content="Writings of personal tweaks, hacks and tutorials on CSS, Design, Javascipt,  Reactjs, Vuejs and all things Zeit"
          />
          <meta
            property="twitter:image"
            content="https://pbs.twimg.com/profile_images/1044281937949577216/mO5YBqkE_400x400.jpg"
          />
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
