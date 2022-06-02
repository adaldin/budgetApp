import { useState, useEffect } from "react";
import "./App.css";
import { pricing } from "./pricing";

function App() {
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

  function updateTotal(event) {
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
    <>
      <form>
        <div>
          <h4>¿Qué quieres realizar?</h4>
        </div>
        <div>
          <input
            type="checkbox"
            name="web"
            checked={budget.web}
            onChange={updateBudget}
          />
          <label>Costo por web: 500€</label>
        </div>
        <div>
          <label htmlFor="pages">Número de páginas</label>
          <button
            onClick={handleClick}
            name="pages"
            id="pagesSubs"
            value={budget.pages}
          >
            -
          </button>
          <input
            id="pages"
            type="text"
            name="pages"
            value={budget.pages}
            onChange={updateBudget}
          />
          <button
            onClick={handleClick}
            name="pages"
            id="pagesAdd"
            value={budget.pages}
          >
            +
          </button>
        </div>
        <div>
          <label htmlFor="languages">Número de idiomas</label>
          <button
            onClick={handleClick}
            name="languages"
            id="langSubs"
            value={budget.languages}
          >
            -
          </button>
          <input
            id="languages"
            type="text"
            name="languages"
            value={budget.languages}
            onChange={updateBudget}
          />
          <button
            onClick={handleClick}
            name="languages"
            id="langAdd"
            value={budget.languages}
          >
            +
          </button>
        </div>

        <div>
          <input
            type="checkbox"
            name="seo"
            checked={budget.seo}
            onChange={updateBudget}
          />
          <label>Costo por seo: 300€</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="ads"
            checked={budget.ads}
            onChange={updateBudget}
          />
          <label>Costo por Google Ads: 200€</label>
        </div>
        <div>
          <button onClick={updateTotal}>Quiero mi presupuesto</button>
        </div>
        <div>
          <h5>Total: {total}€</h5>
        </div>
      </form>
    </>
  );
}

export default App;
