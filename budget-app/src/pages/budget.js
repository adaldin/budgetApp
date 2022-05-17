import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Container from "react-bootstrap/Container";
import BudgetForm from "../components/budgetForm/BudgetForm";
import SideBar from "../components/sideBar/SideBar";

function Budget() {
  return (
    <React.Fragment>
      <Container fluid>
        <Header></Header>
        <main>
          <BudgetForm></BudgetForm>
          <SideBar></SideBar>
        </main>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
}
export default Budget;
