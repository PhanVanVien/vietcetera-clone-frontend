import React, { useState } from "react";
import "./Header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="nav">
      <div className="header-container">
        <div className="logo">
          <a href="https://vietcetera.com/">
            <img
              width="185.71"
              height="32"
              src="https://vietcetera.com/images/header/logo-text.svg"
            />
          </a>
        </div>
        <div
          className="search-container"
          style={{ width: "700px", height: "49.6px" }}
        >
          <div style={{ padding: "15px" }}>
            <FaMagnifyingGlass style={{ width: "18px", height: "18px" }} />
          </div>
          <input
            className="input-text"
            style={{ flex: "1" }}
            type="text"
            placeholder="Tìm kiếm"
          />
          <button className="button-search">TÌM KIẾM</button>
        </div>
        <div className="button-container">
          <button className="button">ĐĂNG NHẬP</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
