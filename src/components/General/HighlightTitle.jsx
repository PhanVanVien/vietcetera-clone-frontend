import React from "react";
import "./HighlightTitle.css";

const HighlightTitle = ({ icon, title }) => {
  return (
    <span className="title">
      {icon} {title}
    </span>
  );
};

export default HighlightTitle;
