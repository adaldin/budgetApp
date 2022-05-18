import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function BudgetForm() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <h3>¿Que necesitas?</h3>
        </Row>
        <Row>
          <Form>
            <Col sm={12}>
              <input
                type="checkbox"
                id="web"
                // checked={formData.}
              />
              <label htmlFor="web">Una web. Costo 500€</label>
            </Col>
            <Col sm={12}>
              <input
                type="checkbox"
                id="seo"
                // checked={formData}
              />
              <label htmlFor="seo">Seo. Costo 300€</label>
            </Col>
            <Col sm={12}>
              <input
                type="checkbox"
                id="seo"
                // checked={formData.}
              />
              <label htmlFor="seo">GoogleAds. Costo 200€</label>
            </Col>
            <Col sm={12} md={6}>
              <Button variant="outline-light">Get your Budget</Button>
            </Col>
          </Form>
        </Row>
      </Container>
    </React.Fragment>
  );
}
export default BudgetForm;
