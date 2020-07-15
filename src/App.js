import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Views/Home/Home";
import Products from "./Views/Products/Products";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Views/Contacts/Contacts"; // importer le composant de la page contact
import "./App.css";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/contacts">  {/*  Chargement dynamique de la page par rapport à la route */}
          <Contacts />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
