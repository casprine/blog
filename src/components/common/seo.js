import React, { Fragment } from "react";
import Head from "next/head";

export const SEO = props => {
  console.log(props);

  return (
    <Head>
      <title>Meta Tags — Preview, Edit and Generate</title>
      <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
      <meta
        name="description"
        content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta
        property="og:title"
        content="Meta Tags — Preview, Edit and Generate"
      />
      <meta
        property="og:description"
        content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
      />
      <meta
        property="og:image"
        content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@casprine_ix" />
      <meta
        name="twitter:title"
        content="Small Island Developing States Photo Submission"
      />
      <meta name="twitter:description" content="View the album on Flickr." />
      <meta
        name="twitter:image"
        content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg"
      />
    </Head>
  );
};
