import { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
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

      <div className={open ? "menu-list open" : "menu-list"}>
        <ul>
          <li><a href="#" data-text="Home">Home</a></li>
          <li><a href="#" data-text="About">About</a></li>
          <li><a href="#" data-text="Work">Work</a></li>
          <li><a href="#" data-text="Tech">Tech</a></li>
          <li><a href="#" data-text="Portfolio">Portfolio</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
