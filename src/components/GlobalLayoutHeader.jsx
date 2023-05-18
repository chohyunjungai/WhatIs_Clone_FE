import React, { useState } from "react";
// import "./gnb.scss";
import "../components/GlobalLayoutHeader.scss";
import { useNavigate } from "react-router-dom";
import CategoryModal from "../pages/CategoryModal";

const GlobalLayoutHeader = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onClickProjectMakingHandler = () => {
    if (isLogin) {
      setIsModalOpen(true);
    } else {
      navigate("/login"); // 로그인 페이지로 이동하도록 설정 (경로는 적절히 수정)
    }
  };

  const handleLogoClick = () => {
    // Handle logo click action here
    console.log("Logo clicked");
  };
  // const onClickProjectMakingHandler = () => {
  //   navigate("/projectInfo");
  // };

  // const someList = [1, 2, 3, 4, 5]
  // const filteredList = someList.filter((ele) => {
  //   return ele > 3
  // })
  // const mapList = someList.map((ele => {
  //   return ele + 10
  // }))
  // console.log('filteredList: ', filteredList);
  // console.log('mapList: ', mapList);

  return isLogin ? (
    <section className="login-gnb">
      <div onClick={handleLogoClick}>
        <div className="logo">Wadiz</div>
      </div>
      <div className="content-box">
        <div className="funding">
          <button>펀딩+</button>
        </div>
        <div className="search">
          <input type="text" />
        </div>
      </div>
      <div className="profile-box">
        <div className="avatar"></div>
        <div className="action-wrapper">
          <button onClick={onClickProjectMakingHandler}>프로젝트 만들기</button>
        </div>
      </div>
      {isModalOpen && <CategoryModal onClose={() => setIsModalOpen(false)} />}
    </section>
  ) : (
    <section className="logout-gnb">
      <div className="logo" onClick={handleLogoClick}>
        Wadiz
      </div>
      <ul className="action-wrapper">
        <li onClick={() => navigate("/logintest")}>로그인</li>
        <li onClick={() => navigate("/signup")}>회원가입</li>
      </ul>
    </section>
  );
};

export default GlobalLayoutHeader;
