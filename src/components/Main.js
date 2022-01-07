import React, { useEffect } from "react";
import Cards from "./Cards";
import Menu from "./Menu";
import BtnScroll from "./BtnScroll";

const ls = localStorage;

const Main = ({ setTheme, theme }) => {
  const changeMode = () => {
    if (theme === "light") {
      setTheme("dark-mode");
      ls.setItem("theme", "dark-mode");
    } else {
      setTheme("light");
      ls.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (ls.getItem("theme") === null) ls.setItem("theme", "light");

    if (ls.getItem("theme") === "light") setTheme("light");

    if (ls.getItem("theme") === "dark-mode") setTheme("dark-mode");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className={theme}>
      <Menu />
      <BtnScroll />
      <button className="dark-theme-btn" onClick={() => changeMode()}>
        {theme === "light" ? "🌙" : "☀️"}
      </button>
      <h2 id="cursos" className="title">
        Cursos De Programación Web FrontEnd
      </h2>
      <div className="cards">
        <Cards />
      </div>
    </main>
  );
};

export default Main;
