import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import Image from "./../Image/Image.component";

import _srcYugiLogo from "./../../../assets/images/yugilogo.png";
import "./Header.styles.scss";

const Header = () => (

  <div>
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">

      <Navbar.Brand >
        <Link className="nav-link" to="/" className="font03 text-white mr-3 ">
          <Image
            src={_srcYugiLogo}
            classnames="hvr-shrink d-inline-block img-fluid"
            width="230"
            height="230"
            alt="_yugilogo"
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
            
            <Link
              className="nav-link"
              to="/"
              className="font03 text-white mr-3 "
            >
              HOME
            </Link>
          </Nav.Item>

          <Nav.Item>
           
            <Link
              className="nav-link"
              to="/cards"
              className="font03 text-white mr-3"
            >
              CARDS
            </Link>
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
  </div>

);

export default Header;
