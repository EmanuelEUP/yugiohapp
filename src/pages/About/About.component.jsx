import React, { Fragment } from "react";

import Imgabout from "./../../assets/images/about.png";
import Image from "./../../components/Common/Image/Image.component";

import "./About.styles.scss";

const About = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-6">
            <h1 className="h1 text-white font03 pt-5">ABOUT</h1>

            <p className="font01 text-white">
              I am very grateful to you that you were able to access my web page
              based on the YU GI OH card game using the API put on the web by
              (“https://db.ygoprodeck.com/api-guide/”), the The function of the
              website is very simple, this is a database regarding all the cards
              in the series, so if you want to consult one you already know how
              to do it.
            </p>

            <p className="font01 text-white">
              As you know, this page is intended to comply with the objectives
              set for the final REACT project which courses escalab has
              established for the final project, therefore I hope that they
              liked and serve as motivation for all those They are doing the
              same activities that I just did.
            </p>

            <p className="font01 text-white">
              Finally, it is necessary for me to replicate my gratitude with you
              in the most humble way possible, I am grateful to you for the
              knowledge acquired.
            </p>

            <h3 className="text-white font03"> Att Emanuel Clemente Urrutia Picarte</h3>
          </div>

          <div className="col-12 col-md-6">

          <Image
              src={Imgabout}
              classnames="hvr-shrink img-fluid"
              width="100%"
              height="100%"
            />

 
          </div>
        </div>
      </div>
    </Fragment>
  );
};




export default About;
