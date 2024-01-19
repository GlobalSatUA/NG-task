import React from "react";
import "./GoalIcon.css";

const GoalIcon = ({ svg, text, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="goal-icon" onClick={handleClick}>
      <p className="card-text">{text}</p>
      <img className="card-img" src={svg} alt="Icon" width="84" height="172" />
    </div>
  );
};

export default GoalIcon;
