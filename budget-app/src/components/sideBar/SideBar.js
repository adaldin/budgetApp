import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function SideBar() {
  return (
    <Container fluid>
      <Row className="my-2">
        <label htmlFor="searcherBar"></label>
        <input
          type="text"
          id="searcherBar"
          placeholder="Busca tus presupuestos"
          // checked={formData.}
        />
      </Row>
      <Row className="my-2 d-flex w-100 g-2">
        <Col sm={12} md={4}>
          <Button variant="outline-light">A-Z</Button>
        </Col>
        <Col sm={12} md={4}>
          <Button variant="outline-light">11/2022</Button>
        </Col>
        <Col sm={12} md={4}>
          <Button variant="outline-light">RESTART</Button>
        </Col>
      </Row>
      <Row className="my-2">
        <h6>total</h6>
        <p>300€</p>
      </Row>
    </Container>
  );
}

export default SideBar;
