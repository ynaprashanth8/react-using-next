import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const navbar = () => (
  <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
    <Navbar.Brand href="/">Rhub.com</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="#pricing">Contact us</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="signIn">Sign In</Nav.Link>
        <Nav.Link href="sign up">Sign up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbar;
