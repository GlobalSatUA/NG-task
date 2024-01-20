import React from "react";
import avocado from "../../assets/icons/avocado.svg";
import side from "../../assets/icons/side.svg";
import "./TopBar.css";

const TopBar = ({ onTopBarClick }) => {
  return (
    <div className="banner-div" onClick={onTopBarClick}>
      <img className="sing" src={side} alt="side" width="10" height="16" />
      <div className="avocado-container">
        <img src={avocado} alt="Avocado" width="19" height="25" />
      </div>
      <span>Food Mentor</span>
    </div>
  );
};

export default TopBar;
