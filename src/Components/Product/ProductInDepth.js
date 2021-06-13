import React from "react";
import { useDispatch } from "react-redux";
import * as CartActions from "../../Store/CartActions";
import { toast } from "react-toastify";
import "./ProductInDepth.css"
export default function ProductInDepth({ product }) {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(CartActions.addProduct(product, 1));
    toast.success(product.name + " est ajouté à votre panier");
  };
  return (
    <div className="product__in-depth container mb-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          <img
            src={process.env.REACT_APP_UPLOADS_FOLDER+product.photo}
            alt={product.name}
          />
        </div>
        <div className="col-12 col-lg-8">
          <h2>{product.name}</h2>
          <p>Catégorie : {product.category}</p>
          <p>{product.description}</p>
          <h3>Prix : {parseFloat(product.selling_price).toFixed(3)} TND</h3>
          {parseFloat(product.discount) > 0 && (
            <>
              <h3>Remise : - {parseFloat(product.discount) * 100} %</h3>
              <h3>Prix aprés remise : {(parseFloat(product.selling_price) * (1 - parseFloat(product.discount))).toFixed(3) } TND </h3>
            </>
          )}
          <h3>{parseInt(product.quantity)!==0 ? "En stock" : "En rupture de stock"}</h3>
          <button className="btn btn-success" onClick={() => addToCart()}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
