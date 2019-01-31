import React, { Fragment } from "react";
// import Link from "next/link";
import { Logo, ThemeChanger } from "../common/index";
import styled from "styled-components";
const Navbar = () => (
  <Fragment>
    <StyledNavbar className="padding-top">
      <div className="logo-wrapper">
        <Logo />
      </div>
      <div className="themeToggler-wrapper">
        <ThemeChanger />
      </div>
    </StyledNavbar>
  </Fragment>
);

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
  outline: 1px solid red;
  .ca-routes {
    width: 100%;
  }

  * {
    margin: 0;
  }

  .themeToggler-wrapper {
    margin-left: auto;
  }
  .ca-routes {
    width: 20%;
    display: flex;
    margin-left: auto;
    justify-content: space-between;
  }
`;
export default Navbar;
