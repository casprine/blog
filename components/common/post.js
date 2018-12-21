import React, { Fragment, useState } from "react";
import { Colors } from "./index";
import { Tag } from "./section";
import Link from "next/link";
import "../../static/sass/global.scss";
import { trimArticle } from "../../utils/helpers";

const art = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
harum saepe, sapiente nisi quisquam quia in commodi iusto nequex`;

const Article = props => {
  return (
    <Fragment>
      <Link href={`/article/?${props.title}`} as={`/${props.title}`}>
        <article className="article">
          <div className="wrapper">
            <div className="heading"> Testing Actions in NGRX Store </div>
            <p>{trimArticle(art, 100)}</p>
            <div className="footer  flex">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <span> Dec 19, 2018</span>
            </div>
          </div>
        </article>
      </Link>

      <style jsx>{`
        .article {
          background: white;
          cursor: pointer;
          box-shadow: 0 1px 3px 0 rgba(38, 41, 58, 0.06);
          // border-top: 5px solid ${Colors.primary};
          border-radius: 3px;
          transition: 0.3s ease-out;
        }

        .article:hover {
          box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 15px,
            rgba(50, 50, 93, 0.1) 0px 15px 35px;
        }

        .wrapper {
          padding: 20px 30px;
        }

        .heading {
          color: ${Colors.primary};
          font-size: 20px;
          font-family: "geo";
        }
        img {
          width: 20px;
          height: 20px;
          margin-right: auto;
        }

        span {
          font-size: 14ppx;
          margin: auto 0;
          color: ${Colors.grey};
        }
      `}</style>
    </Fragment>
  );
};

const ArticleView = props => {
  const [saved, setStatus] = useState(false);

  function saveArticle(props) {
    return saved ? setStatus(false) : setStatus(true);
  }
  return (
    <Fragment>
      <section className="owc">
        <h1 className="geo heading"> Testing Actions in NGRX Store </h1>
        <div className="meta flex">
          <Tag />
          <span className="bullet">•</span>
          <span className="date">Dec 19, 2018</span>
          <span className="bullet">•</span>
          <span className="flex" onClick={() => saveArticle()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className={saved ? "save" : "icon"}
            >
              <path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z" />
            </svg>
            <span className="pointer">
              {saved ? " Remove from bookmark" : " Save Article"}
            </span>
          </span>
        </div>

        <article className="summary  geo">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            veniam, alias voluptas sunt corrupti sed expedita animi quaerat
            accusamus dolorum soluta aliquam maiores possimus perferendis
            consequatur asperiores repellendus pariatur fugiat.
          </p>
        </article>
      </section>

      <style jsx>{`
        section {
          height: 100vh;
          margin-top: 50px;
          outline: 1px solid red;
        }

        .icon {
          width: 20px;
          height: 20px;
          fill: ${Colors.grey};
          margin: auto 0;
          cursor: pointer;
        }

        .save {
          width: 20px;
          height: 20px;
          fill: ${Colors.green};
          margin: auto 0;
          cursor: pointer;
        }

        span {
          margin: auto 0;
        }

        meta {
          align-item: center;
          margin-top: 115px;
        }

        * {
          color: ${Colors.grey};
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
          color: rgba(38, 41, 58, 0.8);
          line-height: 30px;
        }
      `}</style>
    </Fragment>
  );
};
export { Article, ArticleView };
