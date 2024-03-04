import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./NavigationButton.css";

const NavigationsButton = () => {
  return (
    <div className="container-nav">
      <div className="nav-button" id="deactive">
        <IoIosArrowBack />
      </div>
      <div className="nav-button" id="active">
        <IoIosArrowForward />
      </div>
    </div>
  );
};

export default NavigationsButton;
