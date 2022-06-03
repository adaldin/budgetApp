import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { pricing } from "../pricing";
import { nanoid } from "nanoid";
import Panell from "../components/Panell";
import WebOptions from "../components/WebOptions";
import { Form } from "react-bootstrap";
// import BudgetForm from "../components/budgetForm/BudgetForm";
// import SideBar from "../components/sideBar/SideBar";

function Budget() {
  // useStates
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("product")) || {
      web: false,
      seo: false,
      ads: false,
      pages: 1,
      languages: 1,
    }
  );
  const [total, setTotal] = useState(0);

  const [budget, setBudget] = useState(
    JSON.parse(localStorage.getItem("budget")) || []
  );

  // useEffect
  useEffect(() => {
    updateTotal();
  }, [product]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);

  useEffect(() => {
    localStorage.setItem("budget", JSON.stringify(budget));
  }, [budget]);

  // lógica
  function updateBudget(event) {
    event.preventDefault();
    let { name, value, checked, type } = event.target;
    let newBudget = { ...product };
    if (value === "") {
      value = 0;
    }

    if (type === "submit" || type === "text" || type === "checkbox")
      newBudget[name] = type === "checkbox" ? checked : parseInt(value);
    setProduct(newBudget);
  }

  function updateTotal() {
    let newTotal = 0;
    for (const key in product) {
      if (typeof product[key] === "boolean" && product[key]) {
        newTotal = newTotal + pricing[key];
      } else if (typeof product[key] === "number" && product[key] > 1) {
        newTotal = newTotal + (product[key] - 1) * pricing[key];
      }
    }

    setTotal(newTotal);
  }

  function handleClick(event) {
    event.preventDefault();
    const { name, value, id } = event.target;

    if (id === "pagesAdd") {
      setProduct((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) + 1 };
      });
    } else if (id === "pagesSubs") {
      setProduct((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) - 1 };
      });
    } else if (id === "langAdd") {
      setProduct((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) + 1 };
      });
    } else if (id === "langSubs") {
      setProduct((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) - 1 };
      });
    }
  }

  function createNewBudget(event) {
    event.preventDefault();
    let newDate = new Date().toDateString();
    let newBudget = {};

    for (const key in product) {
      if (typeof product[key] === "boolean" && product[key]) {
        newBudget = {
          id: nanoid(),
          date: newDate,
          details: product,
          total: total,
        };
      }
    }
    if (newBudget.id !== undefined) {
      setBudget((prevBudget) => [newBudget, ...prevBudget]);
    }
    // setCurrentBudgetId(newBudget.id);
  }

  // localStorage.clear()

  return (
    <Container fluid className="mt-5 bg-secondary text-light p-5">
      <Row>
        <Form as={Col} sm={12} md={7}>
          <div>
            <h4>¿Qué quieres realizar?</h4>
          </div>
          <div>
            <input
              type="checkbox"
              name="web"
              checked={product.web}
              onChange={updateBudget}
            />
            <label>Costo por web: 500€</label>
          </div>

          {product.web ? (
            <Panell>
              <WebOptions
                handleClick={handleClick}
                updateBudget={updateBudget}
                value={product.pages}
                name="páginas"
              />
              <WebOptions
                handleClick={handleClick}
                updateBudget={updateBudget}
                value={product.languages}
                name="idiomas"
              />
            </Panell>
          ) : (
            " "
          )}

          <div>
            <input
              type="checkbox"
              name="seo"
              checked={product.seo}
              onChange={updateBudget}
            />
            <label>Costo por seo: 300€</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="ads"
              checked={product.ads}
              onChange={updateBudget}
            />
            <label>Costo por Google Ads: 200€</label>
          </div>
          <div>
            <button onClick={createNewBudget}>Quiero mi presupuesto</button>
          </div>
          <div>
            <h5>Total: {total}€</h5>
          </div>
        </Form>
        <Col sm={12} md={5}>
          <p> SideBar</p>
        </Col>
      </Row>
    </Container>
  );
}
export default Budget;
