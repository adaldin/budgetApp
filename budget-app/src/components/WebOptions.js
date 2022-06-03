import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function WebOptions(props) {
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <label htmlFor="pages">
            {props.name === "pages" ? "Número de páginas" : "Número de idiomas"}
          </label>
        </Col>
        <Col sm={12} className="counter__container">
          <Button
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
            onClick={props.handleClick}
            name={props.name}
            id={props.name + "Add"}
            value={props.value}
          >
            +
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
export default WebOptions;
