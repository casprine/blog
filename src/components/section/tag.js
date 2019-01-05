import React, { Fragment } from "react";
import { Colors } from "../common/index";

const Tag = ({ url, name }) => {
  return (
    <Fragment>
      <div className="flex tag">
        <img src={url} alt={name} />
        <span className="white">{name}</span>
      </div>
      <style jsx>
        {`
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
            `}
      </style>
    </Fragment>
  );
};

export default Tag;
