import React from "react";
import "./App.scss";
import LeftSideBar from "./components/Nav/LeftSideBar";
import RightSidebar from "./components/Nav/RightSidebar";

function App() {
  return (
    <div className="container">
      <LeftSideBar />
      <main></main>
      <RightSidebar />
    </div>
  );
}

export default App;
