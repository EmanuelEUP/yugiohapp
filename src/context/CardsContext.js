import React, { createContext, useState, useEffect } from "react";
import {
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

  function handleErrors(response) {
    if (!response.ok) {
      throw Error(
        "Error: " +
          response.status +
          " : " +
          response.statusText +
          " " +
          response.url
      ); // response.statusText
    }else{
      return response.json();
    }
  }

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
    fetch(GET_ALLCARDS_FILTER(filter))
      .then((res) => res.json())
      .then((data) => {
        setDoneFetchCards(true);
        setCards(data.data);
      })
      .catch((error) => console.log(error));
  };

  const getSearchedCards = (q_card) => {
    fetch(GET_SEARCHBYNAME_CARD(q_card))
      .then(handleErrors) 
      .then((data) => {
        if (data["error"]) {
          setDoneFetchCards(false);
          setCards(null);
        } else {
          setDoneFetchCards(true);
          setCards(data.data);
        }
      })
      .catch((error) => console.log(error));
  };

  const validateQCard = (e) => {
    try {
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
    } catch (error) {
      console.error(error);
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
