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
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import SideBar from "../components/SideBar";
import BudgetList from "../components/BudgetList";

// RoadMap

// Clean code (order setters, and pass them to components to avoid more functions)
//Filtered list html correction (working on console.log)
//generate curentBudgetID() to edit onClick
//ui state para edit y create
//button checkout en detail para sacar todo a carrito
//use params
//Maquetación
//functions BudgetCard handleEdit / handle Delete

function Budget() {
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

  const [validated, setValidated] = useState(false);

  const [filtered, setFiltered] = useState([...budget]);

  const [required, setRequired] = useState(true);

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
    event.preventDefault(event);
    let { name, value, checked, type } = event.target;
    let newBudget = { ...product };

    if (!checked) {
      newBudget[name] = value > 1 ? 1 : 1;
    }
    if (value === "") {
      value = 0;
    }

    if (type === "submit" || type === "text" || type === "checkbox") {
      newBudget[name] = type === "checkbox" ? checked : normalizeSearch(value);
      setProduct(newBudget);
    }
    validateFields(event);
  }

  function validateFields() {
    let anyCheck = Object.values(product).some((item) => item === true);

    if (anyCheck) {
      setRequired((prevRequired) => !prevRequired);
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

      setTotal(newTotal);
    }
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
    const form = event.target;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      let newBudget = {};
      for (const key in product) {
        if (typeof product[key] === "boolean" && product[key]) {
          newBudget = {
            id: nanoid(),
            date: new Date(),
            details: product,
            total: total,
          };
        }
      }
      if (newBudget.id !== undefined) {
        setBudget((prevBudget) => [newBudget, ...prevBudget]);
      }
    }
    setValidated(true);
  }

  function handleFilter(event) {
    const { name, type, value } = event.target;
    let currentValue = normalizeSearch(value);
    let findByInput = [];
    let findByButton = [];

    if (filtered.length > 0 && type === "text") {
      findByInput = filtered.filter((b) =>
        b.details.budgetName.includes(currentValue)
      );
      setFiltered(findByInput);
    } else if ((filtered.length > 0 && type === "button") || type === "reset") {
      switch (name) {
        case "alpha":
          findByButton = filtered.sort((a, b) =>
            a.details.budgetName.localeCompare(b.details.budgetName)
          );
          setFiltered(findByButton);
          break;
        case "date":
          findByButton = filtered.sort((a, b) => a.date.localeCompare(b.date));
          setFiltered(findByButton);
          break;
        case "reset":
          setFiltered(budget);

          break;

        default:
          console.log(`No se ha seleccionado ninguna opción válida.`);
      }
    }
    console.log("filtrado en budget", filtered);
  }

  function normalizeSearch(budgetSearched) {
    return budgetSearched
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  return (
    <Container fluid className="mt-5 bg-secondary text-light p-5">
      <SideBar budgets={budget} handleFilter={handleFilter} />
      <Row>
        <Col
          sm={12}
          md={7}
          as={Form}
          noValidate
          validated={validated}
          onSubmit={createNewBudget}
        >
          <Col sm={12}>
            <div>
              <h4>¿Qué quieres realizar?</h4>
            </div>
            <Form.Group className="mb-3" controlId="webCheckbox">
              <Form.Check
                required={required}
                type="checkbox"
                label="Costo por web: 500€"
                name="web"
                checked={product.web}
                onChange={updateBudget}
                feedback="Debes seleccionar al menos un producto"
                feedbackType="invalid"
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
                required={required}
                type="checkbox"
                label="Costo por seo: 300€"
                name="seo"
                checked={product.seo}
                onChange={updateBudget}
                feedback="Debes seleccionar al menos un producto"
                feedbackType="invalid"
              />
              <Form.Control.Feedback type="invalid">
                Por favor, selecciona al menos un producto
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="adsCheckbox">
              <Form.Check
                required={required}
                type="checkbox"
                label="Costo por Google Ads: 200€"
                name="ads"
                checked={product.ads}
                onChange={updateBudget}
                feedback="Debes seleccionar al menos un producto"
                feedbackType="invalid"
              />
            </Form.Group>
            <Col sm={12}>
              <InputGroup className="mb-3 d-flex" hasValidation>
                <FormControl
                  onChange={updateBudget}
                  required
                  name="budgetName"
                  placeholder="Nombre del presupuesto"
                  aria-label="Nombre del presupuesto"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Text id="basic-addon2">Portfolio</InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa un nombre para el presupuesto.
                </Form.Control.Feedback>
              </InputGroup>
              <Form.Text className="text-white">
                No compartiremos estos datos con nadie.
              </Form.Text>
            </Col>
            <Col sm={12}>
              <InputGroup className="mb-3 d-flex" hasValidation>
                <FormControl
                  onChange={updateBudget}
                  required
                  name="clientName"
                  placeholder="Nombre del cliente"
                  aria-label="Nombre del cliente"
                  aria-describedby="basic-addon3"
                />
                <InputGroup.Text id="basic-addon3">
                  Carles Pagés
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  Por favor, ingresa tu nombre para registrar el presupuesto.
                </Form.Control.Feedback>
              </InputGroup>

              <Form.Text className="text-white">
                No compartiremos estos datos con nadie.
              </Form.Text>
            </Col>
          </Col>
          <div>
            <input type="submit" value="Quiero mi presupuesto" />
          </div>
          <div>
            <h5>Total: {total}€</h5>
          </div>
        </Col>
        <Col sm={12} md={5}>
          <BudgetList filteredBudgets={filtered}></BudgetList>
        </Col>
      </Row>
    </Container>
  );
}
export default Budget;
