import React, { useState, useEffect } from "react";
import "./BehaviorsCard.css";

const BehaviorsCard = ({ svg, text, onContinueClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div
      className={`behav-icon ${isVisible ? "fade-in" : ""}`}
      style={cardStyle}
      onClick={handleClick}
    >
      <img className="behav-img" src={svg} alt="Icon" width="30" height="30" />
      <p className="behav-text">{text}</p>
    </div>
  );
};

export default BehaviorsCard;
