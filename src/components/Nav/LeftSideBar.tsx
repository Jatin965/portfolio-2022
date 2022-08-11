import React from "react";
import Menu from "./Sub/Menu";

const LeftSideBar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <h1>JS</h1>
        <Menu />
        <p>Share</p>
        {/* <ul></ul> */}
      </div>
    </div>
  );
};

export default LeftSideBar;
