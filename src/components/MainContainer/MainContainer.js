import React from "react";
import DetailContainer from "../DetailContainer/DetailContainer";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./MainContainer.css";
import { imageData } from "../../data";

function MainContainer() {
  return (
    <div className="main-container">
      <div className="image-container">
        <ImageContainer
          src={imageData[0].src}
          alt={imageData[0].alt}
          id={imageData[0].id}
        />
        <ImageContainer
          src={imageData[1].src}
          alt={imageData[1].alt}
          id={imageData[1].id}
        />
        <ImageContainer
          src={imageData[2].src}
          alt={imageData[2].alt}
          id={imageData[2].id}
        />
      </div>
      <div className="details-container">
        <DetailContainer />
      </div>
    </div>
  );
}

export default MainContainer;
