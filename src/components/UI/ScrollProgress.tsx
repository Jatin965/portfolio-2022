import { useState, FC } from "react";

const ScrollProgress: FC<{ scroll: number }> = ({ scroll }) => {
  return (
    <svg width={100} height={100} viewBox="0 0 100 100">
      <circle
        fill="none"
        stroke="#ccc"
        cx={50}
        cy={50}
        r={40}
        strokeWidth={10}
      />
      <circle
        fill="none"
        stroke={"#87d"}
        cx={50}
        cy={50}
        r={40}
        strokeWidth={10}
        transform={`rotate(-90 50 50)`}
        strokeLinecap="round"
      />
      <text
        fill="#fff"
        fontSize="16px"
        x="50%"
        y="50%"
        dy="10px"
        textAnchor="middle"
      >
        {scroll}%
      </text>
    </svg>
  );
};

export default ScrollProgress;
