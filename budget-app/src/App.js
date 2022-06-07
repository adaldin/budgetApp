// import { useState, useEffect } from "react";
import "./App.css";
// import WebOptions from "./components/WebOptions.js";
// // import Panell from "./components/Panell.js";
// import { pricing } from "./pricing";
// import { nanoid } from "nanoid";
import Budget from "./pages/Budget";
import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/budget" element={<Budget />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
