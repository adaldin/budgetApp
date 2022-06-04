// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import FormGroup from "react-bootstrap/FormGroup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
function SideBar() {
  return (
    <>
      <Col sm={12} md={6}>
        <Form>
          <FormGroup>
            <Form.Label>Busca por fecha</Form.Label>
            <InputGroup className="mb-3 d-flex">
              <FormControl
                //   onChange={updateBudget}
                name="datefilter"
                placeholder=" i.e: 01/12/2022"
                aria-label="Busca por fecha"
              />
            </InputGroup>
          </FormGroup>
        </Form>
      </Col>

      <Col sm={12} md={6}>
        <Stack gap={3} direction="horizontal" className="justify-content-end">
          <Button>A-Z</Button>
          <Button>01-11</Button>
          <Button>Restart</Button>
        </Stack>
      </Col>
    </>
  );
}
export default SideBar;
