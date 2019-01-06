import React, { Fragment, useEffect } from "react";
import Prism from "prismjs";

import Head from "next/head";
import { ShareIt, Colors } from "../common/index";
import { tagSelector } from "../../utils/helpers";

const ArticleView = props => {
  const { title, summary, date, tag, bodyContent: content } = props[0];
  // const [saved, setStatus] = useState(false);

  // function saveArticle() {
  //   return saved ? setStatus(false) : setStatus(true);
  // }
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <script src="https://cdn.jsdelivr.net/combine/npm/prismjs@1/components/index.min.js,npm/prismjs@1/components/prism-javascript.min.js,npm/prismjs@1/components/prism-jsx.min.js,npm/prismjs@1/components/prism-sass.min.js,npm/prismjs@1/components/prism-scss.min.js" />
      </Head>

      <section className="">
        <h1 className="geo heading"> {title}</h1>
        <div className="meta flex" style={{ marginTop: "20px" }}>
          <span>{tagSelector(tag, "tag")}</span>
          <span className="bullet white">•</span>
          <span className="date white">{date}</span>
          {/* <span className="bullet white">•</span>
          <span className="flex" onClick={() => saveArticle()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={saved ? "save" : "icon"}
            >
              <path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z" />
            </svg>
            <span className="pointer white">
              {saved ? " Remove from bookmark" : " Save Article"}
            </span>
          </span> */}
        </div>

        <article className="summary  geo">
          <p>{summary}</p>
        </article>

        <article
          className="main"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html:
              "https://cdn.jsdelivr.net/combine/npm/prismjs@1.15.0/components/index.min.js,npm/prismjs@1.15.0/components/prism-javascript.min.js,npm/prismjs@1.15.0/components/prism-jsx.min.js,npm/prismjs@1.15.0/components/prism-sass.min.js,npm/prismjs@1.15.0/components/prism-scss.min.js"
          }}
        />
        <ShareIt />
      </section>

      <style jsx>{`
        section {
          margin-top: 50px;
          margin: 30px auto;
          paddding-bottm: 50px;
        }

        .icon {
          width: 20px;
          height: 20px;
          fill: ${Colors.grey};
          cursor: pointer;
          margin-right: 5px;
        }

        .save {
          width: 20px;
          height: 20px;
          fill: ${Colors.green};
          margin-right: 5px;
          cursor: pointer;
        }

        span {
          margin: auto 0;
        }
        .bullet {
          margin: auto 10px;
        }

        h1 {
          font-size: 40px;
          color: ${Colors.primary};
          letter-spacing: 0.2px;
          line-height: 52px;
          font-weight: 500;
          margin: 0;
        }

        p {
          margin-top: 30px;
          font-size: 20px;
          margin-bottom: 1rem;
          color: rgba(38, 41, 58, 0.8);
          line-height: 35px;
        }
      `}</style>
    </Fragment>
  );
};

export default ArticleView;
