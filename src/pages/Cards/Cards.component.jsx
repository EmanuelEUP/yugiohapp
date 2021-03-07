import React, { Fragment, useContext, useState, useEffect , lazy , Suspense} from "react";
import { CardsContext } from "./../../context/CardsContext";
import ProgressBar from "../../components/Common/ProgressBar/ProgressBar.component";
import CollectionCard from "./../../components/Cards/CollectionCard/CollectionCard.component";
import FormFilter from "./../../components/Cards/FormFilter/FormFilter.component";


const Cards = () => {

  const { doneFetchCards, cards, validateQCard, getCardsFilter } = useContext(
    CardsContext
  );
 

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">

          <FormFilter validateQCard={validateQCard} getCardsFilter = {getCardsFilter}></FormFilter>
     
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

              <ProgressBar />
              
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cards;
