import React, { Fragment } from "react";
import styled from "styled-components";
const ViewTag = props => {
  const { url, name } = props[0];
  return (
    <Fragment>
      <StyledViewTag>
        <img src={url} alt={name} />
        <div>{name}</div>
      </StyledViewTag>
    </Fragment>
  );
};

const StyledViewTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  div {
    font-size: 18px;
    vertical-align: super;
    font-family: "book";
    margin-top: 3px;
  }
`;

export default ViewTag;
