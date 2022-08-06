import { FC } from "react";
import ScrollProgress from "../UI/ScrollProgress";

const RightSidebar: FC<{ scroll: number }> = ({ scroll }) => {
  return (
    <div className="sidebar">
      <ScrollProgress scroll={scroll} />
    </div>
  );
};

export default RightSidebar;
