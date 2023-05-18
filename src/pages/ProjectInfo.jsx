import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

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
const StAllProjectInfoPage = styled.div`
  display: flex;
  justify-content: center;
`;
const StSideMenuBar = styled.div`
  background-color: #d6d6d6;
  width: 12%;
  height: 100vh;
  margin-right: 50px;
`;
const StContainerProjectInfo = styled.div`
  width: 88%;
  height: 100%;
`;
const StSideMenuBarButtonContainer = styled.div`
  background-color: white;
  height: 100vh;
`;
const StSideMenuBarButtons = styled.button`
  border: 1px solid black;
  border-radius: 7px;
  font-size: 16px;
  margin: 13px;
`;
const ProjectInfo = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [price, setPrice] = useState("");
  const [deadLine, setDeadLine] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFile, setSelectedFile] = useState(null);
  const [tags, setTags] = useState("");
  const navigate = useNavigate();

  // //axios로 데이터 요청한거 받아오는 부분
  // const { isLoading, isError, data } = useQuery("addProject", addProject);
  // console.log(data);
  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
    console.log("타이틀이모야:", event.target.value);
  };
  const onChangeTargetAmountHandler = (event) => {
    setTargetAmount(event.target.value);
    console.log("타겟 어마운트 :", event.target.value);
  };
  const onChangePriceHandler = (event) => {
    setPrice(event.target.value);
  };
  const onChangeDeadlineHandler = (event) => {
    setDeadLine(event.target.value);
  };
  const onChangeTagsHandler = (event) => {
    setTags(event.target.value);
  };
  //Project 추가
  // const addProject = async (id, newProject) => {
  //   await jwtInstance.post(`/posts/${id}/info`, newProject);
  // };
  // const newProject = {
  //   title,
  //   targetAmount,
  // };
  const onClickSaveProject = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const tagsArray = tags.split(" ").map((tag) => tag.trim()); // Split tags by spaces and remove leading/trailing whitespaces
    const projectData = {
      title: title,
      targetAmount: targetAmount,
      price: price,
      deadLine: deadLine,
      searchTag: tagsArray,
    };
    // formData.append("postInfo", JSON.stringify(projectData));
    formData.append("thumbnail", selectedFile); // assuming selectedFile is your file input
    formData.append(
      "postInfo",
      new Blob([JSON.stringify(projectData)], {
        type: "application/json",
      })
    );
    try {
      await jwtInstance.put(`/posts/${id}/info`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Success! Project added.
      // Navigate to '/main' route with formData as state
      // console.log("Access:", Access_Token);
      navigate(`/posts/${id}/story`, {
        state: { formData: projectData, thumbnail: selectedFile },
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("이미지들어와?:", file);
    setSelectedFile(file);
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
          {/* 카테고리 셀렉터 */}
          {/* <select
            style={{ width: "300px", border: "1px solid black" }}
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            <option value="Beauty">뷰티</option>
            <option value="TechElectrics">테크</option>
            <option value="HomeLiving">홈리빙</option>
          </select> */}
          <h3>목표금액</h3>
          <input
            value={targetAmount}
            placeholder="목표금액을 "
            onChange={onChangeTargetAmountHandler}
            style={{ width: "300px", border: "1px solid black" }}
          ></input>
          <h3>펀딩금액</h3>
          <input
            value={price}
            placeholder="펀딩금액을 입력"
            onChange={onChangePriceHandler}
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
          <input type="file" onChange={handleFileChange} />
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
            onChange={onChangeDeadlineHandler}
          />
        </div>
        <div>
          <h3>검색용태크(#)</h3>
          <input
            value={tags}
            onChange={onChangeTagsHandler}
            style={{ width: "300px", border: "1px solid black" }}
          />
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
