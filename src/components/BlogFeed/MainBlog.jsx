import React from "react";
import styles from "./MainBlog.module.css";
import KeyWordList from "./KeyWordList";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";
import PostPreview from "../PostPreview/PostPreview";

const MainBlog = () => {
  return (
    <div className={styles.containermain}>
      <div className={styles.leftad}>
        <LeftContent />
      </div>
      <div className={styles.blogcontent}>
        <PostPreview />
        <PostPreview />
      </div>
      <div className={styles.rightad}>
        <RightContent />
      </div>
    </div>
  );
};

export default MainBlog;
