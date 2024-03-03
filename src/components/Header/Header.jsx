import React, { useState } from "react";
import "./Header.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Header = () => {
  const [inputFocused, setInputFocused] = useState(false);

  const handleInputFocusBlur = () => {
    setInputFocused(!inputFocused);
  };

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
          style={{ width: "700px", height: "49.6px" }} // Adjust the width here
        >
          <div style={{ padding: "15px" }}>
            <FaMagnifyingGlass style={{ width: "18px", height: "18px" }} />
          </div>
          <input
            className="input-text"
            style={{ flex: "1" }}
            type="text"
            placeholder="Tìm kiếm"
            onFocus={handleInputFocusBlur}
            onBlur={handleInputFocusBlur}
          />
          <button className="button-search" style={{ marginRight: "10px" }}>
            TÌM KIẾM
          </button>
        </div>
        <div className="button-container">
          <button className="button">ĐĂNG NHẬP</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
