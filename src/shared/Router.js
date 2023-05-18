import React from "react";
import { useState } from "react";
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
import CategoryModal from "../pages/CategoryModal";

const Router = () => {
  const queryClient = new QueryClient();

  const [showModal, setShowModal] = useState(false);

  const handleCategoryModalClose = () => {
    setShowModal(false);
  };

  const handleCategoryModalOpen = () => {
    setShowModal(true);
  };

  // const handleLogoClick = () => {
  //   // Handle logo click action here
  //   console.log("Logo clicked");
  // };

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalLayoutHeader
          onCategoryClick={handleCategoryModalOpen}
          // onClickLogo={handleLogoClick}
        />
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route path="/posts/:id/info" element={<ProjectInfo />} />
          <Route path="/posts/:id" element={<Detail />} />
          <Route path="/posts/:id/story" element={<ProjectStory />} />
          {/* Login Test를 위한 페이지 */}
          <Route path="/loginTest" element={<LoginTest />} />
        </Routes>
        {showModal && <CategoryModal onClose={handleCategoryModalClose} />}
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default Router;
