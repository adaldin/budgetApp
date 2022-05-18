import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar bg="light" variant="light">
      <Container fluid>
        <Row className="w-100">
          <Col sm={12} className="text-center">
            <small>© X-Solutions</small>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Footer;
