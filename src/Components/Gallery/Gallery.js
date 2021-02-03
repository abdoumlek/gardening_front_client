import React from "react";
import "./Gallery.css";
import ImageLoading from "../ImageLoading/ImageLoading"


export default function Gallery({ img, name, description }) {
  return (
    <div className="col-12 col-lg-4">
      <div className="portfolio my-3">
        <div className="portfolio-image text-center">
          <ImageLoading className="rounded img-fluid " alt={name} height={400} width={400} imageUrl={img} />
        </div>
        <div className="portfolio-details text-center pt-5">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
