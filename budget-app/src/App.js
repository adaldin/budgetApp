import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/budget">
          <Budget></Budget>
        </Route>
      </Switch>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
