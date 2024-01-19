import React from "react";
import "./ContinueButton.css";

const ContinueButton = ({ onClick, label }) => {
  return (
    <button onClick={onClick} className="continue-button">
      {label}
    </button>
  );
};

export default ContinueButton;
