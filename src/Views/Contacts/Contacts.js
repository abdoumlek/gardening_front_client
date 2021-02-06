import React, { useState } from "react";
import "./Contacts.css";
import messageService from "../../Services/messageService";
import { toast } from "react-toastify";

export default function Contacts() {
  const [subject, setSubject] = useState("Demander un devis pour une transformation dans mon jardin");
  const [lastName, setLastName] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [message, setMessage] = useState(null);
  const sendMessage = () => {
    let content = {
        subject,
        lastName,
        firstName,
        phoneNumber,
        message,
        email,
      };
    if (
      subject?.length &&
      lastName?.length &&
      firstName?.length &&
      phoneNumber?.length &&
      message?.length
    ) {
      try{
      messageService.sendMessage(content);
      toast.success("demande envoyé avec succés");
    }catch(e){
        console.error(e);
        toast.error("error occured");
    }
    }
  };
  return (
    <div>
      <div className="contactContainer">
        <h1 className="h1contactUs">Contactez-nous</h1>
        <h2 className="h2contactUs">
          Avez-vous une demande, des questions ou des suggestions ?
        </h2>
      </div>
      <div className=" container contactRowContainer">
        <div className=" row col-12 p-lg-5 p-1 d-flex justify-content-center align-items-center">
          <p className="mt-5">
            Afin de répondre efficacement à votre demande, veuillez sélectionner
            un sujet dans la liste suivante.
          </p>
          <div>
            <div className="form-group mt-5">
              <div>
                <label>Objet de votre demande*</label>
                <div>
                  <select className="form-control mb-4" required onChange={v=>setSubject(v.target.value)}>
                    <option disabled>Sélectionnez un sujet</option>
                    <option value="Demander un devis pour une transformation dans mon jardin">
                      Demander un devis pour une transformation dans mon jardin
                    </option>
                    <option value="Demander un devis pour des travaux d'entretien dans mon jardin">
                      Demander un devis pour des travaux d'entretien dans mon
                      jardin
                    </option>
                    <option value="Commander un produit non existant">Commander un produit non existant</option>
                    <option value="Question concernat le délai de livraison d'un produit">
                      Question concernat le délai de livraison d'un produit
                    </option>

                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="nom">Nom* :</label>

                <div>
                  <input
                    className="form-control"
                    type="text"
                    name="lastname"
                    id="nom"
                    onChange={v=>setLastName(v.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="prenom">Prénom* :</label>

                <div>
                  <input
                    className="form-control"
                    type="text"
                    name="firstname"
                    id="prenom"
                    onChange={v=>setFirstName(v.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email :</label>

                <div>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    onChange={v=>setEmail(v.target.value)}
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
                    onChange={v=>setPhoneNumber(v.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message* :</label>

                <div>
                  <textarea
                    className="form-control"
                    name="message"
                    required
                    id="exampleFormControlTextarea1"
                    rows="6"
                    onChange={v=>setMessage(v.target.value)}
                  ></textarea>
                </div>
              </div>
              <p className="note mt-5">
                * Les champs marqués d'un astérisque (*) sont obligatoires
              </p>
            </div>

            <div className="text-center mt-5">
              <button
                className="btn  btnSubmitForm mb-5"
                type="button"
                onClick={sendMessage}
              >
                Envoyer mon message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
