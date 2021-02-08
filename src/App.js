import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Home from "./Views/Home/Home";
import Products from "./Views/Products/Products";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Views/Contacts/Contacts";
import Cart from "./Views/Cart/Cart"
import "./App.css";
import { Provider } from "react-redux";
import store from "./Store/CartStore";
import CartButton from "./Components/CartButton/CartButton";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
      <CartButton></CartButton>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
