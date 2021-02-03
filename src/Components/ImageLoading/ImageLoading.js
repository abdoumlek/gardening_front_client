import React, { useState } from "react";

const ImageLoading = ({ imageUrl, width, height, alt }) => {
  const [highResClass, setHighResClass] = useState("d-none");
  const [lowResClass, setLowResClass] = useState("d-block");

  const highResImgLoaded = () => {
    setHighResClass("d-block");
    setLowResClass("d-none");
  };

  return (
    <div className="image-container d-inline-block">
      <img
        alt={alt}
        className={lowResClass + " w-100" }
        src={`https://ik.imagekit.io/cjvyejrxtm/${imageUrl}?tr=h-${height??"auto"},w-${width??"auto"},bl-${Math.ceil(
          height / 50
        )}`}
      ></img>
      <img
        alt={alt}
        className={highResClass + " w-100"}
        src={`https://ik.imagekit.io/cjvyejrxtm/${imageUrl}?tr=h-${height},w-${width}`}
        onLoad={highResImgLoaded}
      ></img>
    </div>
  );
};

export default ImageLoading;
