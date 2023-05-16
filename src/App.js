import React from "react";

import Router from "./shared/Router";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        {/* <Outlet></Outlet> */}
        <Router />
      </div>
    </>
  );
}

export default App;
