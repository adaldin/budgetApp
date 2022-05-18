import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BudgetForm from "../components/budgetForm/BudgetForm";
import SideBar from "../components/sideBar/SideBar";

function Budget() {
  return (
    <Container fluid className="mt-5 bg-secondary text-light p-5">
      <Row>
        <Col sm={12} md={7}>
          <BudgetForm></BudgetForm>
        </Col>
        <Col sm={12} md={5}>
          <SideBar></SideBar>
        </Col>
      </Row>
    </Container>
  );
}
export default Budget;
