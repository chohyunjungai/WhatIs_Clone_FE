import { Outlet } from "react-router-dom";
import "./App.css";
import GnbLayout from "./layout/gnb.layout";

function App() {
  return <>
    {/* <div className="App">클론코딩의 시작 </div> */}
    <GnbLayout></GnbLayout>
    <Outlet></Outlet>
  </>
}

export default App;