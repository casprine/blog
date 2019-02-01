import React, { Fragment } from "react";
import styled from "styled-components";

const Tag = ({ url, name }) => {
  return (
    <Fragment>
      <StyledTag className="flex tag">
        <img src={url} alt={name} />
        <span className="white">{name}</span>
      </StyledTag>
    </Fragment>
  );
};

const StyledTag = styled.div`
div {
  display: flex;
  cursor: pointer;
  outline: 1px solid red;

}
img {
  width: 20px;
  height: 20px;
}
span {
  margin-left: 10px;
  font-size: 18px;
`;

export default Tag;
