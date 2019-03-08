import React, { Fragment, useEffect } from "react";
import { ShareIt } from "../common/index";
import { tagSelector } from "../../utils/helpers";
import styled from "styled-components";
import { colors, SEO } from "../common/index";
import { white } from "../common/theme";
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
      <SEO title={title} description={spoiler} issue={id} />
      <StyledArticleView>
        <h1 className="book title"> {title}</h1>
        <div className="meta flex" style={{ marginTop: "20px" }}>
          <div>{tagSelector(tag, "tag")}</div>
          <div className="bullet">•</div>
          <div className="date">{date}</div>
          {/* <span className="bullet white">•</span> */}
          {/* <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="save"
            >
              <path d="M128 80v380c0 3.3 3.8 5.2 6.4 3.2l116.8-92c2.9-2.1 6.8-2.1 9.6 0l116.8 92c2.6 2 6.4.1 6.4-3.2V80c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32z" />
            </svg>
            <span className="pointer white">" Remove from bookmark"</span>
          </span> */}
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
  width: 870px;

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
  h6,
  strong {
    font-family: "Book";
    letter-spacing: 1px;
    font-weight: 400 !important;
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
