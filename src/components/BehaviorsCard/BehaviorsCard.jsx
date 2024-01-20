import React, { useState } from "react";
import "./BehaviorsCard.css";

const BehaviorsCard = ({ svg, text, onContinueClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);

    if (text === "None of the above") {
      onContinueClick();
    }
  };

  const cardStyle = {
    backgroundColor: isClicked ? "#CFEFC4" : "#FFFFF",
  };

  return (
    <div className="behav-icon" style={cardStyle} onClick={handleClick}>
      <img className="behav-img" src={svg} alt="Icon" width="30" height="30" />
      <p className="behav-text">{text}</p>
    </div>
  );
};

export default BehaviorsCard;
