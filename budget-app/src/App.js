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
  }, [budget]);

  function updateBudget(e) {
    let { name, value, checked, type } = e.target;
    let newBudget = { ...budget };
    if (value === "") {
      value = 0;
    }
    newBudget[name] = type === "checkbox" ? checked : parseInt(value);
    setBudget(newBudget);
  }

  function updateTotal(event) {
    // event.preventDefault();
    let newTotal = 0;
    const { web, seo, ads, pages, languages } = budget;
    for (const key in budget) {
      if (typeof budget[key] === "boolean" && budget[key]) {
        newTotal = newTotal + pricing[key];
      } else if (typeof budget[key] === "number" && budget[key] > 1) {
        newTotal = newTotal + (budget[key] - 1) * pricing[key];
      }
    }

    setTotal(newTotal);
  }

  return (
    <>
      <form onSubmit={updateTotal}>
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
          <label>Número de páginas</label>
          <input
            type="text"
            name="pages"
            value={budget.pages}
            onChange={updateBudget}
          />
        </div>
        <div>
          <label>Número de idiomas</label>
          <input
            type="text"
            name="languages"
            value={budget.languages}
            onChange={updateBudget}
          />
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
          <button type="submit">Quiero mi presupuesto</button>
        </div>
        <div>
          <h5>Total: {total}€</h5>
        </div>
      </form>
    </>
  );
}

export default App;
