import React from "react";
import styles from "./RightContent.module.css";

const RightContent = () => {
  return (
    <div className={styles.rightcontainer}>
      <div className={styles.righttitlecontainer}>
        <div className={styles.righttitle}>PHỔ BIẾN</div>
        <div className={styles.indexcontainer}>
          <div>
            <div className={styles.number}>1</div>
          </div>
          <div className={styles.contentindex}>
            <a href="" style={{ textDecoration: "none", color: "inherit" }}>
              10 Dấu hiệu bạn đang âm thầm phát triển
            </a>
          </div>
        </div>
        <div className={styles.indexcontainer}>
          <div>
            <div className={styles.number}>2</div>
          </div>
          <div className={styles.contentindex}>
            <a href="" style={{ textDecoration: "none", color: "inherit" }}>
              New collar - Lực lượng lao động mới, không bằng đại học có chới
              với?
            </a>
          </div>
        </div>
        <div className={styles.indexcontainer}>
          <div>
            <div className={styles.number}>3</div>
          </div>
          <div className={styles.contentindex}>
            <a href="" style={{ textDecoration: "none", color: "inherit" }}>
              "Career break" - Khi nào thì bạn cần một khoảng nghỉ cho sự
              nghiệp?
            </a>
          </div>
        </div>
        <div className={styles.indexcontainer}>
          <div>
            <div className={styles.number}>4</div>
          </div>
          <div className={styles.contentindex}>
            <a href="" style={{ textDecoration: "none", color: "inherit" }}>
              Doom spending ảnh hưởng gì đến sức khỏe tài chính của bạn?
            </a>
          </div>
        </div>
        <div className={styles.indexcontainer}>
          <div>
            <div className={styles.number}>5</div>
          </div>
          <div className={styles.contentindex}>
            <a href="" style={{ textDecoration: "none", color: "inherit" }}>
              Roommate phase: Khi tình yêu thoái hóa thành tình... người thuê
              trọ
            </a>
          </div>
        </div>
      </div>
      <div className={styles.rightlogo}>
        <img
          src="https://img.vietcetera.com/uploads/images/04-mar-2024/bocterm-02.jpg"
          width={"290px"}
          height={"290px"}
          style={{ display: "block", borderRadius: "1rem" }}
        ></img>
      </div>
      <div className={styles.rightad}>
        <img src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F01-apr-2022%2Fskyscraper.jpg&q=80&w=600"></img>
      </div>
    </div>
  );
};

export default RightContent;
