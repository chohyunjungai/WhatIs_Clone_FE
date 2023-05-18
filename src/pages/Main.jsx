import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
// import IsLike from "../components/IsLike";
// import beanHeart from "../Styles/image/beanHeart.png";
// import heart from "../Styles/image/heart.png";
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
const Main = () => {
  const imageUrl =
    "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"; // 이미지 URL
  const location = useLocation();
  const navigate = useNavigate();
  //카드 클릭 핸들러
  const handleCardClick = async (id) => {
    try {
      const response = await jwtInstance.get(`/posts/${id}`);
      console.log(response.data);
      navigate(`/posts/${id}`); // Redirect to the Detail page with the projectId as a parameter
    } catch (error) {
      console.error("Failed to fetch post detail:", error);
    }
  };
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://43.201.181.250/posts?page=0&size=10&sort=createdAt,DESC&search=${searchValue}`
      );
      // Handle the response data here
      console.log("search get 요청: ", response.data.data);
      setItemList(response.data.data);
    } catch (error) {
      // Handle any errors
      console.error(error);
    }
  };
  // const formData = location.state.formData;
  const formData = location.state && location.state.formData;
  const [itemList, setItemList] = useState([]);
  const [category, setCategory] = useState("All");
  const [searchValue, setSearchValue] = useState("");
  console.log("카테고리 들어완요?", category);
  const [sort, setSort] = useState("createdAt");
  const selectSort = (_sort) => {
    setSort(_sort);
    console.log("안녕 데이터야:", _sort);
  };
  const selectCategory = (_category) => {
    setCategory(_category);
    setSort("createdAt");
  };
  const getMainData = async () => {
    try {
      const response = await axios.get(
        `http://43.201.181.250/posts?page=0&size=10&sort=${sort},DESC&category=${category}`
      );
      console.log("main data get 요청:", response);
      setItemList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMainData();
  }, [category, sort]); // add empty array here
  // const getCategoryListData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://43.201.181.250/posts?page=0&size=10&sort=createdAt,DESC&category=HomeLiving"
  //     );
  //     console.log("카테고리 데이터 요청:", response);
  //     // setCategory(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  useEffect(() => {
    getMainData();
  }, []); // add empty array here
  // const categoryList = [
  //   {
  //     img: "imgUrl",
  //     title: "전체",
  //   },
  //   {
  //     img: "imgUrl",
  //     title: "패션",
  //   },
  // ];
  // const itemList = [
  //   {
  //     id: 1,
  //     title: "<역대급 함유량>ㅁㄴㅇㄹㅇㄴㅁㄹㅁㅇㄴㄹ",
  //     thumbnail: "이미지 url",
  //     price: 5000,
  //     totalAmount: 70000,
  //     targetAmount: 1500000,
  //     deadLine: new Date(),
  //     percentage: 5.5,
  //     name: "화장품",
  //     likeStatus: true,
  //     likes: 50,
  //   },
  //   {
  //     id: 2,
  //     title: "<역대급 함유량>ㅁㄴㅇㄹㅇㄴㅁㄹㅁㅇㄴㄹ",
  //     thumbnail: "이미지 url",
  //     price: 5000,
  //     totalAmount: 70000,
  //     targetAmount: 1500000,
  //     deadLine: new Date(),
  //     percentage: 5.5,
  //     name: "화장품",
  //     likeStatus: true,
  //     likes: 50,
  //   },
  // ];
  const categoryArrary = [
    {
      name: "All",
      key: "All",
    },
    {
      name: "Beauty",
      key: "Beauty",
    },
    {
      name: "HomeLiving",
      key: "HomeLiving",
    },
    {
      name: "FashionStuff",
      key: "FashionStuff",
    },
    {
      name: "TechElectrics",
      key: "TechElectrics",
    },
    {
      name: "Food",
      key: "Food",
    },
    {
      name: "LeisureSports",
      key: "LeisureSports",
    },
  ];
  const selectArray = [
    {
      name: "최신순",
      key: "createdAt",
    },
    {
      name: "모집금액순",
      key: "totalAmount",
    },
    {
      name: "인기순",
      key: "likes",
    },
    {
      name: "모집마감순",
      key: "deadLine",
    },
  ];
  return (
    <>
      <div>
        {/* 배너 */}
        <Container_BannerImage>
          <img
            src={imageUrl}
            alt="이미지"
            style={{ width: "100%", height: "120%", objectFit: "cover" }}
          />
        </Container_BannerImage>
        {/* 카테고리 */}
        <Container_CategoryLists>
          {categoryArrary.map((item) => {
            return (
              <div>
                <button onClick={() => selectCategory(item.key)}>
                  {item.name}
                </button>
              </div>
            );
          })}
        </Container_CategoryLists>
        {/* 검색창 */}
        <Container_SearchBar>
          <div className="search">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </Container_SearchBar>
        {/* 데이터 */}
        <div>
          <StSelectArray>
            {/* 데이터 헤더 */}
            {selectArray.map((item) => {
              return (
                <div>
                  <button onClick={() => selectSort(item.key)}>
                    {item.name}
                  </button>
                </div>
              );
            })}
          </StSelectArray>
          {/* 데이터뿌리기  */}
          <Container_ProjectCards>
            {/* 카드 */}
            {itemList.map((item) => {
              return (
                <ProjectCard
                  key={item.id}
                  onClick={() => handleCardClick(item.id)}
                >
                  <CardImage src={item.thumbnail} />
                  {/* 좋아요하트 */}
                  {/* {liked ? (
                    <StFullHeart
                      src={heart}
                      alt="Filled Heart"
                      onClick={isLikeHandler}
                    />
                  ) : (
                    <StEmptyHeart
                      src={beanHeart}
                      alt="Empty Heart"
                      onClick={isLikeHandler}
                    />
                  )}
                  <p>{likes}</p> */}
                  {/* 달성 모집금액 데드라인 */}
                  <div>
                    <p>{item.percentage}% 달성</p>
                    <p>{item.targetAmount}원</p>
                    <p>{item.deadLine}일 전</p>
                  </div>
                  <p>{item.title}</p>
                </ProjectCard>
              );
            })}
          </Container_ProjectCards>
        </div>
      </div>
      ;
    </>
  );
};
export default Main;
const Container_ProjectCards = styled.div`
  margin: 20px;
  /* border: 1px solid black; */
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const Container_BannerImage = styled.div`
  height: 250px;
  width: auto;
`;
const Container_SearchBar = styled.div`
  margin-top: 10px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: right;
  margin: 10px;
`;
const Container_CategoryLists = styled.div`
  margin-top: 80px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
`;
const ProjectCard = styled.div`
  /* width: calc(33.33% - 20px);  */
  margin: 10px;
  padding: 10px;
  /* border: 1px solid black; */
  flex-grow: 1; /* Allow cards to grow and shrink to fit the container */
`;
const CardImage = styled.img`
  width: 400px; /* Set the desired width */
  height: 200px; /* Set the desired height */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
`;
const StSelectArray = styled.div`
  display: flex;
  justify-content: right;
  margin: 10px;
`;
// const StEmptyHeart = styled.img`
//   background-image: url(${beanHeart});
//   width: 35px;
//   height: 35px;
//   background-size: cover;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.1);
//   }
//   margin-left: 20px;
// `;
// const StFullHeart = styled.img`
//   background-image: url(${heart});
//   width: 35px;
//   height: 35px;
//   background-size: cover;
//   background-color: transparent;
//   border: none;
//   cursor: pointer;
//   margin-left: 20px;
//   &:hover {
//     transform: scale(1.1);
//   }
// `;
// const Like = styled.div`
//   display: flex;
//   align-items: center;
// `;
