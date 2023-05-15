import React from "react";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
// import { FaTshirt } from "react-icons/fa";

const Main = () => {
  const [itemList, setItemList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const imageUrl =
    "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"; // 이미지 URL

  const getMainData = async () => {
    const response = await axios.get(
      "http://43.201.181.250/posts?page=0&size=10&sort=createdAt,DESC"
    );
    console.log("main data get 요청:", response);
    setItemList(response.data.data);
  };

  const getCategoryListData = async () => {
    const response = await axios.get(
      "http://43.201.181.250/posts?page=0&size=10&sort=createdAt,DESC&category=HomeLiving"
    );
    console.log("카테고리 데이터 요청:", response);
    setCategoryList(response.data.data);
  };

  useEffect(() => {
    getMainData();
    getCategoryListData();
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
  return (
    <>
      <div>
        {/* 헤더 */}
        <header />

        {/* 배너 */}
        <Container_BannerImage>
          big image box
          <img
            src={imageUrl}
            alt="이미지"
            style={{ width: "100%", height: "120%", objectFit: "cover" }}
          />
        </Container_BannerImage>

        {/* 카테고리 */}
        <Container_CategoryLists>
          {categoryList.map((item) => {
            return (
              <div>
                <div>
                  <imag src={item.img} />
                </div>
                <p>{item.title}</p>
              </div>
            );
          })}
        </Container_CategoryLists>

        {/* 데이터 */}
        <Container_ProjectCards>
          <div>
            {/* 데이터 헤더 */}
            <p>전체</p>
            <div>
              <button>인기순</button>
              <button>모집금액순</button>
              <button>최신순</button>
            </div>
          </div>

          {/* 데이터뿌리기  */}
          <div>
            {/* 카드 */}
            {itemList.map((item) => {
              return (
                <div key={item.id}>
                  <img src={item.thumbnail} />
                  {/* 좋아요하트 */}
                  <div>{item.likeStatus ? "채워진하트" : "빈하트"}</div>
                  달성 모집금액 데드라인
                  <div>
                    <p>{item.percentage}% 달성</p>
                    <p>{item.targetAmount}원</p>
                    <p>{item.deadLine}일 전</p>
                  </div>
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </Container_ProjectCards>
      </div>
      ;
    </>
  );
};

export default Main;

const Container_ProjectCards = styled.div`
  margin: 20px;
  border: 1px solid black;
`;

const Container_BannerImage = styled.div`
  border: 1px solid black;
  height: 250px;
  width: auto;
`;

const Container_CategoryLists = styled.div`
  margin-top: 80px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
`;
