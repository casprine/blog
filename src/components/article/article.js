import React, { Fragment } from "react";
import Link from "next/link";
import { ContextConsumer } from "../../context/index";
import { trimArticle, tagSelector } from "../../utils/helpers";
import styled, { ThemeProvider } from "styled-components";
import { grey, white, black } from "../common/";

const Article = ({ data: props, slug: id }) => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme }) => (
          <ThemeProvider theme={{ mode: theme }}>
            <Link as={`/${id}`} href={`/article?id=${id}`}>
              <StyledArticle>
                <div className="wrapper">
                  <div className="book title">{props.title}</div>
                  <p className="inter" theme={theme}>
                    {trimArticle(props.spoiler, 100)}
                  </p>
                  <div className="footer flex">
                    {tagSelector(props.tag, "img")}
                    <span> {props.date}</span>
                  </div>
                </div>
              </StyledArticle>
            </Link>
          </ThemeProvider>
        )}
      </ContextConsumer>
    </Fragment>
  );
};

const StyledArticle = styled.div`
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(38, 41, 58, 0.06);
  border-radius: 3px;
  transition: 0.3s ease-out;
  color: ${white};

  background-color: ${black};

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.07) 0px 5px 15px,
      rgba(50, 50, 93, 0.1) 0px 15px 35px;
  }

  .wrapper {
    padding: 20px 30px;
  }

  p {
    color: ${grey};
    font-size: 14px;
  }
  .title {
    padding-top: 5px;
    font-size: 1.2rem;
  }

  .footer {
    margin-top: 20px !important;
  }

  span {
    font-size: 14px;
    margin: auto 0;
    font-family: "book";
  }
`;
export default Article;
