import React, { Fragment } from "react";

const Pagination = () => {
  return (
    <Fragment>
      <nav className="flex">
        <div className="left">
          Page <span className="start"> 1</span> of
          <span className="end">40</span>
        </div>

        <div className="right link-inverse">Next</div>
      </nav>

      <style jsx>{`
        nav {
          margin-bottom: 50px;
          margin-top: 20px;
        }

        .left {
          margin-right: auto;
        }

        * {
          font-family: "geo";
        }

        .right {
          font-size: 17px;
        }
      `}</style>
    </Fragment>
  );
};

export { Pagination };
