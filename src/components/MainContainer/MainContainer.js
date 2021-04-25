import React from "react";
import DetailContainer from "../DetailContainer/DetailContainer";
import ImageContainer from "../ImageContainer/ImageContainer";

function MainContainer() {
  return (
    <div>
      <h1> Main Section </h1>
      <ImageContainer />
      <div className="details-container">
        <DetailContainer />
      </div>
    </div>
  );
}

export default MainContainer;
