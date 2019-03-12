import React, { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ContextConsumer } from "../../context";

const Logo = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => {
        console.log(theme, "theme from logo");
        return (
          <Fragment>
            {theme === "dark" ? (
              <Link href="/">
                <StyledPicture>
                  <source
                    srcSet="../../../static/images/circle.png"
                    type="image/png"
                  />
                  <source
                    srcSet="../../../static/images/circle.jpg"
                    type="image/jpg"
                  />
                  <source
                    srcSet="../../../static/images/circle.webp"
                    alt=""
                    type="image/webp"
                  />
                  <img src="../../../static/images/circle.jpg" alt="" />
                </StyledPicture>
              </Link>
            ) : (
              <Link href="/">
                <StyledPicture>
                  <source
                    srcSet="../../../static/images/circle-dark.png"
                    type="image/png"
                  />
                  <source
                    srcSet="../../../static/images/circle-dark.jpg"
                    type="image/jpg"
                  />
                  <source
                    srcSet="../../../static/images/circle-dark.webp"
                    alt=""
                    type="image/webp"
                  />
                  <img src="../../../static/images/circle-dark.jpg" alt="" />
                </StyledPicture>
              </Link>
            )}
          </Fragment>
        );
      }}
    </ContextConsumer>
  </Fragment>
);

const StyledPicture = styled.picture`
  width: 35px;
  height: 35px;
  cursor: pointer;

  source,
  img {
    width: inherit;
    height: inherit;
  }
`;

export default Logo;
