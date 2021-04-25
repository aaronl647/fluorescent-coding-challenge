import React from "react";
import "./Button.css";

const STYLES = [
  "btn--primary",
  "btn--red",
  "btn--green",
  "btn--blue",
  "btn--cart",
];
const SIZES = ["btn--small", "btn--circle", "btn--medium"];

export default function Button({
  children,
  id,
  style,
  onClick,
  buttonStyle,
  buttonSize,
}) {
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <div>
      <button
        id={id}
        style={style}
        className={`btn ${checkButtonSize} ${checkButtonStyle} `}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
