import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "../CarritoHeader/CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand id="brand" to="">
            <Link className="navBarLink" to="/">
              Stardew 🌌
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="estaciones me-auto">
              <Link className="navBarLink" to="/categoria/primavera">
                Primavera
              </Link>
              <Link className="navBarLink" to="/categoria/verano">
                Verano
              </Link>
              <Link className="navBarLink" to="/categoria/otoño">
                Otoño
              </Link>
              <Link className="navBarLink" to="/categoria/invierno">
                Invierno
              </Link>
              <CartWidget contador={"(1)"} />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
