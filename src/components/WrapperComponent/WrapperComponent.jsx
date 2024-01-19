import React from "react";
import "./WrapperComponent.css";
import GoalIcon from "../GoalIcon/GoalIcon";

const WrapperComponent = ({ title, goals, onGoalIconClick }) => {
  const handleGoalIconClick = () => {
    onGoalIconClick();
  };

  return (
    <div>
      <h3 className="title-comp">{title}</h3>
      <div className="goal-icons">
        {goals.map((goal, index) => (
          <GoalIcon
            key={index}
            svg={goal.svg}
            text={goal.text}
            onClick={handleGoalIconClick}
          />
        ))}
      </div>
    </div>
  );
};

export default WrapperComponent;
