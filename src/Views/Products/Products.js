import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Products.css";
import Product from "../../Components/Product/Product";

export default function Products() {
  return (
    <div>
      <div className="container-fluid products__welcome-container">
        <h1 className="products__header">Shop</h1>
      </div>
      <div className="container">
        <Product />
      </div>
    </div>
  );
}
