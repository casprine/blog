import React, { Fragment } from "react";
// import { Colors } from "../common/index";
import Link from "next/link";
import { ContextConsumer } from "../../context/index";
import { trimArticle, tagSelector } from "../../utils/helpers";
import styled, { ThemeProvider } from "styled-components";
import { white, black } from "../common/theme";

const StyledArticle = styled.div`
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(38, 41, 58, 0.06);
  border-radius: 3px;
  padding: 10px 0;
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

  .heading {
    font-size: 20px;
    font-family: "geo";
  }
  span {
    font-size: 14ppx;
    margin: auto 0;
  }
`;

const Article = ({ title, tag, summary, date, id }) => {
  return (
    <Fragment>
      <ContextConsumer>
        {({ theme }) => (
          <ThemeProvider theme={{ mode: theme }}>
            <Link as={`/p/${id}`} href={`/article?id=${id}`}>
              <StyledArticle>
                <div className="wrapper">
                  <div className="heading geo">{title}</div>
                  <p>{trimArticle(summary, 100)}</p>
                  <div className="footer flex">
                    {tagSelector(tag, "img")}
                    <span> {date}</span>
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

export default Article;
