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



// import React from "react";
// import GnbLayout from "./layout/gnb.layout";
// import Router from "./shared/Router";
// import { Outlet } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <div className="App">
//         <GnbLayout></GnbLayout>
//         {/* <Outlet></Outlet> */}
//         <Router />
//       </div>
//     </>
//   );
// }

// export default App;



// import { Outlet } from "react-router-dom";
// import "./App.css";
// import GnbLayout from "./layout/gnb.layout";

// function App() {
//   return <>
//     {/* <div className="App">클론코딩의 시작 </div> */}
//     <GnbLayout></GnbLayout>
//     <Outlet></Outlet>
//   </>
// }

// export default App;