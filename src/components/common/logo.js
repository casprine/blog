import React, { Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";
import { border } from "./theme";
const Logo = () => (
  <Fragment>
    <Link href="/">
      <StyledLogo>
        <div className="symbol"> C </div>
      </StyledLogo>
    </Link>
  </Fragment>
);

const StyledLogo = styled.div`
  div {
    width: 40px;
    height: 40px;
    border: 2px solid ${border};
    cursor: pointer;
    background: white;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .symbol {
    font-size: 20px;
    font-family: "book";
  }
`;

export default Logo;
