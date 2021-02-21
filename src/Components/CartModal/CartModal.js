import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import * as CartActions from "../../Store/CartActions";

import "./CartModal.css";

export default function CartModal({ show, closeModal, onSubmit, loading }) {
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name?.length && address?.length && phoneNumber?.length)
    dispatch(CartActions.setUserInformations(name,phoneNumber,address));
  }, [name, address, phoneNumber, dispatch])
  return (
    <ReactModal isOpen={show} className="Modal" overlayClassName="Overlay">
      <div className="container">

                <h3 className="mt-5 text-center">Merci de renseigner vos informations personnelles afin de valider votre commande</h3>
      <span className="closing-button" onClick={closeModal}>X</span>
        <div className="row">
          <div className="col">
            <div>
              <div className="form-group mt-5">
                <div className="form-group">
                  <label htmlFor="nom">Nom* :</label>

                  <div>
                    <input
                      className="form-control"
                      type="text"
                      name="lastname"
                      id="nom"
                      onChange={v=>{setName(v.target.value)}}
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
                      onChange={v=>{setAddress(v.target.value)}}
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
                      onChange={v=>{setPhoneNumber(v.target.value)}}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="text-center mt-5">
                <button className="btn  btnSubmitForm mb-5" type="button" disabled={loading || !name?.length || !address?.length || !phoneNumber?.length} onClick={onSubmit}>
                {loading && (
                  <span className="min-width-button">
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </span>
                )}
                {!loading && <span>Valider</span>}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactModal>
  );
}
