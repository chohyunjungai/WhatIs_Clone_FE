import React, { useState } from "react";
import "./signUp.scss";
import axios from "axios";

const SignUpPage = () => {
  const [file, setFile] = useState();

  const [signUpForm, setSignUpForm] = useState({
    email: "",
    code: "",
    name: "",
    password: "",
    passwordCheck: "",
  });

  const fileUpload = async () => {
    // 서버 개발자가 s3의 signed url 을 받아오는 api를 제공한다
    const res = await axios.post("~~~~");
    // res.body.signedUrl
    const fileUploadRes = await axios.put(res.body.signedUrl, file);
  };

  const submit = () => {
    // const someObj = { a: 1, b: 2 }
    // const newObj = { ...someObj, b: 3 }

    console.log("signUpForm: ", signUpForm);
    // axios.post('https://localhost:3000/members/signup', signUpForm)
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const sendVerifyCode = () => {
    axios
      .post("https://localhost:3000/members/auth", {
        email: "test@gmail.com",
      })
      .then((res) => {
        console.log("res: ", res);
      })
      .catch((error) => {
        console.log("error: ", error);
      });
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
            <button onClick={sendVerifyCode}>인증하기</button>
          </div>
        </div>

        <div className="input-row">
          <div className="input-label">이름</div>
          <div className="input-wrapper name">
            <input placeholder="이름 입력" type="text" />
          </div>
        </div>

        <div className="input-row">
          <div className="input-label">비밀번호</div>
          <div className="input-wrapper password">
            <input placeholder="비밀번호 입력" type="text" />
            <input placeholder="비밀번호 확인" type="text" />
          </div>
        </div>

        <input
          type="file"
          onChange={(e) => {
            console.log("e.target.files[0]: ", e.target.files[0]);
            setFile(e.target.files[0]);
          }}
        />

        <div className="action-wrapper">
          <button onClick={submit}>완료</button>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
