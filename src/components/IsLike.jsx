// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useMutation, useQueryClient } from "react-query";
// import styled from "styled-components";
// import Cookies from "js-cookie";
// import axios from "axios";

// import beanHeart from "../Styles/image/beanHeart.png";
// import heart from "../Styles/image/heart.png";

// // access token
// const access_token = Cookies.get("Access_Token");
// const refresh_token = Cookies.get("Refresh_Token");

// const jwtInstance = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_URL,
//   headers: {
//     Access_Token: `Bearer ${access_token}`,
//     Refresh_Token: `Bearer ${refresh_token}`,
//   },
// });

// const IsLike = (props) => {
//   const [likes, setLikes] = useState(props.data.likes); // keep track of like count
//   const [liked, setLiked] = useState(props.data.likeStatus);
//   const queryClient = useQueryClient();

//   const isLikeProject = async () => {
//     await jwtInstance.post(`/likes/${props.data.postId}`);
//   };

//   const mutation = useMutation(isLikeProject, {
//     onSuccess: () => {
//       queryClient.invalidateQueries("allProject");
//     },
//   });

//   const isLikeHandler = () => {
//     setLiked(!liked);
//     // Increase or decrease the like count based on whether the post is being liked or unliked
//     setLikeCount(liked ? likes - 1 : likes + 1);
//     mutation.mutate();
//   };

//   return (
//     <>
//       {liked ? (
//         <StFullHeart src={heart} alt="Filled Heart" onClick={isLikeHandler} />
//       ) : (
//         <StEmptyHeart
//           src={beanHeart}
//           alt="Empty Heart"
//           onClick={isLikeHandler}
//         />
//       )}
//       <p>{likes}</p> {/* Display the like count */}
//     </>
//   );
// };

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
// const DetailLike = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 150px;
// `;

// export default IsLike;
