import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home";
import Header from "./Components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
}

export default App;
