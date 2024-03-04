import React from "react";
import "./RightContent.css";

const RightContent = () => {
  return (
    <div className="right-container">
      <div className="right-title-container">
        <div className="right-title">PHỔ BIẾN</div>
        <div className="index-container">
          <div>
            <div className="number">1</div>
          </div>
          <div className="content-index">
            10 Dấu hiệu bạn đang âm thầm phát triển
          </div>
        </div>
        <div className="index-container">
          <div>
            <div className="number">2</div>
          </div>
          <div className="content-index">
            New collar - Lực lượng lao động mới, không bằng đại học có chới với?
          </div>
        </div>
        <div className="index-container">
          <div>
            <div className="number">3</div>
          </div>
          <div className="content-index">
            "Career break" - Khi nào thì bạn cần một khoảng nghỉ cho sự nghiệp?
          </div>
        </div>
        <div className="index-container">
          <div>
            <div className="number">4</div>
          </div>
          <div className="content-index">
            Doom spending ảnh hưởng gì đến sức khỏe tài chính của bạn?
          </div>
        </div>
        <div className="index-container">
          <div>
            <div className="number">5</div>
          </div>
          <div className="content-index">
            Roommate phase: Khi tình yêu thoái hóa thành tình... người thuê trọ
          </div>
        </div>
      </div>
      <div className="right-logo">
        <img
          src="https://img.vietcetera.com/uploads/images/04-mar-2024/bocterm-02.jpg"
          width={"290px"}
          height={"290px"}
          style={{ display: "block", borderRadius: "1rem" }}
        ></img>
      </div>
      <div>
        <img src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F01-apr-2022%2Fskyscraper.jpg&q=80&w=600"></img>
      </div>
    </div>
  );
};

export default RightContent;
