import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

function NavComp() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Link to="/">
          <Navbar.Brand>APE</Navbar.Brand>
        </Link>

        <Link to="/home">
          <Navbar.Text>Home</Navbar.Text>
        </Link>
        <Link to="/community">
          <Navbar.Text>Community</Navbar.Text>
        </Link>
        <Link to="/stocks">
          <Navbar.Text>Stocks</Navbar.Text>
        </Link>
        <Link to="/crypto">
          <Navbar.Text>Crypto</Navbar.Text>
        </Link>
      </Container>
    </Navbar>
  );
}

export default NavComp;
