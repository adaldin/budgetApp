import { useState, useEffect } from "react";
import "./App.css";

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
    const { name, value, checked, type } = e.target;
    let newBudget = { ...budget };
    newBudget[name] = type === "checkbox" ? checked : parseInt(value);
    setBudget(newBudget);
    console.log(budget);
  }

  function updateTotal() {
    let newTotal = budget.pages * 30;
    setTotal(newTotal);
  }

  return (
    <>
      <form>
        <input
          type="checkbox"
          name="web"
          checked={budget.web}
          onChange={updateBudget}
        />
        <label>Costo por web: 500€</label>
        <div>
          <h5>Total: {total}€</h5>
        </div>
      </form>
    </>
  );
}

export default App;
