import React, { useEffect, useState } from "react";
import "./GoalIcon.css";

const GoalIcon = ({ svg, text, onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`goal-icon ${isVisible ? "show" : ""}`}
      onClick={handleClick}
    >
      <p className="card-text">{text}</p>
      <img className="card-img" src={svg} alt="Icon" width="84" height="172" />
    </div>
  );
};

export default GoalIcon;
