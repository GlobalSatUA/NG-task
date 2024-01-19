import React from "react";
import "./WorkTable.css";
import WorkCard from "../WorkCard/WorkCard";
import GirlSvg from "../../assets/icons/girl.svg";

const WorkTable = ({ title, work }) => {
  return (
    <div>
      <h3 className="title-comp">{title}</h3>
      <div className="work-comp">
        <img
          className="work-img"
          src={GirlSvg}
          alt="Icon"
          width="173"
          height="363"
        />
        <div className="work-cont">
          {work.map((item, index) => (
            <WorkCard key={index} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkTable;
