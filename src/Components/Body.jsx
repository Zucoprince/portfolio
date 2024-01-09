import { useState } from "react";
import "../Styles/Desktop/Body.css";
import "../Styles/Mobile/Body.css";
import Header from "./Header";
import Main from "./Main";
import interrogacao from "../Images/ponto-de-interrogacao.png";

export default function Body() {
  const [showHeader, setShowHeader] = useState(true);

  const switchBoolHeader = () => {
    setShowHeader(!showHeader);
  };

  return (
    <body>
      <button
        className="button-interrogacao"
        onClick={() => {
          window.open("https://github.com/Zucoprince/portfolio", "_blank");
        }}
      >
        <img src={interrogacao} alt="ponto de interrogação" />
        <span>Ver o repositório deste site!</span>
      </button>
      <Header showHeader={showHeader} switchBoolHeader={switchBoolHeader} />
      <Main showHeader={showHeader} />
      <section
        className={`${showHeader === true ? "darkness" : "lightness"}`}
      ></section>
    </body>
  );
}
