import React from "react";
import Image from "./../Image/Image.component";
import _srcError from "./../../../assets/images/error.png";
import Button from "react-bootstrap/Button";
import { FiChevronLeft } from "react-icons/fi";
import "./ErrorFallbackBoundary.styles.scss";

const ErrorFallbackBoundary = ({
  error,
  componentStack,
  resetErrorBoundary,
}) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-sm-6">
          <Image
            src={_srcError}
            classnames="hvr-grow-rotate my-5"
            width="100%"
            height="100%"
            alt="_error"
          />
        </div>

        <div className="col-12 col-sm-6">
          <div role="alert">
            <p className="text-center text-white font03 text-uppercase h1">
              Something went wrong:
            </p>
            <pre className="font01 text-white text-justify">
              {error.message}
            </pre>

            <Button
              className="font03"
              variant="warning"
              size="lg" 
              block
              onClick={() => {
                // this next line is why the fallbackRender is useful
                // though you could accomplish this with a combination
                // of the FallbackCallback and onReset props as well.
                resetErrorBoundary();
              }}
            >
              <FiChevronLeft />
              Try again
            </Button>

            <button 
            onClick={() => {
              // this next line is why the fallbackRender is useful
              // though you could accomplish this with a combination
              // of the FallbackCallback and onReset props as well.
              resetErrorBoundary();
            }}
          >
            Try again
          </button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorFallbackBoundary;
