import React from "react";
import "./KeyWordList.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import NavigationsButton from "./NavigationsButton";
import HighlightTitle from "../General/HighlightTitle";

const KeyWordList = () => {
  const icon = <FaArrowTrendUp style={{ marginRight: "10px" }} />;
  const keywords = [
    "React",
    "JavaScript",
    "Component",
    "Map",
    "List",
    "Dummy",
    "React",
    "JavaScript",
    "Component",
    "Map",
    "List",
    "Dummy",
  ];

  return (
    <div className="keyword-container">
      <div className="title-container">
        <HighlightTitle icon={icon} title="TỪ KHÓA" />
        <NavigationsButton />
      </div>
      {/* <div className="keyword-menu">
        {keywords.map((item, index) => (
          <button key={index} className="keyword">
            # {item}
          </button>
        ))}
      </div> */}
    </div>
  );
};

export default KeyWordList;
