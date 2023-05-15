import React from "react";
import Main from "./pages/Main";
import GnbLayout from "./layout/gnb.layout";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <GnbLayout></GnbLayout>
        <Outlet></Outlet>

        <Main />
      </div>
    </>
  );
}

export default App;
