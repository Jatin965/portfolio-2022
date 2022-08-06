import { useState } from "react";
import "./App.scss";
import LeftSideBar from "./components/Nav/LeftSideBar";
import RightSidebar from "./components/Nav/RightSidebar";

function App() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.getElementsByTagName("main")["0"].scrollTop;
    const MaxHeight =
      document.getElementsByTagName("main")["0"].scrollHeight -
      document.getElementsByTagName("main")["0"].clientHeight;

    const ScrollPercent = Math.round((Scrolled / MaxHeight) * 100);
    setScroll(ScrollPercent);
  };

  return (
    <div className="container">
      <LeftSideBar />
      <main onScroll={onScroll}>
        <div className="wrapper">
          <div style={{ height: "100vh", background: "purple" }}>
            Main Content
          </div>
          <div style={{ height: "100vh", background: "orange" }}>
            Main Content
          </div>
          <div style={{ height: "100vh", background: "red" }}>Main Content</div>
          <div style={{ height: "100vh", background: "cyan" }}>
            Main Content
          </div>
          <div style={{ height: "100vh", background: "green" }}>
            Main Content
          </div>
        </div>
      </main>
      <RightSidebar scroll={scroll} />
    </div>
  );
}

export default App;
