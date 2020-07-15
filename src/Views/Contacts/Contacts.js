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
                <p>Vous pouvez utiliser ce formulaire de contact :</p>
            </div>
            <p className="mt-5">
                Afin de répondre efficacement à votre demande, veuillez
                sélectionner un sujet dans la liste suivante.
            </p>

            <form>
                {" "}
                <div className="contactForm mt-5">
                    <div>
                        <label>Objet de votre demande*</label>
                        <div>
                            <select required>
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
                                    Question concernat le délai de livraison
                                    d'un produit
                                </option>
                                <option value="5">Autre</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label>
                            Nom* :
                            <div>
                                <input type="text" name="lastname" required />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            prénom* :
                            <div>
                                <input type="text" name="firstname" required />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Email :
                            <div>
                                <input type="text" name="email" />
                            </div>
                        </label>
                    </div>{" "}
                    <div>
                        <label>
                            Numéro de téléphone* :
                            <div>
                                <input type="text" name="phone" required />
                            </div>
                        </label>
                    </div>
                    <div>
                        <label>
                            Message* :
                            <div>
                                <textarea name="message" required></textarea>
                            </div>
                        </label>
                    </div>
                    <p>
                        * Les champs marqués d'un astérisque (*) sont
                        obligatoires
                    </p>
                </div>
                <div className="text-center">
                    <button className="btn  btnSubmitForm mb-5" type="submit">
                        Envoyer mon message
                    </button>
                </div>
            </form>
        </div>
    );
}
