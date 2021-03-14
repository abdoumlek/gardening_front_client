import React from "react";
import "./CartItem.css"

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
    <tr className="cart__item">
      <td><img src={process.env.REACT_APP_THUMBNAILS_FOLDER + imgUrl} alt={name} />
      <span className="m-2">{name} </span>
      <button
          className="btn btn-link text-danger m-2"
          onClick={() => {
            delete_item();
          }}
        >
          Supprimer
        </button>
    </td>
      <td><button
          className="btn btn-link text-primary mx-1"
          onClick={() => {
            decrease();
          }}
        >
          -
        </button>
        {quantity}
        <button
          className="btn btn-link text-primary mx-1"
          onClick={() => {
            increase();
          }}
        >
          +
        </button>
    </td>
      <td>Prix {Number(price * (1 - discount)).toFixed(3)} TND</td>
      <td>{Number(price * (1 - discount) * quantity).toFixed(3)} TND</td>
    </tr>
  );
}
