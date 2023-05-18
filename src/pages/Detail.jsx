import React from "react";
import "../pages/scss/Detail.scss";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [detailFunding, setDetailFunding] = useState([]);
  const location = useLocation();
  const data = location.state;
  // const getDetailData = async () => {
  //   try {
  //     const response = await axios.get(`/posts/${id}`);
  //     console.log("상세 get 요청 결과:", response);
  //     setDetailFunding(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   getDetailData();
  // }, []);

  return (
    <div className="container">
      <div style={{ width: "60%" }}>
        <img
          src={data.projectImage}
          style={{ marginTop: "100px", width: "400px", height: "auto" }}
        />
      </div>
      <div style={{ width: "40%" }}>
        <div className="category">{data.category}</div>
        <div>
          <h2>{data.title}</h2>
        </div>
        <div className="summary">{data.summary}</div>
        <div>
          <div className="number">{data.percentage}% 달성</div>
          <div>{data.totalAmount}원</div>
          <div>{data.price} </div>
          <div>{data.likeStatus ? "채워진하트" : "빈하트"}</div>
          달성 모집금액 데드라인
          <div>
            <p>{data.percentage}% 달성</p>
            <p>{data.targetAmount}원</p>
            <p>{data.deadLine}일 전</p>
          </div>
          <p>{data.title}</p>
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
