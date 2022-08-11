import { useState, FC } from "react";

const ScrollProgress: FC<{ scroll: number }> = ({ scroll }) => {
  const circumference = Math.PI * 70;
  const dash = (circumference * scroll) / 100;
  return (
    <div className="progress">
      <span
        className="title timer"
        data-from="0"
        data-to={scroll}
        data-speed="1800"
      >
        {scroll}
      </span>
      <div className="overlay"></div>
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
};

export default ScrollProgress;
