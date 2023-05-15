// import React, { useEffect } from "react";

// const DashboardPage = () => {
//   const { isLoading, isError, data } = useQuery("allProject", allProject);
//   console.log(data);
//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error: {Error.message}</div>;

//   // useEffect(() => {
//   // 서버에 데이터 요청
//   // 현재 컴포넌트에서 필요한 데이터를 요청함

//   // const detailOpen = (sprintId) => {
//   //   if (!Cookies.get('token')) {
//   //     alert('로그인이 필요합니다.')
//   //     return;
//   //   }
//   // }, []);

//   return (
//     <div>
//       <h1>DashboardPage</h1>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>{project.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default DashboardPage;
