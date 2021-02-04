import React from "react";
import ImageLoading from "../ImageLoading/ImageLoading"

export default function CartItem({
  discount,
  imgUrl,
  name,
  description,
  price,
  increase,
  decrease,
  delete_item,
  quantity,
}) {
  return (
    <>
      <div className="col">
        <ImageLoading alt={name} height={150} width={150} imageUrl={imgUrl} />
        <h2>{name}</h2>
        <p>
          Prix <span>{Number(price * (1 - discount)).toFixed(3)} TND</span>
        </p>
      </div>
      <div className="col">{quantity}</div>
      <div className="col">
        {Number(price * (1 - discount) * quantity).toFixed(3)}
      </div>
      <div className="col">
        <button
          className="btn btn-primary m-2"
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => {
            decrease();
          }}
        >
          -
        </button>
        <button
          className="btn btn-success m-2"
          onClick={() => {
            delete_item();
          }}
        >
          delete
        </button>
      </div>
    </>
  );
}
