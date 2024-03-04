import React from "react";
import "./MainBlog.css";
import KeyWordList from "./KeyWordList";

const MainBlog = () => {
  return (
    <div className="container-main">
      <div className="left-ad">Left Advertisement</div>
      <div className="blog-content">
        <KeyWordList />
      </div>
      <div className="right-ad">Right Advertisement</div>
    </div>
  );
};

export default MainBlog;
