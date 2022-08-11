import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [hover, setHover] = useState<string>("");
  return (
    <div className="menu">
      <div
        className={open ? "menu-icon open" : "menu-icon"}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={open ? `menu-list open ${hover}` : "menu-list"}>
        <ul>
          <li
            onMouseOut={() => setHover("")}
            onMouseOver={() => setHover("home")}
          >
            <a href="#" data-text="Home">
              Home
            </a>
          </li>
          <li
            onMouseOut={() => setHover("")}
            onMouseOver={() => setHover("about")}
          >
            <a href="#" data-text="About">
              About
            </a>
          </li>
          <li
            onMouseOut={() => setHover("")}
            onMouseOver={() => setHover("work")}
          >
            <a href="#" data-text="Work">
              Work
            </a>
          </li>
          <li
            onMouseOut={() => setHover("")}
            onMouseOver={() => setHover("tech")}
          >
            <a href="#" data-text="Tech">
              Tech
            </a>
          </li>
          <li
            onMouseOut={() => setHover("")}
            onMouseOver={() => setHover("portfolio")}
          >
            <a href="#" data-text="Portfolio">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
