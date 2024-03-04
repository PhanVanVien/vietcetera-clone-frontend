import React from "react";
import banner3 from "../../assets/images/ad3.png";
import banner1 from "../../assets/images/ad1.png";
import banner2 from "../../assets/images/ad2.png";

import "./Banner.css";

const Banner = () => {
  const randomNum = Math.floor(Math.random() * 3 + 1);

  let randomBanner;

  switch (randomNum) {
    case 1:
      randomBanner = banner1;
      break;
    case 2:
      randomBanner = banner2;
      break;
    case 3:
      randomBanner = banner3;
      break;
    default:
      randomBanner = banner1;
  }

  return (
    <img className="centered-image" src={randomBanner} alt="Advertisement" />
  );
};

export default Banner;
