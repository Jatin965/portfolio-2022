import { FC } from "react";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

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

        <div className="progress-container">
          <CircularProgressbar
            value={scroll}
            text={`${scroll}%`}
            strokeWidth={8}
            styles={buildStyles({ textColor: "#fff", pathColor: "#A890FE" })}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
