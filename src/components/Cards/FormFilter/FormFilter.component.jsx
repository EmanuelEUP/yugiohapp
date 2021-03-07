import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
  lazy,
  Suspense,
} from "react";
import Form from "react-bootstrap/Form";
import SearchBar from "./../../../components/Cards/SearchBar/SearchBar.component";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import useSumar from "./../../../hooks/useSumar";
import useRestar from "./../../../hooks/useRestar";

import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";

const FormFilter = ({ validateQCard, getCardsFilter }) => {
  const [filterUpdated, setFilterUpdated] = useState(false);

  const [filter, setFilter] = useState({
    sort: "nosort",
    sortorder: "asc",
    showing: 30,
    num: 30,
    offset: 0,
    language: "en",
  });

  //========================== METODOS PARA LOS CAMPOS DE FILTRO

  const Fnc_onchange_showing = (e) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      showing: Number(value),
      num: Number(value),
      offset: 0,
    }));

    setFilterUpdated(true);
    // getCardsFilter(filter);
  };

  const Fnc_onchange_sort = (e) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      sort: value,
    }));

    setFilterUpdated(true);
    // getCardsFilter(filter);
  };

  const Fnc_onchange_sortorder = (e) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      sortorder: value,
    }));

    setFilterUpdated(true);
    // getCardsFilter(filter);
  };

  const Fnc_onchange_languague = (e) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      language: value,
    }));

    setFilterUpdated(true);
    // getCardsFilter(filter);
  };

  //========================== METODOS PARA LOS BOTONES

  const Fnc_btn_inicio = () => {
    //const { name, value } = e.target;

    let value_offset = Number(filter.offset);
    let value_showing = filter.showing;
    let restar = useRestar(value_offset, value_showing);

    if (restar["result"] >= 0) {
      setFilter((prevState) => ({
        ...prevState,
        offset: Number("0"),
      }));

      setFilterUpdated(true);
    }
  };

  const Fnc_btn_atras = () => {
    //const { name, value } = e.target;

    let value_offset = Number(filter.offset);
    let value_showing = filter.showing;
    let restar = useRestar(value_offset, value_showing);

    if (restar["result"] >= 0) {
      setFilter((prevState) => ({
        ...prevState,
        offset: restar["result"],
      }));

      setFilterUpdated(true);
    }
  };

  const Fnc_btn_siguiente = () => {
    //const { name, value } = e.target;

    let islast = false;
    let offset = 0;

    switch (Number(filter.showing)) {
      case 30:
        offset = 11130;

        if (Number(filter.offset) == 11130) {
          islast = true;
        }
        break;
      case 60:
        offset = 11100;

        if (Number(filter.offset) == 11100) {
          islast = true;
        }
        break;
      case 100:
        offset = 11100;

        if (Number(filter.offset) == 11100) {
          islast = true;
        }
        break;
    }

    let value_offset = Number(filter.offset);
    let value_showing = filter.showing;
    let sumar = useSumar(value_offset, value_showing);

    if (!islast) {
      setFilter((prevState) => ({
        ...prevState,
        offset: sumar["result"],
      }));

      setFilterUpdated(true);
    }
  };

  const Fnc_btn_ultimo = () => {
    //const { name, value } = e.target;

    let islast = false;
    let offset = 0;

    switch (Number(filter.showing)) {
      case 30:
        offset = 11130;

        if (Number(filter.offset) == 11130) {
          islast = true;
        }
        break;
      case 60:
        offset = 11100;

        if (Number(filter.offset) == 11100) {
          islast = true;
        }
        break;
      case 100:
        offset = 11100;

        if (Number(filter.offset) == 11100) {
          islast = true;
        }
        break;
    }

    if (!islast) {
      setFilter((prevState) => ({
        ...prevState,
        offset: Number(offset),
      }));

      setFilterUpdated(true);
    }
  };

  //Life Cycle
  useEffect(() => {
    if (filterUpdated) {
      setFilterUpdated(false);
      getCardsFilter(filter);
    }
  });

  return (
    <Fragment>
      <Form inline>
        <Form.Label
          size="sm"
          className="font01 my-1 mr-2 text-white"
          htmlFor="inlineFormCustomSelectPref"
        >
          Sort By :
        </Form.Label>

        <Form.Control
          size="sm"
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
          name="sort"
          onChange={Fnc_onchange_sort}
        >
          <option value="nosort">No Sort</option>
          <option value="new">Newest</option>
          <option value="atk">ATK</option>
          <option value="def">DEF</option>
          <option value="level">Level</option>
          <option value="name">Name</option>
          <option value="views">Views</option>
          <option value="upvotes">Upvotes</option>
          <option value="downvotes">Downvotes</option>
          <option value="price">Price</option>
          <option value="tcg_date">TCG Release</option>
          <option value="ocg_date">OCG Release</option>
        </Form.Control>

        <Form.Control
          size="sm"
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
          name="sortorder"
          onChange={Fnc_onchange_sortorder}
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </Form.Control>

        <Form.Label
          className="font01 my-1 mr-2 text-white"
          htmlFor="inlineFormCustomSelectPref"
        >
          Showing:
        </Form.Label>

        <Form.Control
          name="showing"
          size="sm"
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
          onChange={Fnc_onchange_showing}
        >
          <option value="30">30 Per Page</option>
          <option value="60">60 Per Page</option>
          <option value="100">100 Per Page</option>
        </Form.Control>

        <Form.Label
          className="font01 my-1 mr-2 text-white"
          htmlFor="inlineFormCustomSelectPref"
        > 
          In: 
        </Form.Label>

        <Form.Control
          size="sm"
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
          name="language"
          onChange={Fnc_onchange_languague}
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="de">DE</option>
          <option value="pt">PT</option>
          <option value="it">IT</option>
        </Form.Control>

        <SearchBar validateQCard={validateQCard} />

        <div className="ml-auto">
          <Button
            size="sm"
            type="button"
            className="mr-2"
            variant="danger"
            onClick={Fnc_btn_inicio}
          >
            <FiChevronsLeft />
          </Button>

          <Button
            size="sm"
            type="button"
            className="mr-2"
            variant="danger"
            onClick={Fnc_btn_atras}
          >
            <FiChevronLeft />
          </Button>

          <Button
            size="sm"
            type="button"
            className="mr-2"
            variant="danger"
            onClick={Fnc_btn_siguiente}
          >
            <FiChevronRight />
          </Button>

          <Button
            size="sm"
            type="button"
            className="mr-2"
            variant="danger"
            onClick={Fnc_btn_ultimo}
          >
            <FiChevronsRight />
          </Button>
        </div>
      </Form>
    </Fragment>
  );
};

FormFilter.propTypes = {
  validateQCard: PropTypes.func,
  getCardsFilter: PropTypes.func,
};

export default FormFilter;
