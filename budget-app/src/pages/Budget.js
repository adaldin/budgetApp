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
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SideBar from "../components/SideBar";

// Para terminar
// setCurrentBudgetId(newBudget.id);
// localStorage.clear()
//validar dubmit con form bootstrap (al menos un checkbox e inputs llenos)
//si web unchecked, total must be clear (sin 30€ o +)
//ui state para edit y create

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

  const [filtered, setFiltered] = useState({
    budgetList: budget,
  });

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

  //   useEffect(() => {
  //     setFiltered((prevFilter) => {
  //       return prevFilter.budgetList === budget;
  //     });
  //   }, [budget]);

  // lógica
  function updateBudget(event) {
    event.preventDefault();
    let { name, value, checked, type } = event.target;
    let newBudget = { ...product };
    if (value === "") {
      value = 0;
    }

    if (type === "submit" || type === "text" || type === "checkbox") {
      newBudget[name] = type === "checkbox" ? checked : value;
      setProduct(newBudget);
    }
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
    } else if (id === "languagesAdd") {
      setProduct((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) + 1 };
      });
    } else if (id === "languagesSubs") {
      setProduct((prevValue) => {
        return { ...prevValue, [name]: parseInt(value) - 1 };
      });
    }
  }

  function createNewBudget(event) {
    event.preventDefault();
    let newDate = new Date();
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

  function handleFilter(event) {
    const { name, type, value } = event.target;
    if (budget.length > 0 && type === "text") {
      filterBudgets(value);
      console.log(filtered);
    } else if (budget.length > 0 && type === "button") {
      switch (name) {
        case "alpha":
          let result = budget.sort((a, b) =>
            a.details.budgetName.localeCompare(b.details.budgetName)
          );
          console.log(result);
          break;
        case "date":
          let date = budget.sort((a, b) => a.date - b.date);
          console.log(date);
          break;
        default:
          console.log(`No se ha seleccionado ninguna opción válida.`);
        //   case "restart":
        //     let reset =  aquí reseteará filtered list
        //     console.log(date);
        //     break;
      }
    } else {
      console.log("no budget yet");
    }
  }

  function normalizeSearch(budgetsName) {
    return budgetsName
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  function filterBudgets(currentValue) {
    const filtered = budget.filter((b) => {
      return normalizeSearch(b.details.budgetName).includes(currentValue);
    });
    setFiltered(filtered);
  }

  return (
    <Container fluid className="mt-5 bg-secondary text-light p-5">
      <SideBar budgets={budget} handleFilter={handleFilter} />
      <Row as={Form}>
        <Col sm={12} md={7}>
          <div>
            <h4>¿Qué quieres realizar?</h4>
          </div>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              required
              type="checkbox"
              label="Costo por web: 500€"
              name="web"
              checked={product.web}
              onChange={updateBudget}
            />
          </Form.Group>

          {product.web ? (
            <Panell>
              <WebOptions
                handleClick={handleClick}
                updateBudget={updateBudget}
                value={product.pages}
                name="pages"
              />
              <WebOptions
                handleClick={handleClick}
                updateBudget={updateBudget}
                value={product.languages}
                name="languages"
              />
            </Panell>
          ) : (
            " "
          )}
          <Form.Group className="mb-3" controlId="seoCheckbox">
            <Form.Check
              required
              type="checkbox"
              label="Costo por seo: 300€"
              name="seo"
              checked={product.seo}
              onChange={updateBudget}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="adsCheckbox">
            <Form.Check
              required
              type="checkbox"
              label="Costo por Google Ads: 200€"
              name="ads"
              checked={product.ads}
              onChange={updateBudget}
            />
          </Form.Group>
          <Col sm={12} md={6}>
            <InputGroup className="mb-3 d-flex">
              <FormControl
                onChange={updateBudget}
                required
                name="budgetName"
                placeholder="Nombre del presupuesto"
                aria-label="Nombre del presupuesto"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">Portfolio</InputGroup.Text>
            </InputGroup>
            <Form.Text className="text-white">
              No compartiremos estos datos con nadie.
            </Form.Text>
          </Col>
          <Col sm={12} md={6}>
            <InputGroup className="mb-3 d-flex">
              <FormControl
                onChange={updateBudget}
                required
                name="clientName"
                placeholder="Nombre del cliente"
                aria-label="Nombre del cliente"
                aria-describedby="basic-addon3"
              />
              <InputGroup.Text id="basic-addon3">Carles Pagés</InputGroup.Text>
            </InputGroup>
            <Form.Text className="text-white">
              No compartiremos estos datos con nadie.
            </Form.Text>
          </Col>
        </Col>
        <div>
          <Button variant="outline-light" onClick={createNewBudget}>
            Quiero mi presupuesto
          </Button>
        </div>
        <div>
          <h5>Total: {total}€</h5>
        </div>
      </Row>
    </Container>
  );
}
export default Budget;
