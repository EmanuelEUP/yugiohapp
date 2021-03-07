import React, { Fragment } from "react";

import Imgapage404 from "./../../assets/images/PAGE404.png";

import "./Page404.styles.scss";

const Page404 = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <h1 className="h1 text-white font03 pt-5">PAGE 404 - NOT FOUND</h1>

            <p className="font01 text-white">
              The page you are trying to find does not exist.
            </p>
          </div>

          <div className="col-12 col-md-6">
            <img src={Imgapage404} className="hvr-shrink img-fluid" width="100%"></img>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Page404;
