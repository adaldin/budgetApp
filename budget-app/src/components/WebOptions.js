import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import PopUp from "./PopUp";
import { useState } from "react";

function WebOptions(props) {
  const [popUp, setPopUp] = useState(false);
  function handlePopUp() {
    setPopUp((prevPopUp) => !prevPopUp);
  }

  function handleClose() {
    setPopUp((prevPopUp) => !prevPopUp);
  }

  return (
    <Container>
      <Row>
        <Col sm={12}>
          <label htmlFor="pages">
            {props.name === "pages" ? "Número de páginas" : "Número de idiomas"}
          </label>
        </Col>
        <Col sm={9} className="counter__container">
          <Button
            variant="outline-light"
            onClick={props.handleClick}
            name={props.name}
            id={props.name + "Subs"}
            value={props.value}
          >
            -
          </Button>
          <input
            id={props.name}
            type="text"
            name={props.name}
            value={props.value}
            onChange={props.updateBudget}
            min={1}
          />
          <Button
            variant="outline-light"
            onClick={props.handleClick}
            name={props.name}
            id={props.name + "Add"}
            value={props.value}
          >
            +
          </Button>
          <Button
            className="border-0 bg-transparent"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handlePopUp}
          >
            <i className="bi bi-info-circle"></i>
          </Button>
          <PopUp
            show={popUp}
            handleClose={handleClose}
            description={props.name}
            quantity={props.value}
          ></PopUp>
        </Col>
      </Row>
    </Container>
  );
}
export default WebOptions;
