import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function Welcome() {
  return (
    <React.Fragment>
      <Container fluid>
        <h1>Welcome!</h1>
        <p>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.{" "}
        </p>

        <Button>Get your Budget</Button>
      </Container>
    </React.Fragment>
  );
}
export default Welcome;
