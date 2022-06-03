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
          <label htmlFor="pages">Número de {props.name}</label>
        </Col>
        <Col sm={12} className="counter__container">
          <Button
            onClick={props.handleClick}
            name="pages"
            id="pagesSubs"
            value={props.value}
          >
            -
          </Button>
          <input
            id="pages"
            type="text"
            name="pages"
            value={props.value}
            onChange={props.updateBudget}
            min={1}
          />
          <Button
            onClick={props.handleClick}
            name="pages"
            id="pagesAdd"
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
