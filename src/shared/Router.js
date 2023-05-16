import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import ProjectInfo from "../pages/ProjectInfo";
import Detail from "../pages/Detail";
import ProjectStory from "../pages/ProjectStory";
import LoginTest from "../pages/LoginTest";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalLayoutHeader from "../components/GlobalLayoutHeader";

const Router = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalLayoutHeader />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projectInfo" element={<ProjectInfo />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/projectStory" element={<ProjectStory />} />
          {/* Login Test를 위한 페이지 */}
          <Route path="/loginTest" element={<LoginTest />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;





// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Main from "../pages/Main";
// import SignUpPage from "../pages/SignUpPage";
// import LoginPage from "../pages/LoginPage";
// import ProjectInfo from "../pages/ProjectInfo";
// import { QueryClient, QueryClientProvider } from "react-query";
// import Detail from "../pages/Detail";
// import ProjectStory from "../pages/ProjectStory";
// import WriteStory from "../pages/WriteStory";
// const Router = () => {
//   const queryClient = new QueryClient();
//   return (
//     <QueryClientProvider client={queryClient}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/main" element={<Main />} />
//           <Route path="/signup" element={<SignUpPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/projectinfo" element={<ProjectInfo />} />
//           <Route path="/detail" element={<Detail />} />
//           <Route path="/projectstory" element={<ProjectStory/>}/>
//           <Route path="/writestory" element={<WriteStory/>}/>
//         </Routes>
//       </BrowserRouter>
//     </QueryClientProvider>
//   );
// };

// export default Router;
