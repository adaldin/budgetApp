import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React from "react";
import Welcome from "./pages/welcome";
import Budget from "./pages/budget";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/budget" element={<Budget />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
