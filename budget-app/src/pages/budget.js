import React from "react";
import Container from "react-bootstrap/Container";
import BudgetForm from "../components/budgetForm/BudgetForm";
import SideBar from "../components/sideBar/SideBar";

function Budget() {
  return (
    <Container fluid>
      <main>
        <BudgetForm></BudgetForm>
        <SideBar></SideBar>
      </main>
    </Container>
  );
}
export default Budget;
