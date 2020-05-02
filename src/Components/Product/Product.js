import React from "react";
import "./Product.css";
export default function Product() {
  return (
    <div>
      <img
        alt="product name"
        src="https://landscaping.vamtam.com/wp-content/uploads/2017/03/Tool-4-315x315.jpg"
      ></img>
      <h2>Product</h2>
      <p>Product Description </p>
      <p>
        Prix <span>Prix</span>{" "}
      </p>
      <button class="btn btn-primary">Details </button>
      <button class="btn btn-success">Add to cart</button>
    </div>
  );
}
