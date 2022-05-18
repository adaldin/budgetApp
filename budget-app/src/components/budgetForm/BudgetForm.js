import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function BudgetForm() {
  return (
    <React.Fragment>
      <Container fluid>
        <h3>¿Que necesitas?</h3>
        <Form>
          <label htmlFor="web">Una web. Costo 500€</label>
          <input
            type="checkbox"
            id="web"
            // checked={formData.}
          />
          <label htmlFor="seo">Seo. Costo 300€</label>
          <input
            type="checkbox"
            id="seo"
            // checked={formData}
          />
          <label htmlFor="seo">GoogleAds. Costo 200€</label>
          <input
            type="checkbox"
            id="seo"
            // checked={formData.}
          />
        </Form>
      </Container>
    </React.Fragment>
  );
}
export default BudgetForm;
