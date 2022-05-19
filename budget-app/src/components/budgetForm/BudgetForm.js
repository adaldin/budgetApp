import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function BudgetForm() {
  const [formData, setFormData] = useState({
    web: false,
    seo: false,
    ads: false,
  });

  function handleChange(event) {
    const { name, checked } = event.target;
    console.log(name);
    console.log(checked);
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: checked,
      };
    });
    console.log(formData);
  }

  return (
    <Container fluid>
      <Row className="text-center text-md-start">
        <h3>¿Que necesitas?</h3>
      </Row>
      <Row>
        <Form>
          <Row className="g-3 text-center text-md-start">
            <Col sm={12}>
              <input
                type="checkbox"
                id="web"
                name="web"
                checked={formData.web}
                onChange={handleChange}
              />
              <label htmlFor="web">Una web. Costo 500€</label>
            </Col>
            <Col sm={12}>
              <input
                type="checkbox"
                id="seo"
                name="seo"
                checked={formData.seo}
                onChange={handleChange}
              />
              <label htmlFor="seo">Seo. Costo 300€</label>
            </Col>
            <Col sm={12}>
              <input
                type="checkbox"
                id="ads"
                name="ads"
                checked={formData.ads}
                onChange={handleChange}
              />
              <label htmlFor="ads">GoogleAds. Costo 200€</label>
            </Col>
            <Col sm={12}>
              <h6>Total:</h6>
            </Col>
            <Col sm={12}>
              <Button variant="outline-light">Pide tu presupuesto</Button>
            </Col>
          </Row>
        </Form>
      </Row>
    </Container>
  );
}
export default BudgetForm;
