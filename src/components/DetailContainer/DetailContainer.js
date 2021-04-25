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
    </div>
  );
}

export default DetailContainer;
