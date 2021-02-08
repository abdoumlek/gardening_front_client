import React, { useState, useEffect } from "react";
import "./CartButton.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function CartButton() {
  const cartItems = useSelector((state) => state?.cartItems);
  const [itemsCount, setitemsCount] = useState(0);
    const history = useHistory();

  useEffect(() => {
    let counts = 0;
    cartItems.forEach((c) => {
      counts += c.count;
    });
    setitemsCount(counts);
  }, [cartItems]);

  if (itemsCount)
    return (
      <button
        className="btn btn-success cart__button"
        onClick={() => {
          history.push("/cart")
        }}
      >
        <img
          src={require("../../assets/img/shopping-cart-solid.svg")}
          alt="garden"
          className="cart__button__icon"
        ></img>
        <span className="cart__button__badge">{itemsCount}</span>
      </button>
    );
  return <></>;
}
