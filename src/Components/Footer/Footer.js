import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container-fluid footer text-center ">
            <h1 className="pt-3">Plantes & Jardins</h1>
            <p>Nous contacter sur (+33) 000000000</p>
            {/* <p>3 rue andré derain 78280 Guyancourt</p> */}
            <p>
                Nous rejoindre sur{" "}
                <Link to="https://www.facebook.com/plantes%20et%20jardins" className="fb-link">
                    facebook
                </Link>
            </p>

            <p>Copyrights 2020</p>
            <p className="my-0 pb-3">
                {/* Created with love By Wiem Themri and Youssef Abdelmalek */}
            </p>
        </div>
    );
}
