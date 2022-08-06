import React from "react";
import "./App.scss";
import LeftSideBar from "./components/Nav/LeftSideBar";
import RightSidebar from "./components/Nav/RightSidebar";

function App() {
  return (
    <div className="container">
      <LeftSideBar />
      <main>
        <div className="wrapper">
          <div style={{height: "100vh", background:"purple"}}>Main Content</div>
          <div style={{height: "100vh",background: "orange"}}>Main Content</div>
          <div style={{height: "100vh",background: "red"}}>Main Content</div>
          <div style={{height: "100vh",background: "cyan"}}>Main Content</div>
          <div style={{height: "100vh",background: "green"}}>Main Content</div>
        </div>
      </main>
      <RightSidebar />
    </div>
  );
}

export default App;
