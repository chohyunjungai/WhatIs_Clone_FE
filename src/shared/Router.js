import React from "react";
import FundingListsPage from "../pages/FundingListsPage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FundingListsPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignUpPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
