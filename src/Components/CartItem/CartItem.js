import React from "react";
import ImageLoading from "../ImageLoading/ImageLoading";

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
    <div className="row mb-3 underlined">
      <div className="col-4">
        <ImageLoading alt={name} height={150} width={150} imageUrl={imgUrl} />
      </div>
      <div className="col-2">
        <h2>{name}</h2>

        <button
          className="btn btn-danger m-2"
          onClick={() => {
            delete_item();
          }}
        >
          delete
        </button>
      </div>
      <div className="col-2">
        <button
          className="btn btn-warning m-2"
          onClick={() => {
            decrease();
          }}
        >
          -
        </button>
        {quantity}
        <button
          className="btn btn-success m-2"
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
      </div>
      <div className="col-2">
        <p>
          Prix <span>{Number(price * (1 - discount)).toFixed(3)} TND</span>
        </p>
      </div>
      <div className="col-2">
        {Number(price * (1 - discount) * quantity).toFixed(3)} TND
      </div>

    </div>
  );
}
