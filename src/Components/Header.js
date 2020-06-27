import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="navbar navbar-expand-lg sticky-top ">
        <Link className="navbar-brand" href="#">
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
              <Link className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Pages
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
