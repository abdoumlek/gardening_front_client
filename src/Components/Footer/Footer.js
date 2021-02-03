import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="container-fluid footer text-center ">
            <h1 className="pt-3">Plantes & Jardins</h1>
            <p>Nous contacter sur: (+216) 22 733 098</p>
            <p>Nous rendre viste: Corinche route panoramique Bizerte</p>
            <p>
                Nous rejoindre sur  &nbsp;
                <a href="https://www.facebook.com/mnaceurabassi" className="fb-link">
                    facebook
                </a>
            </p>

            <p>Copyrights 2020</p>
            <p className="my-0 pb-3"> 
                {/* Created with love By Wiem Themri and Youssef Abdelmalek */}
             </p> 
        </div>
    );
}
