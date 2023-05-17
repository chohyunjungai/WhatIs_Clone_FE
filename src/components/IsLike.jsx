import React, { useState } from "react";
import { useEffect } from "react";
import { QueryClient, useMutation, useQueryClient } from "react-query";
import * as CSS from "../components/component/style";

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

const IsLike = (props) => {
  //project 좋아요
  const isLikProject = async (props) => {
    await jwtInstance.post(`/likes/${id}`);
  };

  //리액트 쿼리 관련
  const queryClient = useQueryClient();
  const [Liked, setLiked] = useState(props.data.likes);
  const mutation = useMutation(isLikProject, {
    onSuccess: () => {
      queryClient.invalidateQueries("allProject");
      queryClient.invalidateQueries("detailProject");
    },
  });
  useEffect(() => {
    setLiked(props.data.isLiked);
  }, [props.data]);
  const isLikeHandler = () => {
    setLiked(!Liked);
    mutation.mutate(props.data.postId);
  };

  return (
    <>
      {Liked ? (
        <CSS.Heart onClick={isLikeHandler} />
      ) : (
        <CSS.BeanHeart onClick={isLikeHandler} />
      )}
    </>
  );
};

export default IsLike;
