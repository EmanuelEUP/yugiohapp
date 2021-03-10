import React, { Fragment, useContext } from "react";
import { CardsContext } from "./../../context/CardsContext";
import CollectionCard from "./../../components/Cards/CollectionCard/CollectionCard.component";
import FormFilter from "./../../components/Cards/FormFilter/FormFilter.component";
import CardNotFound from "./../../components/Cards/CardNotFound/CardNotFound.component";

const Cards = () => {
  const { doneFetchCards, cards, validateQCard, getCardsFilter } = useContext(
    CardsContext
  );

  return (
    <Fragment>
      
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <FormFilter
              validateQCard={validateQCard}
              getCardsFilter={getCardsFilter}
            ></FormFilter>
          </div>
        </div>

        <div className="row my-4">
          <div className="col-12">
            {doneFetchCards && cards ? (
              <div className="container-fluid">
                <div className="row">
                  <CollectionCard items={cards} />
                </div>
              </div>
            ) : (
              <CardNotFound></CardNotFound>
            )}
          </div>
        </div>
      </div>

    </Fragment>
  );
};

export default Cards;
