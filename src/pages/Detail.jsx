import React from "react";
import "../pages/scss/Detail.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const jwtInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

jwtInstance.interceptors.request.use(function (config) {
  const access_token = Cookies.get("access_token");
  const refresh_token = Cookies.get("refresh_token");

  config.headers["access_token"] = `Bearer ${access_token}`;
  config.headers["refresh_token"] = `Bearer ${refresh_token}`;

  return config;
});

const Detail = () => {
  const { id } = useParams();
  const [detailFunding, setDetailFunding] = useState([]);

  const getDetailData = async () => {
    try {
      const response = await jwtInstance.get(`/posts/${id}`);
      console.log("상세 get 요청 결과:", response);
      setDetailFunding(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailData();
  }, []);

  // const detailFunding = [
  //     {
  //         id: 5,
  //         title: "역대급 함유량",
  //         category: "홈, 리빙",
  //         totalAmount: 100000,
  //         targetAmount: 50000,
  //         deadLine: new Date(),
  //         percentage: 200,
  //         name: "화장품",
  //         projectImage: "프로젝트이미지가 뭘까?",
  //         imageUrl: "어떤 형태가 되어야 하지? 주소 썼더니 에러뜨네",
  //         summary : “아주 좋은 화장품”,
  //         storyBoard : "이 제품은요. 아주 좋아요”,
  //         ikesStaus: false,
  //         likes: 5
  //     }
  // ]

  return (
    <div className="container">
      <div style={{ width: "60%" }}>
        <img src={detailFunding.projectImage} />
      </div>

      <div style={{ width: "40%" }}>
        <div className="category">{detailFunding.category}</div>
        <div>
          <h2>{detailFunding.title}</h2>
        </div>
        <div className="summary">{detailFunding.summary}</div>
        <div>
          <div className="number">{detailFunding.percentage}% 달성</div>
          <div>{detailFunding.totalAmount}원</div>
          <div>{detailFunding.price} </div>
          <div>{detailFunding.likeStatus ? "채워진하트" : "빈하트"}</div>
          달성 모집금액 데드라인
          <div>
            <p>{detailFunding.percentage}% 달성</p>
            <p>{detailFunding.targetAmount}원</p>
            <p>{detailFunding.deadLine}일 전</p>
          </div>
          <p>{detailFunding.title}</p>
        </div>
      </div>
    </div>

    //  <div className="container">
    //   <div className="detailimage">ddddd
    //     <img src={detailFunding.thumbnail} />

    //    <div className="detailsummary">ggggg
    //       {/* 카테고리 */}
    //       <div>{detailFunding.category}</div>
    //       <div>펀딩</div>
    //       {/* 제목 */}
    //       <div>{detailFunding.title}</div>
    //       <div>{detailFunding.summary}</div>
    //       <div>{detailFunding.percentage}% 달성</div>
    //       <div>{detailFunding.totalAmount}</div>
    //       <div>{detailFunding.price} </div>

    //    </div>
    //  </div>
    // </div>

    //   <div className='inner'>
    //       <div id="image-box">
    //           <img src="/images/products/product1.jpg" alt =""/>
    //       </div>
    //       <div id="profile-box">
    //           <ul>
    //               <li>
    //                   <div>
    //                       <img src="/images/icons/avatar.png" alt=""/>
    //                       <span>그린</span>
    //                   </div>
    //               </li>
    //               <li>
    //                   제품명 새로운 조명
    //               </li>
    //               <li>
    //                   가격 50000원
    //               </li>
    //               <li>등록일 2022년 6월 2일</li>
    //               <li>상세설명</li>
    //           </ul>
    //       </div>
    //   </div>
  );
};

{
  /* -----
(
    <div>
      <div style={{ width: "100%", padding: "3rem 4rem" }}>
        <br />
        <div stye={{ display: "flex", justifyContent: "center" }}>
          <h1>{Data.title}</h1>
        </div>
        <br />
        <Row gutter={[16, 16]}>
          <Col lg={12} sm={24}>
            {/* DataImages */
}
//             <DataImages detailData={Data} />
//           </Col>

//           <Col lg={12} sm={24}>
//             {/* DataInfo */}
//             <DataInfo detailData={Data} /> //추가
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
//     </div>

//   )
// } */}

export default Detail;
