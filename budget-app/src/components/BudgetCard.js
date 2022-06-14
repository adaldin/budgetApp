import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Badge from "react-bootstrap/Badge";

function BudgetCard(props) {
  function handleEdit(event) {
    event.preventDefault();
    let myData = localStorage.getItem("budget");
    console.log(myData);
  }

  function handleDelete(event) {
    event.preventDefault();
  }
  return (
    <Card className="bg-dark my-2">
      <Card.Header className="d-flex justify-content-between">
        <div>{props.clientName}</div>
        <div>
          <button className="border-0 bg-transparent" onClick={handleEdit}>
            <i className="bi bi-pencil text-white"></i>
          </button>
          <button className="border-0 bg-transparent" onClick={handleDelete}>
            <i className="bi bi-trash3 text-white"></i>
          </button>
        </div>
      </Card.Header>
      <Card.Body className="d-flex flex-column gap-2">
        <Card.Title> {props.budgetName}</Card.Title>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start g-2"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Productos</div>
              <ul>
                <li>{Object.keys(props.products)}</li>
              </ul>
            </div>
            <Badge bg="primary" pill>
              {props.length}
            </Badge>
          </ListGroup.Item>
        </ListGroup>
        <div className="d-flex justify-content-end">
          <h6>Total: {props.total}€</h6>
        </div>
      </Card.Body>
    </Card>
  );
}
export default BudgetCard;
