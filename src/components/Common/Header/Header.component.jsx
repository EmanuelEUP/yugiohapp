import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "./../Image/Image.component";

import IMGYugiLogo from "./../../../assets/images/yugilogo.png";
import "./Header.styles.scss";

const Header = () => (
  <>
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
      <Navbar.Brand to="/">
        <Link className="nav-link" to="/" className="font03 text-white mr-3 ">
          <Image
            src={IMGYugiLogo}
            classnames="hvr-shrink d-inline-block img-fluid"
            width="230"
            height="230"
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {
            //<Nav.Link href="#pricing">Pricing</Nav.Link>
          }
        </Nav>

        <Nav>
          <Nav.Item>
            {" "}
            <Link
              className="nav-link"
              to="/"
              className="font03 text-white mr-3 "
            >
              HOME
            </Link>{" "}
          </Nav.Item>

          <Nav.Item>
            {" "}
            <Link
              className="nav-link"
              to="/cards"
              className="font03 text-white mr-3"
            >
              CARDS
            </Link>{" "}
          </Nav.Item>

          <Nav.Item>
            <Link
              className="nav-link"
              to="/about"
              className="font03 text-white mr-3"
            >
              ABOUT
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>

  /*

  <AppBar position="sticky" className="navbar">
    <Toolbar className="navbar__container">
      <Link to="/" className="navbar__title-link text-white">
        <h1 variant="h4" color="inherit" className='navbar__title'>
          Videogames Browser
        </h1>
      </Link>
      <div>
        <Link to="/genres" className="navbar__item">
          <Typography variant="button" color="inherit" style={{fontWeight: 'bold'}}>
            Genres
          </Typography>
        </Link>
        <Link to="/platforms" className="navbar__item">
          <Typography variant="button" color="inherit" style={{fontWeight: 'bold'}}>
            Platforms
          </Typography>
        </Link>
        <Link to="/publishers" className="navbar__item">
          <Typography variant="button" color="inherit" style={{fontWeight: 'bold'}}>
            Publishers
          </Typography>
        </Link>
      </div>
    </Toolbar>
  </AppBar>

  */
);

export default Header;
