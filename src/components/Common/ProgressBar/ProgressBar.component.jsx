import React from "react";

import Spinner from "react-bootstrap/Spinner";
import "./ProgressBar.styles.scss";

const ProgressBar = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 d-block mx-auto">
        <Spinner
          className="d-bloc mx-auto"
          animation="border"
          variant="warning"
        />
      </div>
    </div>
  </div>
);

export default ProgressBar;
