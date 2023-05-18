import axios from "axios";
import React, { useState } from "react";
import "../pages/scss/SignUp.scss";
import { useNavigate } from "react-router-dom";
// const requestVerifyCode = () => {
const SignUpPage = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    // code: "",
    username: "",
    password: "",
    passwordCheck: "",
  });
  // axios
  //   .post("https://43.201.181.250/members/signup", {
  //     email: "test@gmail.com",
  //   })
  //   .then((res) => {
  //     console.log("res: ", res);
  //   })
  //   .catch((error) => {
  //     console.log("error: ", error);
  //   });
  const submit = (signUpForm) => {
    try {
      axios
        .post("http://43.201.181.250/members/signup", signUpForm)
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          // console.log(error);
        });
    } catch (error) {
      console.error(error);
    }
  };
  const sendVerifyCode = () => {
    axios
      .post("https://43.201.181.250/emails/check", {
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
  console.log(signUpForm.username);
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };
  const handleButtonClick = () => {
    showModal();
    sendVerifyCode();
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
            <button onClick={handleButtonClick}>인증하기</button>
          </div>
        </div>
        {openModal ? (
          <div className="input-row">
            <div className="input-label"></div>
            <div className="input-wrapper email">
              <input placeholder="인증번호 입력" type="text" />
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
                setSignUpForm({ ...signUpForm, username: e.target.value })
              }
            />
          </div>
        </div>
        <div className="input-row">
          <div className="input-label">비밀번호</div>
          <div className="input-wrapper password">
            <input
              placeholder="비밀번호 입력"
              type="password"
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, password: e.target.value })
              }
            />
            <input
              placeholder="비밀번호 확인"
              type="password"
              onChange={(e) =>
                setSignUpForm({ ...signUpForm, passwordCheck: e.target.value })
              }
            />
          </div>
        </div>
        <div className="action-wrapper">
          <button type="submit" onClick={() => submit(signUpForm)}>
            완료
          </button>
        </div>
      </div>
    </section>
  );
};
export default SignUpPage;
