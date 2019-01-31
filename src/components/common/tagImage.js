import React, { Fragment } from "react";
import styled from "styled-components";
const TagImage = props => {
  const { url, name } = props[0];
  return (
    <Fragment>
      <StyledTag src={url} alt={name || "C"} className="tag-image" />
    </Fragment>
  );
};

const StyledTag = styled.img`
  width: 20px;
  height: 20px;
  margin-right: auto;
`;

export default TagImage;
