import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect } from "react";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 80%;
`;
const CategoryButton = styled.button`
  background: lightgray;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: gray;
    color: white;
  }
`;

const CategoryModal = ({ onClose }) => {
  const navigate = useNavigate();
  const categories = [
    "All",
    "Beauty",
    "FashionStuff",
    "HomeLiving",
    "Food",
    "TechElectrics",
    "LeisureSports",
  ]; // Add more categories as needed
  // access 토큰
  const access_token = Cookies.get("Access_Token");
  const refresh_token = Cookies.get("Refresh_Token");

  const jwtInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,
    headers: {
      Access_Token: `Bearer ${access_token}`,
      Refresh_Token: `Bearer ${refresh_token}`,
    },
  });

  const handleCategoryClick = async (category) => {
    if (!access_token || !refresh_token) {
      // Check if access token or refresh token is missing
      alert("토큰이 없습니다. 로그인이 필요합니다."); // Alert the user
      navigate("/logintest");
      onClose(); // Redirect to the login page
      return; // Stop further execution of the function
    }

    try {
      const response = await jwtInstance.post("http://43.201.181.250/posts", {
        category: category,
      });
      const id = response.data.data;
      console.log("postId 요청:", id);

      navigate(`/posts/${id}/info`);
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  // };navigate(`/posts/${category.toLowerCase()}/info`);

  useEffect(() => {}, []);
  return (
    <ModalBackground>
      <ModalContainer>
        <h2>Select a Category</h2>
        {categories.map((category) => (
          <CategoryButton
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </ModalContainer>
    </ModalBackground>
  );
};

export default CategoryModal;
