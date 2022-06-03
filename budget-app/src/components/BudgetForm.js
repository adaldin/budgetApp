import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function BudgetForm() {
  const [budget, setBudget] = useState({
    web: false,
    seo: false,
    ads: false,
    pages: 1,
    languages: 1,
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    updateTotal();
  }, [budget]); // eslint-disable-line react-hooks/exhaustive-deps

  function updateBudget(event) {
    event.preventDefault();
    let { name, value, checked, type } = event.target;
    let newBudget = { ...budget };
    if (value === "") {
      value = 0;
    }

    if (type === "submit" || type === "text" || type === "checkbox")
      newBudget[name] = type === "checkbox" ? checked : parseInt(value);
    setBudget(newBudget);
  }

  function updateTotal() {
    let newTotal = 0;
    for (const key in budget) {
      if (typeof budget[key] === "boolean" && budget[key]) {
        newTotal = newTotal + pricing[key];
      } else if (typeof budget[key] === "number" && budget[key] > 1) {
        newTotal = newTotal + (budget[key] - 1) * pricing[key];
      }
    }

    setTotal(newTotal);
  }
  function handleClick(event) {
    event.preventDefault();
    const { name, value, id } = event.target;

    if (id === "pagesAdd") {
      setBudget((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) + 1 };
      });
    } else if (id === "pagesSubs") {
      setBudget((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) - 1 };
      });
    } else if (id === "langAdd") {
      setBudget((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) + 1 };
      });
    } else if (id === "langSubs") {
      setBudget((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) - 1 };
      });
    }
  }
  return (
    <Container fluid>
      <Row as={Form} className="text-center text-md-start">
        <h4>¿Qué necesitas?</h4>
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
