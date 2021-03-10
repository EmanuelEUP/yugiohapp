import React from "react";

import Image from "./../../components/Common/Image/Image.component";
import _srcapage404 from "./../../assets/images/PAGE404.png";

import "./Page404.styles.scss";

const Page404 = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 text-center">
            <h1 className="h1 text-white font03 pt-5">PAGE 404 - NOT FOUND</h1>

            <p className="font01 text-white">
              The page you are trying to find does not exist.
            </p>
          </div>

          <div className="col-12 col-md-6">
 
            <Image
              src={_srcapage404}
              classnames="hvr-shrink img-fluid"
              width="100%"
              height="100%"
              alt="page404"
            />
          </div>
        </div>
      </div>
  );
};

export default Page404;
