import React from "react";
import "./Product.css";
import ImageLoading from "../ImageLoading/ImageLoading"
export default function Product({
  id,
  badge,
  imgUrl,
  name,
  description,
  price,
  openDetails,
  addToCart,
}) {
  return (
    <div className="product__card">
      <div className="product__card-content">
      <ImageLoading alt={name} height={150} width={150} imageUrl={imgUrl} />
        {badge ? (
          <span className="product__badge py-1 px-3">{badge}</span>
        ) : null}
        <h2>{name}</h2>
        <p>{description} </p>
        <p>
          Prix <span>{price} TND</span>
        </p>
      </div>
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            openDetails(id);
          }}
        >
          Details
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => {
            addToCart(id);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
