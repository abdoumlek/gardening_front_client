import React from "react";
import "./Gallery.css";


export default function Gallery({ img, name, description }) {
  return (
    <div className="col-12 col-lg-4">
      <div className="portfolio my-3">
        <div className="portfolio-image text-center">
          <img className="rounded img-fluid " alt={name} src={process.env.REACT_APP_UPLOADS_FOLDER + img} />
        </div>
        <div className="portfolio-details text-center pt-5">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
