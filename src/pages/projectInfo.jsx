import React from "react";
import styled from "styled-components";
// import { useState } from "react";
import useInput from "../components/Hooks/useInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

// jwt토큰
const jwt = Cookies.get("jwt");
const jwtInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    Authorization: `Bearer ${jwt}`,
  },
});

const ProjectInfo = () => {
  const [title, onChangeTitleHandler] = useState("");
  const [targetAmount, onChangeTargetAmountHandler] = useState();
  const [price, setPrice] = useState();
  const [deadLine, setDeadLine] = useState();

  //Project 추가
  const addProject = async (id, newProject) => {
    await jwtInstance.post(`/posts/${id}/info`, newProject);
  };
  const navigate = useNavigate();

  const newProject = {
    title,
    targetAmount,
  };

  const onClickSaveProject = (event) => {
    event.preventDefault();
    // mutation.mutate(newProject);
  };
  return (
    <StAllProjectInfoPage>
      {/* new header */}
      <StSideMenuBar>
        {/* 사이드 메뉴바 */}
        <div>
          <button>프로젝트</button>
          <button>작성중</button>
          <h2>whatIs의</h2>
          <h2>멋진 프로젝트</h2>
        </div>
        <div>
          <h3>프로젝트 관리</h3>
        </div>
        <StSideMenuBarButtonContainer>
          <StSideMenuBarButtons>프로젝트 정보</StSideMenuBarButtons>
          &nbsp;<StSideMenuBarButtons>스토리 작성</StSideMenuBarButtons>
        </StSideMenuBarButtonContainer>
      </StSideMenuBar>
      <StContainerProjectInfo>
        <h1>프로젝트 정보</h1>
        <div>
          <h3>카테고리</h3>
          {/* 카테고리 셀렉터 */}
          <select style={{ width: "300px", border: "1px solid black" }}>
            <option value="option1">뷰티</option>
            <option value="option2">테크</option>
            <option value="option3">홈리빙</option>
            <option value="option3">푸드</option>
          </select>
          <h3>목표금액</h3>
          <input
            value={targetAmount}
            placeholder="목표금액을 입력해"
            onChange={onChangeTargetAmountHandler}
            style={{ width: "300px", border: "1px solid black" }}
          ></input>

          <h3>펀딩금액</h3>
          <input
            placeholder="펀딩금액을 입력"
            style={{ width: "300px", border: "1px solid black" }}
          ></input>
          <h3>프로젝트 제목</h3>
          <input
            value={title}
            placeholder="제목을 입력"
            onChange={onChangeTitleHandler}
            style={{ width: "300px", border: "1px solid black" }}
          ></input>
        </div>
        <div>
          {/* 이미지업로드 */}
          <h3>대표이미지</h3>
          <button>업로드</button>
        </div>
        <div>
          {/*프로젝트 deadline */}
          <h3>프로젝트 종료일</h3>
          <p style={{ fontSize: "14px" }}>
            프로젝트 심사부터 리워드 제작 기간 등 전체 일정을 고려해 설정해
            주세요.
          </p>
          <input
            placeholder="예시)2023-05-27"
            style={{ width: "300px", border: "1px solid black" }}
          />
        </div>
        <div>
          <h3>검색용태크(#)</h3>
          <input style={{ width: "300px", border: "1px solid black" }} />
        </div>
        <button
          size="200"
          style={{ width: "300px", border: "1px solid black" }}
          onClick={onClickSaveProject}
        >
          저장하기
        </button>
      </StContainerProjectInfo>
    </StAllProjectInfoPage>
  );
};

export default ProjectInfo;

const StAllProjectInfoPage = styled.div`
  display: flex;
  justify-content: center;
`;

const StSideMenuBar = styled.div`
  background-color: #d6d6d6;
  width: 15%;
  height: 100vh;
  margin-right: 50px;
`;
const StContainerProjectInfo = styled.div`
  width: 85%;
  height: 100%;
`;

const StSideMenuBarButtonContainer = styled.div`
  background-color: white;
  height: 100vh;
`;

const StSideMenuBarButtons = styled.button`
  border: 1px solid black;
  border-radius: 7px;
  font-size: 20px;
  margin: 8px;
`;
