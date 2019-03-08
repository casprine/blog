import React from "react";
import Head from "next/head";

const url = "https://casprine-blog.now.sh/";

const SEO = ({ title, description, issue }) => {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="shortcut icon"
        href="../../../static/images/circle-dark.png"
        type="image/png"
      />
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url + issue ? issue : ""} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="../../../static/images/circle-dark.png"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@casprine_ix" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="../../../static/images/circle-dark.png"
      />
    </Head>
  );
};

export default SEO;
