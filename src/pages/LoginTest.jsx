import React from "react";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

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
      console.log(response.headers.access_token);
      console.log(response.headers.refresh_token);

      // 토큰을 받아와야 됌
      const {
        access_token: access_tokenOrigin,
        refresh_token: refresh_tokenOrigin,
      } = response.headers;
      const access_token = access_tokenOrigin.replace("Bearer ", "");
      const refresh_token = refresh_tokenOrigin.replace("Bearer ", "");

      const userAccessToken = jwtDecode(access_token);
      const userRefreshToken = jwtDecode(refresh_token);

      const accessTokenExpirationTime = new Date(userAccessToken.exp * 1000);

      Cookies.set("Access_Token", access_token, {
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

      Cookies.set("Refresh_Token", refresh_token);

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

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Email"
          value={emailInput}
          onChange={emailInputHandler}
        />
        <input
          type="password"
          placeholder="password"
          value={passwordInput}
          onChange={passwordInputHandler}
        />
        <button style={{ border: "1px black solid" }}>로그인</button>
      </form>
    </div>
  );
};

export default LoginTest;
