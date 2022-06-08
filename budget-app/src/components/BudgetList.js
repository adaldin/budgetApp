import Col from "react-bootstrap/Col";
import BudgetCard from "./BudgetCard";
import { Card } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
function BudgetList(props) {
  // function getProducts(arr) {
  //   let productKeyValue = [];
  //   for (let key in arr) {
  //     if (typeof arr[key] === "boolean") {
  //       productKeyValue = [key, arr[key] ? "X" : "-"];
  //     } else if (typeof arr === "number") {
  //       productKeyValue.push({
  //         productKey: key,
  //         productValue: arr[key] ? "x" : "-",
  //       });
  //     }
  //     return productKeyValue;
  //   }
  // }

  const cards = props.filteredBudgets.map((i) => (
    <BudgetCard
      key={i.id}
      budgetName={i.details.budgetName}
      clientName={i.details.clientName}
      // products={Object.entries(props.filteredBudgets).map(([key, value]) => {
      //   return value;
      // })}
      // products={i.details}
      total={i.total}
    ></BudgetCard>
  ));

  return (
    <Col sm={12}>
      <div className="bg-secondary p-4 justify-content-center rounded shadow-lg">
        <Card.Header className="d-flex justify-content-between shadow-lg">
          <div className="d-flex gap-2">
            <h5>Tus presupuestos</h5>
            <div>
              <Badge bg="dark" pill>
                {props.filteredBudgets.length}
              </Badge>
            </div>
          </div>
          <div>
            <button className="border-0 bg-transparent">Clear All</button>
          </div>
        </Card.Header>
        <ul className="p-0 shadow">{cards}</ul>
        <div className="d-grid">
          <Button variant="primary">
            <i className="bi bi-cart-plus"></i>
          </Button>
        </div>
      </div>
    </Col>
  );
}
export default BudgetList;
