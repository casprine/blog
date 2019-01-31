import React, { Fragment } from "react";
import { Colors } from "../common/index";
import styled from "styled-components";
const ViewTag = props => {
  const { url, name } = props[0];
  return (
    <Fragment>
      <StyledViewTag className="flex tag">
        <img src={url} alt={name} />
        <span className="white">{name}</span>
      </StyledViewTag>
    </Fragment>
  );
};

const StyledViewTag = styled.div`
.tag {
  display: flex;
  cursor: pointer;
}
img {
  width: 20px;
  height: 20px;
}
span {
  margin-left: 10px;
  font-size: 18px;
  color: ${Colors.grey}
`;

export default ViewTag;
