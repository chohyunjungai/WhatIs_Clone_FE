import React from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import "../pages/scss/Project.scss";
import { useParams } from "react-router-dom";

const jwtInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

jwtInstance.interceptors.request.use(function (config) {
  const access_Token = Cookies.get("access_Token");
  const refresh_token = Cookies.get("refresh_token");

  config.headers["access_Token"] = `Bearer ${access_Token}`;
  config.headers["refresh_token"] = `Bearer ${refresh_token}`;

  return config;
});

// const jwtInstance = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_URL,
// });

const ProjectStory = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState("");
  const [storyBoard, setStoryBoard] = useState("");
  const [x, setX] = useState([]);
  const [file, setFile] = useState(null);

  // const { isLoading, isError, data } = useQuery(
  //   "makeProjectStory",
  //   makeProjectStory
  // );
  // console.log(data);

  const navigate = useNavigate();

  const handleClickRadioButton = (e) => {
    setX(e.target.value);
  };
  const onChangeSummaryHandler = (event) => {
    setSummary(event.target.value);
    console.log("써머리가 모야:", event.target.value);
  };

  const onChangeStoryBoardHandler = (event) => {
    setStoryBoard(event.target.value);
    console.log("보드가 모야:", event.target.value);
  };

  // const fileUpload = async () => {
  //   // 서버 개발자가 s3의 signed url 을 받아오는 api를 제공한다
  //   const res = await axios.post("~~~~");
  //   // res.body.signedUrl
  //   const fileUploadRes = await axios.put(res.body.signedUrl, file);
  // };

  const fileUpload = (event) => {
    const file = event.target.files[0];
    console.log("이미지들어와?:", file);
    setFile(file);
  };

  const onClickSaveStory = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    const storyData = {
      summary: summary,
      storyBoard: storyBoard,
    };

    formData.append("projectImage", file); // assuming selectedFile is your file input

    formData.append(
      "postStory",
      new Blob([JSON.stringify(storyData)], {
        type: "application/json",
      })
    );
    try {
      await jwtInstance.put(`/posts/${id}/story`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      // Success! Project added.
      // Navigate to '/main' route with formData as state
      // console.log("Access:", Access_Token);
      navigate("/main", {
        state: { formData: storyData, projectImage: file },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
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
          <h1>스토리 작성</h1>
          <div>메이커님의 프로젝트를 소개해 주세요</div>
          <div>
            <h3>소개 영상 ・ 사진 등록</h3>
            {/* <div style={imagestyle}> */}
            <div>
              <label>
                <input
                  type="radio"
                  value="1"
                  checked={x === "1"}
                  onChange={handleClickRadioButton}
                />
                소개 영상
              </label>
              <label>
                <input
                  type="radio"
                  value="2"
                  checked={x === "2"}
                  onChange={handleClickRadioButton}
                />
                소개 사진
              </label>
              <br />
              <br />

              <input
                type="file"
                onChange={(e) => {
                  console.log("e.target.files[0]: ", e.target.files[0]);
                  setFile(e.target.files[0]);
                }}
              />

              <div className="info">
                <div>2MB 이하의 JPG, JPEG, GIF, PNG 파일</div>
                <div>해상도 630x400 픽셀 이상</div>
              </div>
            </div>
            <h3>프로젝트 요약</h3>
            <div className="info">
              소개 영상이나 사진과 함께 보이는 글이에요. 프로젝트를 쉽고
              간결하게 소개해 주세요.
            </div>
            <input
              value={summary}
              placeholder="내용 입력"
              onChange={onChangeSummaryHandler}
              style={{
                width: "300px",
                height: "150px",
                border: "1px solid black",
              }}
            ></input>
            <h3>프로젝트 스토리</h3>
            <div className="info">
              소개 영상이나 사진과 함께 보이는 글이에요. 프로젝트를 쉽고
              간결하게 소개해 주세요.
            </div>

            <input
              value={storyBoard}
              placeholder="내용을 입력해 주세요"
              onChange={onChangeStoryBoardHandler}
              style={{
                width: "300px",
                height: "400px",
                border: "1px solid black",
              }}
            ></input>
            <button
              size="200"
              style={{ width: "300px", border: "1px solid black" }}
              onClick={onClickSaveStory}
            >
              저장하기
            </button>
          </div>
        </StContainerProjectInfo>
      </StAllProjectInfoPage>
    </div>
  );
};

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

export default ProjectStory;
