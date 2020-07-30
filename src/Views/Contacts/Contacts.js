import React from "react";
import "./Contacts.css";

export default function Contacts() {
    return (
        <div>
            <div className="contactContainer">
                <h1 className="h1contactUs">Contactez-nous</h1>
                <h2 className="h2contactUs">
                    Avez-vous des questions ou des suggestions ?
                </h2>
            </div>
            <div className=" container contactRowContainer">
                <div className=" row col-12 p-lg-5 p-1 d-flex justify-content-center align-items-center">
                    <p className="mt-5">
                        Afin de répondre efficacement à votre demande, veuillez
                        sélectionner un sujet dans la liste suivante.
                    </p>
                    <form>
                        <div className="form-group mt-5">
                            <div>
                                <label>Objet de votre demande*</label>
                                <div>
                                    <select
                                        className="form-control mb-4"
                                        required
                                    >
                                        <option disabled selected>
                                            Sélectionnez un sujet
                                        </option>
                                        {/* <option value="1">Mon compte client</option> */}
                                        <option value="2">
                                            Commander un produit non existant
                                        </option>
                                        <option value="3">
                                            J'ai besoin d'un conseil
                                        </option>
                                        <option value="4">
                                            Question concernat le délai de
                                            livraison d'un produit
                                        </option>
                                        <option value="5">Autre</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="nom">Nom* :</label>

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
                                <label for="prenom">Prénom* :</label>

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
                                <label for="email">Email :</label>

                                <div>
                                    <input
                                        className="form-control"
                                        type="email"
                                        name="email"
                                        id="email"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="message">
                                    Numéro de téléphone* :
                                </label>

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
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">
                                    Message* :
                                </label>

                                <div>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        required
                                        id="exampleFormControlTextarea1"
                                        rows="6"
                                    ></textarea>
                                </div>
                            </div>
                            <p className="note mt-5">
                                * Les champs marqués d'un astérisque (*) sont
                                obligatoires
                            </p>
                        </div>

                        <div className="text-center mt-5">
                            <button
                                className="btn  btnSubmitForm mb-5"
                                type="submit"
                            >
                                Envoyer mon message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
