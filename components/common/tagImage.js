import React, { Fragment } from "react";

const TagImage = props => {
  const { url, name } = props[0];
  return (
    <Fragment>
      <img src={url} alt={name || "C"} className="tag-image" />
    </Fragment>
  );
};

export default TagImage;
