// import React, { useState } from "react";
// import "./gnb.scss";
// import { useNavigate } from "react-router-dom";

// const GnbLayout = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const navigate = useNavigate();

//   const onClickProjectMakingHandler = () => {
//     navigate("/posts/:id/info");
//   };

//   const loginHandler = () => {
//     setIsLogin(!isLogin);
//   };

//   // const someList = [1, 2, 3, 4, 5]
//   // const filteredList = someList.filter((ele) => {
//   //   return ele > 3
//   // })
//   // const mapList = someList.map((ele => {
//   //   return ele + 10
//   // }))
//   // console.log('filteredList: ', filteredList);
//   // console.log('mapList: ', mapList);

//   return isLogin ? (
//     <section className="login-gnb">
//       <div className="logo">Wadiz</div>
//       <div className="content-box">
//         <div className="funding">
//           <button>펀딩+</button>
//         </div>
//         <div className="search">
//           <input type="text" />
//         </div>
//       </div>
//       <div className="profile-box">
//         <div className="avatar"></div>
//         <div className="action-wrapper">
//           <button onClick={onClickProjectMakingHandler}>프로젝트 만들기</button>
//         </div>
//       </div>
//     </section>
//   ) : (
//     <section className="logout-gnb">
//       <div className="logo">Wadiz</div>
//       <ul className="action-wrapper">
//         <li>로그인</li>
//         <li>회원가입</li>
//       </ul>
//     </section>
//   );
// };

// export default GnbLayout;
