import React, { Fragment } from "react";
import Head from "next/head";
import { ShareIt } from "../common/index";
import { tagSelector } from "../../utils/helpers";
import { env } from "../../utils/helpers";
import styled from "styled-components";
import { colors } from "../common/index";
import { grey, white } from "../common/theme";
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
          content="https://pbs.twimg.com/profile_images/1044281937949577216/mO5YBqkE_400x400.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={env.url + `p/${id}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={summary} />
        <meta
          property="twitter:image"
          content="https://pbs.twimg.com/profile_images/1044281937949577216/mO5YBqkE_400x400.jpg"
        />
      </Head>

      <StyledArticleView>
        <h1 className="book title"> {title}</h1>
        <div className="meta flex" style={{ marginTop: "20px" }}>
          <div>{tagSelector(tag, "tag")}</div>
          <div className="bullet">•</div>
          <div className="date">{date}</div>
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

        <article className="summary">
          <p>{summary}</p>
        </article>

        <article
          className="main"
          dangerouslySetInnerHTML={{ __html: content }}
        />
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
  outline: 1px solid red;

  * {
    /* outline: 1px solid red; */
  }

  .title {
    outline: 1px solid red;
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
  }

  p {
    margin-top: 30px;
    font-size: 20px;
    margin-bottom: 1rem;
    line-height: 35px;
    color: ${grey};
  }
`;

export default ArticleView;
