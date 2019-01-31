import React, { Fragment } from "react";
import Link from "next/link";

const Logo = () => (
  <Fragment>
    <Link href="/">
      <div className="ca-logo center">
        <div className="symbol"> C </div>
      </div>
    </Link>
    {/* <style jsx>
      {`
        .ca-logo {
          width: 40px;
          height: 40px;
          border: 2px solid #071e3d;
          cursor: pointer;
          background: white;
          transition: 0.3s ease-in-out;
        }

        .symbol {
          font-size: 20px;
        }
      `}
    </style> */}
  </Fragment>
);

export default Logo;
