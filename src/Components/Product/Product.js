import React from "react";
import "./Product.css";
export default function Product({
  id,
  redBadge,
  greenBadge,
  imgUrl,
  name,
  description,
  price,
  openDetails,
  addToCart,
}) {
  return (
    <div
      className="product__card"
    >
      <div className="product__card-content"  onClick={() => {
        openDetails(id);
      }}>
        <img
          alt={name}
          src={process.env.REACT_APP_THUMBNAILS_FOLDER + imgUrl}
        />
        {redBadge ? (
          <span className="product__badge product__red-badge">{redBadge}</span>
        ) : null}
        {!redBadge && greenBadge ? (
          <span className="product__badge product__green-badge">
            {greenBadge}
          </span>
        ) : null}
        <h2>{name}</h2>
        <p>{description} </p>
        <p>
          Prix <span>{Number(price).toFixed(3)} TND</span>
        </p>
      </div>
      <div>
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            openDetails(id);
          }}
        >
          Détails
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => {
            addToCart(id);
          }}
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
