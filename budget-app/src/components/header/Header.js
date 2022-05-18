import { Link } from "react-router-dom";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavLink from "react-bootstrap/NavLink";
// import Stack from "react-bootstrap/Stack";

function Header() {
  return (
    <Navbar bg="light" variant="light" fixed="top">
      <Container fluid>
        <Row className="w-100">
          <Col sm={12} md={4}>
            <Navbar.Brand href="#">X-Solutions</Navbar.Brand>
          </Col>
          <Col sm={12} md={8}>
            <Nav className="justify-content-end">
              <NavLink href="/">
                <Link to="/">Home</Link>
              </NavLink>
              <NavLink href="">
                <Link to="/budget">Get Your Budget</Link>
              </NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
