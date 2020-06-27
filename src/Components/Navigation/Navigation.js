import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <div className="navbar navbar-expand-lg sticky-top ">
        <Link to="/" className="navbar-brand">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
