import { useState, FC } from "react";

const ScrollProgress: FC<{ scroll: number }> = ({ scroll }) => {
  const circumference = Math.PI * 70;
  const dash = (circumference * scroll) / 100;
  return (
    <svg width={80} height={80} viewBox="0 0 80 80">
      <circle
        fill="none"
        stroke="#ccc"
        cx={40}
        cy={40}
        r={35}
        strokeWidth={10}
      />
      <circle
        fill="none"
        stroke={"#87d"}
        cx={40}
        cy={40}
        r={35}
        strokeWidth={10}
        transform={`rotate(-90 40 40)`}
        strokeDasharray={circumference - dash}
        strokeLinecap="round"
      />
      <text
        fill="#fff"
        fontSize="16px"
        x="50%"
        y="50%"
        dy="8px"
        textAnchor="middle"
      >
        {scroll}%
      </text>
    </svg>
  );
};

export default ScrollProgress;
