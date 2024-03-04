import React from "react";
import "./LeftContent.css";
import { IoGlobeSharp } from "react-icons/io5";
import { BiSolidCoffeeAlt } from "react-icons/bi";
import { PiBagSimpleFill } from "react-icons/pi";
import { FaLightbulb } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { GiHotMeal } from "react-icons/gi";

const LeftContent = () => {
  return (
    <div className="left-container">
      <div className="left-corner">
        <div className="left-title">
          <IoGlobeSharp size={"24px"} />
          <span style={{ margin: "0 0 0 10px" }}>INTERNATIONAL EDITION</span>
        </div>
      </div>
      <div className="type-blog">
        <BiSolidCoffeeAlt size={"20px"} />
        <span style={{ margin: "0 0 0 10px" }}>CUỘC SỐNG</span>
      </div>
      <div className="type-blog">
        <PiBagSimpleFill size={"20px"} />
        <span style={{ margin: "0 0 0 10px" }}>SỰ NGHIỆP</span>
      </div>
      <div className="type-blog">
        <FaLightbulb size={"20px"} />
        <span style={{ margin: "0 0 0 10px" }}>SÁNG TẠO</span>
      </div>
      <div className="type-blog">
        <HiSparkles size={"20px"} />
        <span style={{ margin: "0 0 0 10px" }}>SÁNG TẠO</span>
      </div>
      <div className="type-blog">
        <GiHotMeal size={"20px"} />
        <span style={{ margin: "0 0 0 10px" }}>THƯỞNG THỨC</span>
      </div>
      <div className="left-highlight">VIETCETERA SERIES</div>
      <div className="type-blog-no">
        <span style={{ margin: "0 0 0 10px" }}>TÓM LẠI LÀ</span>
      </div>
      <div className="type-blog-no">
        <span style={{ margin: "0 0 0 10px" }}>BỐC TERM</span>
      </div>
      <div className="type-blog-no">
        <span style={{ margin: "0 0 0 10px" }}>TÂM LÝ HỌC</span>
      </div>
      <div className="left-highlight">CỘNG ĐỒNG</div>
      <div className="type-blog-no">
        <span style={{ margin: "0 0 0 10px" }}>HPV RISK-CONTROL</span>
      </div>
      <div className="left-highlight">SỰ KIỆN NỔI BẬT</div>
      <div className="type-blog-no">
        <span style={{ margin: "0 0 0 10px" }}>OVERSEAS - HOMECOMING</span>
      </div>
      <div className="type-blog-no">
        <span style={{ margin: "0 0 0 10px" }}>FLAVORS</span>
      </div>
      <div className="left-highlight">THÀNH VIÊN NỔI BẬT</div>
    </div>
  );
};

export default LeftContent;
