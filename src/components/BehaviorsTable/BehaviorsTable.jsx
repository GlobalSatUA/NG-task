import React from "react";
import "./BehaviorsTable.css";
import BehaviorsCard from "../BehaviorsCard/BehaviorsCard";

const BehaviorsTable = ({ behaviors, onContinueClick }) => {
  return (
    <div className="table">
      <div className="behav-icons">
        {behaviors.map((behavior, index) => (
          <BehaviorsCard
            key={index}
            svg={behavior.svg}
            text={behavior.text}
            onContinueClick={onContinueClick}
          />
        ))}
      </div>
    </div>
  );
};

export default BehaviorsTable;
