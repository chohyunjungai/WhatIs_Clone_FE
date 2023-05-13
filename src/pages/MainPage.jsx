import React from "react";
import { useQuery } from "react-query";
import { allProject } from "../axios/api";

const MainPage = () => {
  // const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("allProject", allProject);
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {Error.message}</div>;

  // const detailOpen = (sprintId) => {
  //   if (!Cookies.get('token')) {
  //     alert('로그인이 필요합니다.')
  //     return;
  //   }

  //   navigate(`/main/${sprintId}`);
  // };

  // const [projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await axios.get("/post?sort={sort}");
  //       console.log(response.data);
  //       setProjects(response.data);
  //     } catch (error) {
  //       console.error("Error fetching projects:", error.message);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <div>
      <h1>Main Page</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default MainPage;
