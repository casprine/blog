import React, { Fragment } from "react";
import Head from "next/head";
import { ShareIt, Colors } from "../common/index";
import { tagSelector } from "../../utils/helpers";
import { env } from "../../utils/helpers";

const ArticleView = props => {
  const { title, summary, date, tag, bodyContent: content, id } = props[0];
  // const [saved, setStatus] = useState(false);

  // function saveArticle() {
  //   return saved ? setStatus(false) : setStatus(true);
  // }

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={summary} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={env.url + `p/${id}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={summary} />
        <meta
          property="og:image"
          content="data:image/jpeg;base64,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"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={env.url + `p/${id}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={summary} />
        <meta
          property="twitter:image"
          content="data:image/jpeg;base64,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"
        />
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
        <ShareIt title={title} id={id} />
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
