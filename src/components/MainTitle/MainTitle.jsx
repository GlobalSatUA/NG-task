import React from "react";
import "./MainTitle.css";

const MainTitle = ({ content }) => {
  return (
    <div className="title-div">
      <h2
        className="title"
        dangerouslySetInnerHTML={{ __html: content.title }}
      ></h2>
      <p
        className="text"
        dangerouslySetInnerHTML={{ __html: content.text }}
      ></p>
    </div>
  );
};

export default MainTitle;
