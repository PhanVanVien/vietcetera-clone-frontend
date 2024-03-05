import React from "react";
import styles from "./KeyWordList.module.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import NavigationsButton from "./NavigationsButton";
import HighlightTitle from "../General/HighlightTitle";

const KeyWordList = () => {
  const icon = <FaArrowTrendUp style={{ marginRight: "10px" }} />;

  return (
    <div className={styles.keywordcontainer}>
      <div className={styles.titlecontainer}>
        <HighlightTitle icon={icon} title="TỪ KHÓA" />
        <NavigationsButton />
      </div>
    </div>
  );
};

export default KeyWordList;
