import { FC } from "react";
// import ScrollProgress from "../UI/ScrollProgress";

const RightSidebar: FC<{ scroll: number }> = ({ scroll }) => {
  return (
    <div className="right-sidebar">
      <div className="container">
        <h2>Contact</h2>
        <div className="bars">
          <div className="bar">1</div>
          <div className="bar">1</div>
          <div className="bar">1</div>
          <div className="bar">1</div>
          <div className="bar">1</div>
        </div>
        <p>Scroll</p>
      </div>
    </div>
  );
};

export default RightSidebar;
