import axios from "axios";
import Cookies from "js-cookie";

// 토큰
const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

const jwtInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: Cookies.get("token"),
  },
});

//project 추가
// const addProject = async (newProject) => {
//   await jwtInstance.put(`/posts/${id}/info`, newProject);
// };
//project All 조회
const allProject = async () => {
  try {
    const response = await instance.get(
      `${process.env.REACT_APP_SERVER_URL}/posts?page=0&size=10&sort=createdAt,DESC&category=All


      `
    );
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { allProject };
