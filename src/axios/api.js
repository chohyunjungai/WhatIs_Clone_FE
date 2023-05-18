import axios from "axios";
import Cookies from "js-cookie";

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
const addProject = async (id) => {
  const response = jwtInstance.put(`/posts/${id}/info`);
  return response.data;
};

const makeProjectStory = async (id) => {
  const response = jwtInstance.put(`/posts/${id}/story`);
  return response.data;
};

const makeModal = async () => {
  try {
    const response = await jwtInstance.post(`/posts`);
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error occurred while making a post:", error);
  }
};

export { jwtInstance, addProject, makeProjectStory };

// // 토큰
// const instance = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_URL,
// });

// const jwtInstance = axios.create({
//   baseURL: process.env.REACT_APP_SERVER_URL,
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: Cookies.get("token"),
//   },
// });

//project 추가
//project 추가
// const addProject = async (newProject)=> {
//   await jwtInstance.put(/post/info/{postId},newProject)
// }
// //project All 조회
// const allProject = async ()=> {
//   try {
//     const response = await get(`${process.env.REACT_APP_SERVER_URL}/post?sort={sort}`);

//     return response.data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
//

// const getPosts = async () => {
//   const response = await axios.get(
//     `${process.env.REACT_APP_SERVER_URL}/api/posts`,
//   );
//   return response.data;
// };

// export {addProject, allProject}
