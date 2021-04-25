import React from "react";
import "./ImageContainer.css";
import ImageZoom from "react-medium-image-zoom";

function ImageContainer(props) {
  return (
    <>
      <div className="image__item">
        <ImageZoom
          image={{
            src: `${props.src}`,
            alt: `${props.alt}`,
            className: "img",
          }}
          zoomImage={{
            src: `${props.src}`,
            alt: `${props.alt}`,
          }}
        />
      </div>
    </>
  );
}

export default ImageContainer;
