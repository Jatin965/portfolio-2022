import React from "react";
import "./App.scss";
import SideBar from "./components/Nav/SideBar";

function App() {
  return (
    <div className="container">
      <SideBar />
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
