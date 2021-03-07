import React, { createContext, useState, useEffect } from "react";
import {
  GET_ALLCARDS,
  GET_ALLCARDS_FILTER,
  GET_ALLCARDS_FILTER_BASIC,
  GET_SEARCHBYNAME_CARD,
} from "../constants";

export const CardsContext = createContext();

const CardsContextProvider = ({ children }) => {
  const [doneFetchCards, setDoneFetchCards] = useState(false);
  const [cards, setCards] = useState(false);

  //Life Cycle
  useEffect(() => getCards(), []);
  //useEffect(() => getCardsFilter(), []);

  //Fetch
  const getCards = () => {
    fetch(GET_ALLCARDS_FILTER_BASIC())
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchCards(true);
        setCards(data.data);
      })
      .catch((error) => console.log(error));
  };

  const getCardsFilter = (filter) => {
    console.log("LOS DATOS RECIBIDOS DE FILTER");
    console.log(filter);
    console.log("LA RUTA URL QUEDA : " + GET_ALLCARDS_FILTER(filter));


    fetch(GET_ALLCARDS_FILTER(filter))
      .then((res) => res.json())
      .then((data) => {

        console.log(data.data);

        setDoneFetchCards(true);
        setCards(data.data);
      })
      .catch((error) => console.log(error));
  };

  const getSearchedCards = (q_card) => {
    fetch(GET_SEARCHBYNAME_CARD(q_card))
      .then((res) => res.json())
      .then((data) => {
        //setdoneFetchSearchedGames(true);
        //setSearchedGames(data.results)
        setDoneFetchCards(true);
        setCards(data.data);
      })
      .catch((error) => console.log(error));
  };

  const validateQCard = (e) => {
    let q_card = e.target.value.toLowerCase().trim();

    if (e.type === "keypress" && e.key === "Enter") {
      e.preventDefault();

      if (q_card) {
        setDoneFetchCards(false);
        getSearchedCards(q_card);
      } else {
        getCards();
      }
    }
  };

  return (
    <CardsContext.Provider
      value={{ doneFetchCards, cards, validateQCard, getCardsFilter }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
