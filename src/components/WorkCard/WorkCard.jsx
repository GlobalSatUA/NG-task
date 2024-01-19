import React from "react";
import "./WorkCard.css";

const WorkCard = ({ text }) => {
  const formattedText = text.replace(/\n/g, "<br />");

  return (
    <div className="work-card">
      <p
        className="work-text"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      ></p>
    </div>
  );
};

export default WorkCard;
