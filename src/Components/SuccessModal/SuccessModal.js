import React from "react";
import ReactModal from "react-modal";

import "./SuccessModal.css";

export default function CartModal({ show, closeModal, price }) {
  return (
    <ReactModal isOpen={show} className="Modal" overlayClassName="Overlay">
      <div className="container text-center">
        <img
          className="svg-check-size mt-5"
          alt="Success"
          src={require("../../assets/img/check-circle-solid.svg")}
        />

        <h3 className="text-center">Merci!</h3>
        <span className="closing-button" onClick={closeModal}>
          X
        </span>
        <div className="row">
          <div className="col">
            <div>
              <div className="text-center mt-5">
                <p>
                  Votre commande d'un montant égale à {price}TND a bien été
                  enregistré
                </p>
                <p>
                  Nous vous contacterons par téléphone dans un délais maximum de
                  48h pour confirmer votre commande.
                </p>
                <p className="small-text">
                  Nous nous réservons le droit d'annuler votre commande. Pour en
                  savoir plus veuillez nous contacter
                </p>
                <button
                  className="btn  btnSubmitForm mb-5"
                  type="button"
                  onClick={closeModal}
                >
                  Retour
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
