import React, { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";
import { ContextConsumer } from "../../context";

const Logo = () => (
  <Fragment>
    <ContextConsumer>
      {({ theme }) => {
        console.log(theme);
        return (
          <>
            {theme ? (
              <Link to="/">
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
              <Link to="/">
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
          </>
        );
      }}
    </ContextConsumer>
  </Fragment>
);

const StyledPicture = styled.picture`
  width: 40px;
  height: 40px;

  source,
  img {
    width: inherit;
    height: inherit;
  }
`;

export default Logo;
