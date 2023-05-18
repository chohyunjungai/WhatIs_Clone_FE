import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../pages/scss/Login.scss";
// /members/login
// {
//   email: "string",
//   password: "string"
// user111@naver.com
// User111!!
// }
// js-cookie

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const LoginTest = () => {
  const navigate = useNavigate();
  // Input useState
  const [user, setUser] = useState({ email: "", password: "" });
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const loginUser = async (user) => {
    try {
      const response = await api.post("/members/login", user);
      console.log(response.headers.access_Token);
      console.log(response.headers.refresh_token);

      // 토큰을 받아와야 됌
      const {
        access_Token: access_tokenOrigin,
        refresh_token: refresh_tokenOrigin,
      } = response.headers;
      const access_Token = access_tokenOrigin.replace("Bearer ", "");
      const refresh_token = refresh_tokenOrigin.replace("Bearer ", "");

      const userAccessToken = jwtDecode(access_Token);
      const userRefreshToken = jwtDecode(refresh_token);

      const accessTokenExpirationTime = new Date(userAccessToken.exp * 1000);

      Cookies.set("access_Token", access_Token, {
        expires: accessTokenExpirationTime,
      });

      // 요청보내기
      // const token = Cookies.get("access_token")
      // const response = await axios.post(
      //   `${process.env.REACT_APP_SERVER_URL}/api/posts`,
      //   inputValue,
      //   {
      //     headers: { Authorization: `Bearer ${token}` },
      //   },
      // );

      Cookies.set("refresh_token", refresh_token);

      // 메인페이지로 이동
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };

  const emailInputHandler = (e) => {
    setEmailInput(e.target.value);
    setUser({ ...user, email: e.target.value });
  };

  const passwordInputHandler = (e) => {
    setPasswordInput(e.target.value);
    setUser({ ...user, password: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    loginUser(user);
  };

  // const SocialKakao=()=>{
  //   const Rest_api_key='REST API KEY'
  //   const redirecti_uri= 'http://43.201.181.250/kakao/callback'
  //   const kakaoURL=`https://kauth.kakao.com/oauth/authorize?client_id=7fe3a140583f0df4191f29f81742062c&redirect_uri=http://43.201.181.250/members/kakao/callback&response_type=code`
  //   const handleLogin =()=>{
  //     window.location.href = kakaoURL
  //   }
  //  const code = new URL(window.location.href).searchParams.get("code");
  return (
    <div className="login">
      <div className="form-wrapper">
        <div className="form-title">로그인</div>
        <form onSubmit={submitHandler}>
          <div>
            <input
              className="input-box"
              type="email"
              placeholder="이메일 입력"
              value={emailInput}
              onChange={emailInputHandler}
            />
            <br />
            <br />

            <input
              className="input-box"
              type="password"
              placeholder="비밀번호 입력"
              value={passwordInput}
              onChange={passwordInputHandler}
            />
          </div>
          <br />
          <br />
          <div className="action-wrapper">
            <button>로그인</button>
            <br />
          </div>
        </form>

        <div className="kakao-wrapper">
          {/* <button onClick= {handleLogin}>카카오로 시작하기</button> */}
          <button>카카오로 시작하기</button>
        </div>
      </div>
    </div>
  );
};

export default LoginTest;
