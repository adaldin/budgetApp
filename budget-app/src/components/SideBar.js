// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import FormGroup from "react-bootstrap/FormGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
function SideBar(props) {
  return (
    <>
      <Row as={Form} className="align-items-center justify-content-between">
        <Col sm={12} md={8}>
          <FormGroup>
            <Form.Label>Busca por nombre de presupuesto</Form.Label>
            <InputGroup className="mb-3 d-flex">
              <FormControl
                name="nameFilter"
                placeholder="i.e: Portfolio"
                aria-label="i.e: Portfolio"
                onChange={props.handleFilter}
              />
            </InputGroup>
          </FormGroup>
        </Col>

        <Col sm={12} md={4}>
          <Stack
            gap={3}
            direction="horizontal"
            className="justify-content-end p-4"
          >
            <Button name="alpha" onClick={props.handleFilter}>
              A-Z
            </Button>
            <Button name="date" onClick={props.handleFilter}>
              01-11
            </Button>
            <Button name="restart" onClick={props.handleFilter}>
              Restart
            </Button>
          </Stack>
        </Col>
      </Row>
    </>
  );
}
export default SideBar;
