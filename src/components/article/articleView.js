import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import { ShareIt } from "../common/index";
import { tagSelector, slugify } from "../../utils/helpers";
import { env } from "../../utils/helpers";
import styled from "styled-components";
import { colors } from "../common/index";
import { grey, white } from "../common/theme";
import ReactMarkdown from "react-markdown";
import Prism from "prismjs";

const ArticleView = ({
  content,
  query: { id },
  data: { date, spoiler, tag, title }
}) => {
  useEffect(() => Prism.highlightAll());
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={spoiler} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={env.url + `p/${id}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={spoiler} />
        <meta
          property="og:image"
          content="https://pbs.twimg.com/profile_images/1044281937949577216/mO5YBqkE_400x400.jpg"
        />
       <meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@flickr" />
<meta name="twitter:title" content="Small Island Developing States Photo Submission" />
<meta name="twitter:description" content="View the album on Flickr." />
<meta name="twitter:image" content="https://farm6.staticflickr.com/5510/14338202952_93595258ff_z.jpg" />
      </Head>

      <StyledArticleView>
        <h1 className="book title"> {title}</h1>
        <div className="meta flex" style={{ marginTop: "20px" }}>
          <div>{tagSelector(tag, "tag")}</div>
          <div className="bullet">•</div>
          <div className="date">{date}</div>
          {/* <span className="bullet white">•</span> */}
          {/* <span className="flex" onClick={() => saveArticle()}>
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
          </span>  */}
        </div>
        <article className="spoiler">
          <p>{spoiler}</p>
        </article>
        <ReactMarkdown source={content} />
        <ShareIt title={title} id={id} />
      </StyledArticleView>
    </Fragment>
  );
};

const StyledArticleView = styled.section`
  margin-top: 50px;
  margin: 30px auto;
  padding-bottom: 50px;
  color: ${white};
  width: 80%;

  @media (max-width: 750px) {
    width: 100%;
  }

  .title {
    color: ${white};
  }

  .icon {
    width: 20px;
    height: 20px;
    fill: ${colors.grey};
    cursor: pointer;
    margin-right: 5px;
  }

  .save {
    width: 20px;
    height: 20px;
    fill: ${colors.green};
    margin-right: 5px;
    cursor: pointer;
  }

  .date {
    margin-top: 3px;
    font-family: "book";
  }

  .bullet {
    margin: auto 10px;
  }

  h1 {
    font-size: 40px;
    letter-spacing: 0.2px;
    line-height: 52px;
    font-weight: 500;
    margin: 0;

    @media (max-width: 450px) {
      font-size: 26px;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "book";
    letter-spacing: 1px;
  }

  p {
    margin-top: 30px;
    font-size: 17px;
    margin-bottom: 1rem;
    font-family: "Inter";
    line-height: 30px;
    @media (max-width: 750px) {
      font-size: 15px;
      line-height: 28px;
    }
  }
`;

export default ArticleView;
