import React, { useState } from "react";
import { toast } from "react-toastify";

import "./Cart.css";
import { useDispatch, useSelector } from "react-redux";
import * as CartActions from "../../Store/CartActions";
import CartItem from "../../Components/CartItem/CartItem";
import CartModal from "../../Components/CartModal/CartModal";
import SuccessModal from "../../Components/SuccessModal/SuccessModal";
import cartService from "../../Services/cartService";

export default function Products() {
  const state = useSelector((state) => state);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      await cartService.sendOrder(body);
      toast.success("Commande envoyé avec Succés");
      setShowSuccessModal(true);
    } catch (e) {
      toast.error("Une erreur est survenue veuillez réessayer plus tard");
    } finally {
      setLoading(false);
      setShowModal(false);
    }
  };
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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
    return Number(price + 7).toFixed(3);
  };
  const itemsCount = () => {
    let count = 0;
    currentCart.forEach((c) => {
      count += c.count;
    });
    return count;
  };
  const calculTotalSansLivraison = () => {
    let price = 0;
    currentCart.forEach((c) => {
      price += c.product.selling_price * c.count * (1 - c.product.discount);
    });
    return Number(price).toFixed(3);
  };
  let productsHtml = currentCart.map((p) => (
    <CartItem
      key={p.product.id}
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
  ));
  let content = (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-9 max-height-800">
            <div className="container">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Plante</th>
                    <th scope="col">Quantité</th>
                    <th scope="col">Prix unitaire</th>
                    <th scope="col">Prix total</th>
                  </tr>
                </thead>
                <tbody>
                 {productsHtml}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 col-md-3 max-height-800 ">
            <div className="container">
              <div className="row mb-3 ">
                <div className="col font-weight-bold text-center">
                  Récapitulatif de votre commande
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-7">{itemsCount()} Produits</div>
                <div className="col-5">{calculTotalSansLivraison()} TND</div>
              </div>

              <div className="row mt-3">
                <div className="col-7">Prix de livraison</div>
                <div className="col-5">7.000 TND</div>
              </div>
              <div className="row mt-3">
                <div className="col-7 font-weight-bold">Total à Payer</div>
                <div className="col-5 font-weight-bold">
                  {calculTotal()} TND
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
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
            </div>
          </div>
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
        loading={loading}
      ></CartModal>
      <SuccessModal
        show={showSuccessModal}
        price={calculTotal()}
        closeModal={() => {
          setShowSuccessModal(false);
          dispatch(CartActions.reset());
        }}
      ></SuccessModal>
      <div className="container-fluid cart__welcome-container">
        <h1 className="products__header">Panier</h1>
      </div>
      <div className="container-fluid my-5">{content}</div>
    </div>
  );
}
