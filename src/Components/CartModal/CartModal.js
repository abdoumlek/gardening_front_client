import React from "react";
import ReactModal from "react-modal";
import "./CartModal.css";

export default function CartModal({ show, closeModal, onSubmit }) {
  return (
    <ReactModal isOpen={show} className="Modal" overlayClassName="Overlay">
      <div className="container">

                <h3 className="mt-5 text-center">Merci de renseigner vos informations personnelles afin de valider votre commande</h3>
      <span className="closing-button" onClick={closeModal}>X</span>
        <div className="row">
          <div className="col">
            <form onSubmit={onSubmit}>
              <div className="form-group mt-5">
                <div className="form-group">
                  <label htmlFor="nom">Nom* :</label>

                  <div>
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                      id="nom"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="prenom">Addresse* :</label>

                  <div>
                    <input
                      className="form-control"
                      type="text"
                      name="firstname"
                      id="prenom"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Numéro de téléphone* :</label>

                  <div>
                    <input
                      className="form-control"
                      type="text"
                      name="phone"
                      id="message"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="text-center mt-5">
                <button className="btn  btnSubmitForm mb-5" type="submit">
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
