import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

const initialTheme = "light";

const App = () => {
  const [theme, setTheme] = useState(initialTheme);

  const networkStatus = () => {
    const isOnline = () => {
      const $div = document.createElement("div");

      if (navigator.onLine) {
        $div.textContent = "Conexion Establecida";
        $div.classList.add("online");
        $div.classList.remove("offline");
      } else {
        $div.textContent = `Conexion perdida`;
        $div.classList.add("offline");
        $div.classList.remove("online");
      }

      document.body.insertAdjacentElement("afterbegin", $div);
      setTimeout(() => {
        document.body.removeChild($div);
      }, 2000);
    };
    window.addEventListener("online", (e) => isOnline());
    window.addEventListener("offline", (e) => isOnline());
  };

  networkStatus();

  return (
    <div>
      <Header theme={theme} />
      <Main setTheme={setTheme} theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
