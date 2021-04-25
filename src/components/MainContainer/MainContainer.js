import React from "react";
import DetailContainer from "../DetailContainer/DetailContainer";
import ImageContainer from "../ImageContainer/ImageContainer";
import "./MainContainer.css";

function MainContainer() {
  return (
    <div>
      <div className="image-container">
        <ImageContainer />
      </div>
      <div className="details-container">
        <DetailContainer />
      </div>
    </div>
  );
}

export default MainContainer;
