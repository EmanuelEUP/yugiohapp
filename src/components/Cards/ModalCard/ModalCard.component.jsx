import React, { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";
import _srccardback from "./../../../assets/images/card.png";
import PropTypes from "prop-types";
import Image from "./../../Common/Image/Image.component"; 

const ModalCard = ({ show, setShow, itemCard }) => {
  const handleClose = () => setShow(false);

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        className=" "
        centered
      >
        <Modal.Header
          closeButton
          className="bgsection05 border border-dark border-0 text-white "
        >
          <Modal.Title>
            <span className="font03 ml-auto">
              ({itemCard.id}) - {itemCard.name}{" "}
            </span>
          </Modal.Title>

          <br></br>
        </Modal.Header>

        <Modal.Body className="bgsection05 border border-dark border-0">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-sm-5">
              
                  <Image
                    src={itemCard.card_images[0].image_url}
                    classnames="hvr-grow-rotate my-0"
                    width="100%"
                    height="100%"
                    alt="_imagecard"
                  ></Image> 

              </div>

              <div className="col-12 col-sm-7">
                <ListGroup as="ul" style={{ fontSize: "small" }}>
                  <ListGroup.Item as="li">
                    {" "}
                    <strong>ID :</strong> {itemCard.id}{" "}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <strong>NAME :</strong> {itemCard.name}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <strong>RACE :</strong> {itemCard.race}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    <strong>ARCHETYPE :</strong> {itemCard.archetype}
                  </ListGroup.Item>

                  <ListGroup.Item as="li">
                    <strong>DESC :</strong>
                    <span> {itemCard.desc}</span>{" "}
                  </ListGroup.Item>

                  {itemCard.atk !== undefined && itemCard.def !== undefined ? (
                    <ListGroup.Item as="li">
                      <h4 className="text-right">
                        <strong>ATK /</strong>
                        <span> {itemCard.atk}</span>
                        &nbsp;
                        <strong>DEF /</strong>
                        <span> {itemCard.def}</span>
                      </h4>
                    </ListGroup.Item>
                  ) : (
                    ""
                  )}
                </ListGroup>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="bgsection05 border border-dark border-0">
          <Button
            variant="danger"
            className="ml-auto d-block mt-2"
            size="sm"
            onClick={handleClose}
          >
            <span>Close Card</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

ModalCard.propTypes = {
  show: PropTypes.bool,
  itemCard:PropTypes.array
};

//show, setShow, itemCard

export default ModalCard;
