import React, { Fragment } from "react";
import { Colors } from "./index";
import "../../static/sass/global.scss";

const Article = () => {
  return (
    <Fragment>
      <div className="article">
        <h3 className="heading">
          Handling Observables with NgIf and the Async Pipe
        </h3>
      </div>

      <style jsx>{`
        .article {
          background: white;
          outline: 1px solid red;
          // padding: 30px;
        }
      `}</style>
    </Fragment>
  );
};

export { Article };
