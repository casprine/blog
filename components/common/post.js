import React, { Fragment } from "react";
import { Colors } from "./index";
import Link from "next/link";
import "../../static/sass/global.scss";
import { trimArticle, tagSelector } from "../../utils/helpers";

const art = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
harum saepe, sapiente nisi quisquam quia in commodi iusto nequex`;

const Article = ({ name, tag, title }) => {
  return (
    <Fragment>
      <Link as={`/p/${title}`} href={`/article/?${title}`}>
        <article className="article">
          <div className="wrapper">
            <div className="heading"> Testing Actions in NGRX Store </div>
            <p>{trimArticle(art, 100)}</p>
            <div className="footer  flex">
              {tagSelector(tag, "img")}
              <span> Dec 19, 2018</span>
            </div>
          </div>
        </article>
      </Link>

      <style jsx>{`
        .article {
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
        span {
          font-size: 14ppx;
          margin: auto 0;
          color: ${Colors.grey};
        }
      `}</style>
    </Fragment>
  );
};

export default Article;
