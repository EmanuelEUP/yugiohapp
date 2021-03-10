import React, { Fragment} from "react";
import Image from "./../../../components/Common/Image/Image.component"; 
import _srcanotfound from "./../../../assets/images/notfound.png"; 
import _srccard from "./../../../assets/images/card.png"; 
import "./CardNotFound.styles.scss";


const CardNotFound = ({ items }) => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-6">
            <h2 className="font03 text-white text-uppercase text-center text-warning mb-4">
              ¡the playing card was not found in the database.!
            </h2>

            <Image
              src={_srccard}
              classnames="hvr-buzz mx-auto d-block img-fluid "
              width="200"
              height="200"
              alt="_card"
            />

            <h2 className="font03 text-white text-uppercase text-center mt-4">
              please look for a new card game again
            </h2>
          </div>

          <div className="col-12 col-sm-6">
            <Image
              src={_srcanotfound}
              classnames="hvr-shrink"
              width="100%"
              height="100%"
              alt="_notfound"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardNotFound;
