import React, { Fragment, useState, Suspense, lazy } from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import Imgcardback from "./../../../assets/images/card.png";
import ModalCard from "../ModalCard/ModalCard.component";
import "./CollectionCard.styles.scss";

//import Image from "./../../Common/Image/Image.component";
const Image = lazy(() => import("../../Common/Image/Image.component"));

const CollectionCard = ({ items }) => {
  const [itemCard, setItemCard] = useState([]);
  const [show, setShow] = useState(false);


  return (
    <Fragment>
      {items.map((item) => {
        //const { id, name, image_background, games } = item;

        return (
          <div className="col-6 col-md-2" key={item.id}>
            <Button
              variant="link"
              onClick={() => {
                setItemCard(item);
                setShow(true);
              }}
            >
              <Suspense
                fallback={
                  <img
                    src={Imgcardback}
                    className="my-0"
                    width="100%"
                    height="100%"
                  />
                }
              >
                <Image
                  src={item.card_images[0].image_url_small}
                  classnames="hvr-buzz  my-2"
                  width="100%"
                  height="250px"
                ></Image>
              </Suspense>
            </Button>
          </div>
        );
      })}

      {itemCard.length == undefined ? (

        <ModalCard show = {show} setShow = {setShow} itemCard = {itemCard} />

      ) : itemCard.length <= 0 ? (

        <></>

      ) : (

        <></>

      )}

    </Fragment>
  );
};

CollectionCard.propTypes = {
  items: PropTypes.array,
};

export default CollectionCard;
