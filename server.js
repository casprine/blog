const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV != "production";
const app = next({ dev });
const handle = app.getRequestHandler();
console.log(handle);

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/article/:id", (req, res) => {
      const nextJsPage = "/article";
      const queryParams = { slug: req.params.slug };
      app.render(req, res, nextJsPage, queryParams);
    });

    // if (pathname === "/sw.js") {
    //   res.setHeader("content-type", "text/javascript");
    //   createReadStream("./offline/serviceWorker.js").pipe(res);
    // } else {
    //   handle(req, res, parsedUrl);
    // }

    server.get("/sw.js", (req, res) => {
      return "./static/sw.js";
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
