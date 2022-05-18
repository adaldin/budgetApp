import React from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <Container fluid className="mt-5 bg-secondary text-light p-5">
      <Row>
        <Col sm={12}>
          <h1>Welcome!</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6}>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged.{" "}
          </p>
        </Col>
        <Col sm={12} md={6}>
          <Link to="/budget">
            <Button variant="outline-light">Get your Budget</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
export default Welcome;
