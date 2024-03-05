import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import styles from "./NavigationButton.module.css";

const NavigationsButton = () => {
  return (
    <div className={styles.containernav}>
      <div className={styles.navbutton} id="deactive">
        <IoIosArrowBack />
      </div>
      <div className={styles.navbutton} id="active">
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default NavigationsButton;
