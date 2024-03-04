import React from "react";
import "./MainBlog.css";
import KeyWordList from "./KeyWordList";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const MainBlog = () => {
  return (
    <div className="container-main">
      <div className="left-ad">
        <LeftContent />
      </div>
      <div className="blog-content">{/* <KeyWordList /> */}</div>
      <div className="right-ad">
        <RightContent />
      </div>
    </div>
  );
};

export default MainBlog;
