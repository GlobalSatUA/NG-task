import React, { useEffect, useState } from "react";
import "./WorkCard.css";

const WorkCard = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const formattedText = text.replace(/\n/g, "<br />");

  return (
    <div className={`work-card ${isVisible ? "show" : ""}`}>
      <p
        className="work-text"
        dangerouslySetInnerHTML={{ __html: formattedText }}
      ></p>
    </div>
  );
};

export default WorkCard;
