import axios from "axios";
import React, { useState } from "react";
import "../pages/scss/SignUp.scss";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    code: "",
    name: "",
    password: "",
    passwordCheck: "",
  });

  const submit = (signUpForm) => {
    // const someObj = { a: 1, b: 2 }
    // const newObj = { ...someObj, b: 3 }

    // console.log("signUpForm: ", signUpForm);
    axios
      .post("http://43.201.181.250//members/signup", signUpForm)
      .then((response) => {
        // console.log(response);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const recieveVerifyCode = () => {};

  const sendVerifyCode = () => {
    axios
      .post("https://43.201.181.250/members/auth", {
        email: "test@gmail.com",
      })
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  };
  console.log("input 밸류:", signUpForm);
  console.log(signUpForm.name);
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  return (
    <section className="sign-up">
      <div className="form-wrapper">
        <div className="form-label">이메일 간편가입</div>

        <div className="input-row">
          <div className="input-label">이메일</div>
          <div className="input-wrapper email">
            <input
              placeholder="이메일 계정"
              type="text"
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, email: e.target.value })
              }
            />
            <button onClick={showModal}>인증하기</button>
          </div>
        </div>
        {openModal ? (
          <div className="input-row">
            <div className="input-label">이메일</div>
            <div className="input-wrapper email">
              <input
                placeholder="인증번호 입력"
                type="text"
                onChange={(e) =>
                  setSignUpForm({ ...signUpForm, email: e.target.value })
                }
              />
              <button onClick={sendVerifyCode}>확인</button>
            </div>
          </div>
        ) : null}
        <div className="input-row">
          <div className="input-label">이름</div>
          <div className="input-wrapper name">
            <input
              placeholder="이름 입력"
              type="text"
              // value={name}
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, name: e.target.value })
              }
            />
          </div>
        </div>

        <div className="input-row">
          <div className="input-label">비밀번호</div>
          <div className="input-wrapper password">
            <input
              placeholder="비밀번호 입력"
              type="text"
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, password: e.target.value })
              }
            />
            <input
              placeholder="비밀번호 확인"
              type="text"
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, passwordCheck: e.target.value })
              }
            />
          </div>
        </div>

        <div className="action-wrapper">
          <button onClick={submit}>완료</button>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
