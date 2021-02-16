import React, { useState } from "react";
import { toast } from "react-toastify";

import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import * as CartActions from "../../Store/CartActions";
import CartItem from "../../Components/CartItem/CartItem";
import CartModal from "../../Components/CartModal/CartModal";
import cartService from "../../Services/cartService";

export default function Products() {
  const state = useSelector((state) => state);

  const submitOrder = async () => {
    const body = {
      order: {
        name: state.name,
        address: state.address,
        phoneNumber: state.phoneNumber,
      },
      products: state.cartItems.map((c) => {
        return { product_id: c.product.id, count: c.count };
      }),
    };
    try {
      await cartService.sendOrder(body);
      toast.success("Commande envoyé avec Succés");
      dispatch(CartActions.reset());
    } catch (e) {
      toast.error("Une erreur est survenue veuillez réessayer plus tard");
    }
    finally{
      setShowModal(false);
    }
  };
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const currentCart = useSelector((state) => state.cartItems);
  const increaseProductCount = (product, count) => {
    dispatch(CartActions.addProduct(product, count));
  };
  const decreaseProductCount = (product, count) => {
    dispatch(CartActions.removeProduct(product, count));
  };
  const calculTotal = () => {
    let price = 0;
    currentCart.forEach((c) => {
      price += c.product.selling_price * c.count * (1 - c.product.discount);
    });
    return Number(price + 5).toFixed(3);
  };
  let productsHtml = currentCart.map((p) => (
    <div className="row underlined" key={p.product.id}>
      <CartItem
        discount={p.product.discount}
        name={p.product.name}
        description={p.product.category}
        price={p.product.selling_price}
        imgUrl={p.product.photo}
        quantity={p.count}
        increase={() => {
          increaseProductCount(p.product, 1);
        }}
        decrease={() => {
          decreaseProductCount(p.product, 1);
        }}
        delete_item={() => {
          decreaseProductCount(p.product, p.count);
        }}
      />
    </div>
  ));
  let content = (
    <>
      <div className="row underlined">
        <div className="col table__header">Produit</div>
        <div className="col table__header">Quantité</div>
        <div className="col table__header">Prix Total</div>
        <div className="col"></div>
      </div>
      {productsHtml}
      <div className="row underlined">
        <div className="col "></div>
        <div className="col "></div>
        <div className="col"></div>
        <div className="col">Frais de livraison: 5.000 TND</div>
      </div>
      <div className="row underlined">
        <div className="col "></div>
        <div className="col "></div>
        <div className="col"></div>
        <div className="col">Total à Payer: {calculTotal()} TND</div>
      </div>
      <div className="row">
        <div className="col ">
          <button
            className="btn btn-success m-2"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Confirmer La commande
          </button>
        </div>
      </div>
    </>
  );
  if (currentCart.length <= 0) content = "Aucun produits dans le panier";
  return (
    <div>
      <CartModal
        show={showModal}
        closeModal={() => {
          setShowModal(false);
        }}
        onSubmit={submitOrder}
      ></CartModal>
      <div className="container-fluid cart__welcome-container">
        <h1 className="products__header">Cart</h1>
      </div>
      <div className="container">{content}</div>
    </div>
  );
}
