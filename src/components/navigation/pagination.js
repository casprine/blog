import React, { Fragment } from "react";

const Pagination = () => {
  return (
    <Fragment>
      <nav className="flex">
        <div className="left">
          <span className="white">
            Page <span className="start"> 1</span> of
          </span>
          <span className="end white"> 40</span>
        </div>
        <div className="right link-inverse">
          <span className="white">Next</span>
        </div>
      </nav>
    </Fragment>
  );
};

export default Pagination;
