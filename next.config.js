const fs = require("fs");
const dir = "./posts";

module.exports = {
  webpack: config => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },

  async exportPathMap() {
    const numberOfPost = fs.readdir(dir, (err, files) => {
      return files.length;
    });

    const posts = new Array(numberOfPost).map((value, index) => {
      return { id: `issue-${index + 1}` };
    });

    // tranform the list of posts into a map of pages with the pathname `/post/:id`
    const pages = posts.reduce(
      (pages, post) =>
        Object.assign({}, pages, {
          [`/p/${post.id}`]: {
            page: "/article",
            query: { id: post.id }
          }
        }),
      {}
    );
    // combine the map of post pages with the home
    return Object.assign({}, pages, {
      "/": { page: "/" }
    });
  }
};
