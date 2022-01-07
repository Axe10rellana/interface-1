import React from "react";

const Menu = () => {
  return (
    <section>
      <input type="checkbox" className="off-canvas-btn" />
      <label className="off-canvas-burger"></label>
      <nav className="off-canvas-menu">
        <div className="off-canvas-menu-container">
          <a href="#cursos" className="off-canvas-link">
            Cursos De Programación Web
          </a>
        </div>
      </nav>
    </section>
  );
};

export default Menu;
