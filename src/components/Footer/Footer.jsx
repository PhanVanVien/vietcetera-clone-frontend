import React from "react";
import "./Footer.css";
import { FaArrowUp, FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This adds smooth scrolling behavior
    });
  };

  return (
    <div className="footer">
      <div className="container-footer0">
        <div className="container-footer1">
          <div className="content-footer1">
            <div>
              <a href="https://vietcetera.com/">
                <img
                  src="https://vietcetera.com/images/header/logo-text.svg"
                  width={"232.14px"}
                  height={"40px"}
                  style={{ marginTop: "8px" }}
                />
              </a>
              <p style={{ color: "#7a7a7a", margin: "0", fontSize: "14px" }}>
                Góc nhìn đa chiều về Việt Nam hiện đại.
              </p>
            </div>
            <div className="ref-container">
              <div className="icon-block">
                <a style={{ cursor: "pointer" }}>
                  <FaFacebookF style={{ fontSize: "1.5em" }} />
                </a>
              </div>
              <div className="icon-block">
                <a style={{ cursor: "pointer" }}>
                  <RiInstagramFill style={{ fontSize: "1.5em" }} />
                </a>
              </div>
              <div className="icon-block">
                <a style={{ cursor: "pointer" }}>
                  <FaLinkedinIn style={{ fontSize: "1.5em" }} />
                </a>
              </div>
              <div className="icon-block">
                <a style={{ cursor: "pointer" }}>
                  <FaYoutube style={{ fontSize: "1.5em" }} />
                </a>
              </div>
              <div className="icon-block">
                <a style={{ cursor: "pointer" }}>
                  <FaRss style={{ fontSize: "1.5em" }} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-footer2">
          <div className="content-footer2">
            <div className="footer2-left">
              <div>
                <div className="footer-title">TẢI ỨNG DỤNG VIETCETERA</div>
                <div className="chcontainer">
                  <div className="ch">
                    <div className="chimg">
                      <img
                        src="https://img.vietcetera.com/uploads/images/27-may-2022/app-store.png"
                        width={"134px"}
                        height={"42px"}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <div className="chimg">
                      <img
                        src="https://img.vietcetera.com/uploads/images/27-may-2022/gg-play.png"
                        width={"134px"}
                        height={"42px"}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  </div>
                  <a className="qr">
                    <img
                      src="https://img.vietcetera.com/uploads/images/27-may-2022/qr-down-app.png"
                      width={"88px"}
                      height={"88px"}
                      style={{
                        border: "1px solid black",
                        borderRadius: "8px",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="footer2-right">
              <div>
                <div className="footer-title">VỀ CHÚNG TÔI</div>
                <a
                  href=""
                  style={{
                    color: "#7a7a7a",
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                >
                  Liên Hệ
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-footer3">
          <div className="content-footer3">
            <div>
              <strong>CÔNG TY TNHH VIETCETERA</strong>
            </div>
            <div>
              <span>
                <strong>Mã số thuế:</strong> 0314912825 |{" "}
                <strong>Địa chỉ ĐKKD:</strong> 6 Thi Sách, Phường Bến Nghé, Quận
                1, TP. Hồ Chí Minh, Việt Nam
              </span>
            </div>
            <div>
              <span style={{ cursor: "pointer" }}>
                Giấy phép thiết lập MXH số 530/GP-BTTTT, thay đổi lần 1 ngày
                07/11/2022 nơi cấp Bộ Thông Tin và Truyền Thông
              </span>
            </div>
            <div>
              <span>
                <strong>Email:</strong> team@vietcetera.com | Chịu trách nhiệm
                quản lý nội dung: Phan Nguyên Lập
              </span>
            </div>
            <div>
              &#169; Vietcetera 2024 . All Rights Reserved. |{" "}
              <span style={{ cursor: "pointer" }}>Chính Sách Bảo Mật</span> |{" "}
              <span style={{ cursor: "pointer" }}>Thỏa Thuận Người Dùng</span>
            </div>
          </div>
        </div>
      </div>
      <button onClick={scrollToTop} className="scroll-top-button">
        <IoIosArrowUp />
      </button>
    </div>
  );
};

export default Footer;
