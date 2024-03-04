import React, { useState } from "react";
import "./Survey.css";
import { FaXmark } from "react-icons/fa6";

const Survey = () => {
  const [isMounted, setIsMounted] = useState(true);

  const handleButtonClick = () => {
    setIsMounted(false);
  };

  return (
    <>
      {isMounted && (
        <div className="survey">
          <div className="survey-text">
            Là một phụ nữ, bạn lo sợ điều gì? Làm khảo sát này nhé!
          </div>
          <div>
            <button className="survey-button">
              <a href="https://vietcetera.typeform.com/to/OGaluzH6">
                THỰC HIỆN
              </a>
            </button>
          </div>
          <div className="close-container">
            <div className="close-button" onClick={handleButtonClick}>
              <FaXmark />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Survey;
