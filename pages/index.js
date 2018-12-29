import React, { Component, Fragment } from "react";
import Head from "next/head";
import { Layout, Navbar } from "../components/common/index";
import { Tags, SectionHeader } from "../components/common/section";
import Article from "../components/common/post";
import Pagination from "../components/common/pagination";
import Footer from "../components/common/footer";
import data from "../data.json";
import "../static/sass/global.scss";

class Index extends Component {
  componentDidMount = () => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
        navigator.serviceWorker.register("../static/sw.js").then(
          function(registration) {
            // Registration was successful
            console.log(
              "ServiceWorker registration successful with scope: ",
              registration.scope
            );
          },
          function(err) {
            // registration failed :(
            console.log("ServiceWorker registration failed: ", err);
          }
        );
      });
    }
  };

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
            {data.map((post ,i ) => {
              return <Article {...post}  key={i} />;
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
