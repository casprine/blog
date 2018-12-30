import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Layout } from "../components/common/index";
import { Tags, SectionHeader } from "../components/section/index";
import { ArticleCard } from "../components/article/index";
import { Navbar, Footer, Pagination } from "../components/navigation/index";
import data from "../data.json";
class Index extends Component {
  // componentDidMount = () => {
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", function() {
  //       navigator.serviceWorker.register("../static/sw.js").then(
  //         function(registration) {
  //           // Registration was successful
  //           console.log(
  //             "ServiceWorker registration successful with scope: ",
  //             registration.scope
  //           );
  //         },
  //         function(err) {
  //           // registration failed :(
  //           console.log("ServiceWorker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // };

  render() {
    return (
      <Fragment>
        <Head>
          <title>Casprine Assempah</title>
        </Head>
        <Layout>
          <Navbar />
          <SectionHeader />
          <Tags />
          <div className="articles grid-3">
            {data.map((post, i) => {
              return <ArticleCard {...post} key={i} />;
            })}
          </div>
          <Pagination />
          <Footer />
        </Layout>
      </Fragment>
    );
  }
}

export default Index;
