import React, { Fragment, useState} from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button"; 
import _srccardback from "./../../../assets/images/card.png";
import ModalCard from "../ModalCard/ModalCard.component";
import Image from "./../../Common/Image/Image.component";
import "./CollectionCard.styles.scss";
 
const CollectionCard = ({ items }) => {
  const [itemCard, setItemCard] = useState([]);
  const [show, setShow] = useState(false);


  return (
    <Fragment>
      {items.map((item) => {
        
        return (
          <div className="col-6 col-md-2" key={item.id}>
            <Button
              variant="link"
              onClick={() => {
                setItemCard(item);
                setShow(true);
              }}
            > 
                <Image
                  src={item.card_images[0].image_url_small}
                  classnames="hvr-buzz  my-2"
                  width="100%"
                  height="250px"
                  alt="_cardimg"
                ></Image>
 
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
