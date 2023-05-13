import axios from "axios";
import Cookies from "js-cookie";

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
const addProject = async (newProject)=> {
  await jwtInstance.put(/post/info/{postId},newProject)
}
//project All 조회
const allProject = async ()=> {
  try {
    const response = await get(`${process.env.REACT_APP_SERVER_URL}/post?sort={sort}`);

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
//

// const getPosts = async () => {
//   const response = await axios.get(
//     `${process.env.REACT_APP_SERVER_URL}/api/posts`,
//   );
//   return response.data;
// };

export {addProject, allProject}