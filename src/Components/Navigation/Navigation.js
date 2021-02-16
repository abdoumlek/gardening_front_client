import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Navigation.css";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const cartItems = useSelector((state) => state?.cartItems);
  const [cartActive, setCartActive] = useState(false);
  const [productActive, setProductsActive] = useState(false);
  const [contractsActive, setContractsActive] = useState(false);
  const [accueilActive, setAccueilActive] = useState(false);
  const [showCollapsed, setShowCollapsed] = useState(false)
  useEffect(() => {
    setCartActive(false);
    setProductsActive(false);
    setContractsActive(false);
    setAccueilActive(false);

    switch (location.pathname) {
      case "/cart":
        setCartActive(true);
        break;
      case "/products":
        setProductsActive(true);
        break;
      case "/contacts":
        setContractsActive(true);
        break;
      default:
        setAccueilActive(true);
        break;
    }
  }, [location]);

  return (
    <div className="w-100">
      <div className="navbar navbar-expand-lg position-absolute w-100">
        <Link to="/" className="navbar-brand">
          Plantes & jardins
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          onClick={()=>{setShowCollapsed(old=>!old)}}
        >
          <span className="navbar-toggler-icon" > <img
                src={require("../../assets/img/bars-solid.svg")}
                alt="garden"
                className="burger-menu"
              ></img></span>
        </button>
        <div
          className={showCollapsed? "collapse show navbar-collapse text-right": "collapse navbar-collapse text-right"}
          id="collapsibleNavbar"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/"
                className={accueilActive ? "nav-link active" : "nav-link"}
              >
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className={productActive ? "nav-link active" : "nav-link"}
              >
                Produits
              </Link>
            </li>

            {cartItems?.length ? (<li className="nav-item">
              <Link
                to="/cart"
                className={cartActive ? "nav-link active" : "nav-link"}
              >
                Cart
              </Link>
            </li>): <Redirect to="/" /> }
            {}
            <li className="nav-item">
              <Link
                to="/contacts"
                className={contractsActive ? "nav-link active" : "nav-link"}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
