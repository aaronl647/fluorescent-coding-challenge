import React from "react";
import "../../App.css";
import Button from "../Button/Button";
import "./DetailContainer.css";

function DetailContainer() {
  const title = "Red Flyknit Trainers";
  const price = "$190.00";

  const handleToggle = (e) => {
    e.target.style.background = "#1d1d1d";
    e.target.style.color = "#fff";
  };
  const handleRed = (e) => {
    return (document.querySelector("img").src = "/images/red.png");
  };
  const handleGreen = (e) => {
    return (document.querySelector("img").src = "/images/green.png");
  };
  const handleBlue = (e) => {
    document.querySelector("img").src = "/images/blue.png";
    document.querySelector("img").alt = "Blue Flyknit Trainers";
  };
  return (
    <div className="detail-container">
      <div className="text-details">
        <h1>{title}</h1>
        <section>{price}</section>
      </div>
      <p>Size</p>
      <div className="button-container">
        <Button
          id="small"
          className="btn"
          buttonStyle="btn--primary"
          buttonToggle="btn_toggle"
          buttonSize="btn--small"
          onClick={(e) => {
            handleToggle(e);
          }}
        >
          Small
        </Button>
        <Button
          id="medium"
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--small"
          onClick={(e) => {
            handleToggle(e);
          }}
        >
          Medium
        </Button>
        <Button
          id="large"
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--small"
          onClick={(e) => {
            handleToggle(e);
          }}
        >
          Large
        </Button>
        <Button
          className="btn"
          id="extra-large"
          buttonStyle="btn--primary"
          buttonSize="btn--small"
          onClick={(e) => {
            handleToggle(e);
          }}
        >
          Extra Large
        </Button>
      </div>
      <hr />
      <div className="color-container">
        <p>Colour</p>
        <div className="color-buttons">
          <div className="button-item" id="red">
            <Button
              id="red"
              className="btn"
              buttonSize="btn--circle"
              buttonStyle="btn--red"
              onClick={(e) => {
                handleRed(e);
              }}
            />
          </div>
          <div className="button-item">
            <Button
              id="green"
              className="btn"
              buttonSize="btn--circle"
              buttonStyle="btn--green"
              onClick={(e) => {
                handleGreen(e);
              }}
            />
          </div>
          <div className="button-item">
            <Button
              id="blue"
              className="btn"
              buttonSize="btn--circle"
              buttonStyle="btn--blue"
              onClick={(e) => {
                handleBlue(e);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailContainer;
