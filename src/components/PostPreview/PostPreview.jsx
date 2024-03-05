import React from "react";
import styles from "./PostPreview.module.css";

const PostPreview = () => {
  return (
    <div className={styles.postcard}>
      <div className={styles.thumbnailcontainer}>
        <img
          className={styles.thumbnail}
          src="https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F23-feb-2024%2F231129-roommatesyndrome-full-1708685385566.jpg&q=80&w=1536"
        ></img>
      </div>
      {/* className={styles.contentcontainer} */}
      <div>
        <div className={styles.title}>
          Roommate phase: Khi tình yêu thoái hóa thành tình... người thuê trọ
        </div>
        <div className={styles.description}>
          Dọn vào sống chung, 2 bạn những tưởng sẽ thân nhau hơn nhưng thực chất
          lại quay về làm… bạn thuê trọ với 0 cảm...
        </div>
        <div className={styles.authorcontainer}>
          <div className={styles.typecontainer}>
            <span className={styles.type}>Type Post</span>
          </div>
          <div className={styles.detailpost}>
            <div className={styles.detailauthor}>
              <div className={styles.avt}>
                <img
                  width="32px"
                  height="32px"
                  style={{ borderRadius: "50%" }}
                  src="https://img.vietcetera.com/uploads/avatar-images/17-jul-2023/nguyen-thi-bao-tran-1689566802622-160x160.jpg"
                ></img>
              </div>
              <div>
                <div className={styles.name}>Trân Trân</div>
                <div className={styles.time}>03 Thg 03 &#183; 5 phút đọc</div>
              </div>
            </div>
            <div className={styles.actioncontainer}>
              <div>s</div>
              <div>f</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
