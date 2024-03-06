import React from "react";
import styles from "./PostPreview.module.css";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";
import { IoHeartOutline } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";

const PostPreview = () => {
  const data = [
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F23-feb-2024%2F231129-roommatesyndrome-full-1708685385566.jpg&q=80&w=1536",
      title:
        "Roommate phase: Khi tình yêu thoái hóa thành tình... người thuê trọ",
      description:
        "Dọn vào sống chung, 2 bạn những tưởng sẽ thân nhau hơn nhưng thực chất lại quay về làm… bạn thuê trọ với 0 cảm...",
      type: "Cuộc Sống",
      avt: "https://img.vietcetera.com/uploads/avatar-images/17-jul-2023/nguyen-thi-bao-tran-1689566802622-160x160.jpg",
      name: "Trân Trân",
      datePublished: "03 Thg 03",
      duration: "5 phút đọc",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F05-mar-2024%2Fbii-t-tai-i-t-nhai-c-1709612067241.jpg&q=80&w=1536",
      title: "5 Bí mật chưa bật mí trong MV Mê Cung Tình Yêu của 52Hz và RIO",
      description:
        "52Hz đã tự cười một mình để… làm “sound” nền cho bài hát Mê Cung Tình Yêu. Bạn đã nghe thử ca khúc Gen Z với cảm hứng Paris By Night độc lạ này chưa?",
      type: "SÁNG TẠO",
      avt: "https://img.vietcetera.com/uploads/avatar-images/27-jan-2024/user-1706350023469-160x160.jpg",
      name: "Thanh Thảo",
      datePublished: "1 giờ trước",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F04-mar-2024%2Froadtooscars-02-1709528586432.jpg&q=80&w=1536",
      title: "Poor Things: Tuyệt vời, vui nhộn, bẩn thỉu và thông minh",
      description:
        "Lại một tác phẩm điện ảnh tuyệt đẹp nữa đến từ đạo diễn kỳ quái người Hy Lạp Yorgos Lanthimos.",
      type: "SÁNG TẠO",
      avt: "https://img.vietcetera.com/uploads/avatar-images/20-jun-2022/chu-ng-1655697104735-160x160.jpg",
      name: "Phan Chung",
      datePublished: "5 giờ trước",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F16-mar-2021%2Ffeature2.jpg&q=80&w=1152",
      title: "Những điều LinkedIn không nói với bạn",
      description:
        "Cũng dần giống như Instagram và Facebook, LinkedIn cho bạn cái nhìn không trung thực về thế giới việc làm.",
      type: "KINH DOANH",
      avt: "https://img.vietcetera.com/uploads/avatar-images/07-may-2021/travelling-kat-1620360006541-160x160.jpg",
      name: "Travelling Kat",
      datePublished: "16 Thg 03",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F04-mar-2024%2Fpexels-cottonbro-studio-4866043.jpg&q=80&w=1152",
      title: `Vì sao học hoài mà không "lên trình"? 4 Yếu tố quyết định khả năng tự học`,
      description:
        "Ngay cả khi chúng ta bắt đầu có ý thức về tầm quan trọng của việc tự học thì cũng không thể tự học hiệu quả được ngay.",
      type: "CUỘC SỐNG",
      avt: "https://img.vietcetera.com/uploads/avatar-images/11-dec-2020/hoang-nguyen-1607673408483-160x160.jpg",
      name: "Hoàng Nguyễn",
      datePublished: "7 giờ trước",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F04-mar-2024%2Fthia-t-ka-ch-a-ca-ta-n-8-.jpg&q=80&w=1152",
      title: `“Cúng Locket” - Hệ tư tưởng dùng mạng xã hội để sống thật, có gì mà hot?`,
      description: `Sơ hở là: "Cúng Locket chưa?" Vậy Locket là thần thánh phương nào mà ai nấy thi nhau thờ cúng?`,
      type: "CUỘC SỐNG",
      avt: "https://img.vietcetera.com/uploads/avatar-images/15-jan-2024/user-1705341857276.jpg",
      name: "Phương Thảo",
      datePublished: "04 Thg 03",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F01-mar-2024%2Fthumbnail-photo-1longxroom-ro-read-pr.jpeg&q=80&w=1152",
      title: `Startup Fintech 1Long đồng hành cùng Room to Read “Hỗ trợ giáo dục cho nữ sinh"`,
      description:
        "Nhân dịp Quốc tế Phụ nữ 08/03, 1Long - nền tảng ứng dụng công nghệ tài chính thông báo sẽ đồng hành cùng tổ chức phi chính phủ Room to Read trong chương trình Hỗ trợ Giáo dục cho nữ sinh.",
      type: "CUỘC SỐNG",
      avt: "https://img.vietcetera.com/uploads/avatar-images/17-jan-2024/cao-vy-1705462343504-160x160.jpg",
      name: "Cao Vy",
      datePublished: "04 Thg 03",
      duration: "5 phút đọc",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F26-feb-2024%2Fchatluongsong-01-1708932339105.jpg&q=80&w=1536",
      title: `5 Cấp độ giúp bạn đạt đến cảnh giới “bơ đi mà sống”`,
      description:
        "Theo Mark Manson, việc quan tâm quá nhiều đến suy nghĩ của người khác sẽ “cầm tù” cuộc đời bạn. Để sống vô tư",
      type: "Cuộc Sống",
      avt: "https://img.vietcetera.com/uploads/images/06-may-2021/mark-manson-media-kit-hi-res-headshot-square.jpeg",
      name: "Mark Manson",
      datePublished: "03 Thg 03",
      duration: "8 phút đọc",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F01-mar-2024%2Fbocterm-01.jpg&q=80&w=1152",
      title:
        "New collar - Lực lượng lao động mới, không bằng đại học có chới với?",
      description: `Không phải dân lao động, cũng không phải dân tri thức, "new collar" nằm ở đâu?`,
      type: "KINH DOANH",
      avt: "https://img.vietcetera.com/uploads/avatar-images/15-jan-2024/user-1705341857276.jpg",
      name: "Phương Thảo",
      datePublished: "02 Thg 03",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F27-feb-2024%2Fthia-t-ka-ch-a-ca-ta-n-5--1709020706970.jpg&q=80&w=1152",
      title: `“Quản trị sếp”: Mất nề nếp hay thêm gắn kết?`,
      description:
        "Sếp quản lý mình và mình cũng quản lý sếp. Một mối quan hệ tương tác hai chiều công bằng, tại sao không?",
      type: "KINH DOANH",
      avt: "https://img.vietcetera.com/uploads/avatar-images/25-dec-2023/user-1703496140256.jpg",
      name: "Bamboo Careers",
      datePublished: "01 Thg 03",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F26-feb-2024%2Fptbt.jpg&q=80&w=1152",
      title: `10 Dấu hiệu bạn đang âm thầm phát triển`,
      description:
        "Nhìn lại những năm tuổi trẻ, mình nhận ra có rất nhiều dấu hiệu mà lúc đó nếu có ai đó nói cho mình biết đấy là những dấu hiệu của sự phát triển, thì sẽ đỡ biết mấy.",
      type: "CUỘC SỐNG",
      avt: "https://img.vietcetera.com/uploads/avatar-images/11-dec-2020/hoang-nguyen-1607673408483-160x160.jpg",
      name: "Hoàng Nguyễn",
      datePublished: "28 Thg 02",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F16-oct-2023%2Fchatluongsong-01-4-.jpg&q=80&w=1152",
      title:
        "Nếu đang chênh vênh, thử tìm lại phương hướng bằng “la bàn cuộc đời”",
      description:
        "Nếu một chiếc la bàn bình thường có 4 hướng: Đông, Tây, Nam, Bắc thì “la bàn cuộc đời” gồm những gì?",
      type: "CUỘC SỐNG",
      avt: "https://img.vietcetera.com/uploads/avatar-images/11-dec-2020/hoang-nguyen-1607673408483-160x160.jpg",
      name: "Hoàng Nguyễn",
      datePublished: "23 Thg 10",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F22-sep-2023%2Ffeature.jpg&q=80&w=1152",
      title: "4 Điều không còn giúp CV của bạn toả sáng",
      description: `Khi dùng "văn mẫu" không giúp bạn ghi điểm trên CV.`,
      type: "KINH DOANH",
      avt: "https://img.vietcetera.com/uploads/avatar-images/21-aug-2023/bich-ho-1692582907691-160x160.jpg",
      name: "Bích Hồ",
      datePublished: "25 Thg 09",
      duration: "",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F01-mar-2024%2Fnew-project-4--1709276918990.jpg&q=80&w=1536",
      title: "Suýt 1 và cuộc thử nghiệm không hồi kết của Ngọt",
      description: "Rằm tháng Giêng này, Ngọt tụng kinh trên nền nhạc Jazz",
      type: "Sáng Tạo",
      avt: "https://img.vietcetera.com/uploads/avatar-images/01-mar-2024/user-1709270152829-160x160.jpg",
      name: "Lê Hiệp",
      datePublished: "02 Thg 03",
      duration: "6 phút đọc",
    },
    {
      thumbnail:
        "https://cdn-resize-img.vietcetera.com/_next/image?url=https%3A%2F%2Fimg.vietcetera.com%2Fuploads%2Fimages%2F06-feb-2024%2Fcovananchoi-01-1707207407515.jpg&q=80&w=1536",
      title: "Cuối tuần 'đổi gió' với 5 quán cà phê chủ đề anime tại Sài Gòn",
      description:
        "Gợi ý một cuối tuần lý tưởng cho các 'tín đồ' anime: Sáng cà phê sữa đá Naruto, trưa đắm mình giữa một thư viện",
      type: "Thưởng Thức",
      avt: "https://img.vietcetera.com/uploads/avatar-images/27-jan-2024/user-1706350112595-160x160.jpg",
      name: "Uyên Lê",
      datePublished: "01 Thg 03",
      duration: "6 phút đọc",
    },
  ];
  return (
    <>
      {data.map((item) => (
        <div className={styles.postcard}>
          <div className={styles.thumbnailcontainer}>
            <img className={styles.thumbnail} src={item.thumbnail}></img>
          </div>
          <div className={styles.contentcontainer}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.authorcontainer}>
              <div className={styles.typecontainer}>
                <span className={styles.type}>{item.type}</span>
              </div>
              <div className={styles.detailpost}>
                <div className={styles.detailauthor}>
                  <div className={styles.avt}>
                    <img
                      width="32px"
                      height="32px"
                      style={{ borderRadius: "50%" }}
                      src={item.avt}
                    ></img>
                  </div>
                  <div>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.time}>
                      {item.datePublished} &#183; {item.duration}
                    </div>
                  </div>
                </div>
                <div className={styles.actioncontainer}>
                  <button className={styles.actionbutton}>
                    <FiBookmark size={24} />
                  </button>
                  <button className={styles.actionbutton}>
                    <FiHeart size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostPreview;
