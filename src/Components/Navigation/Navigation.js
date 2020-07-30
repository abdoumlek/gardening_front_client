import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
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
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse text-right"
                    id="collapsibleNavbar"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Accueil
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link">
                                Produits
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Devis
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Galerie
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contacts" className="nav-link">
                                Contacts
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
