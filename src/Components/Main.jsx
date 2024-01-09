import "../Styles/Desktop/Main.css";
import "../Styles/Mobile/Main.css";
import pokemon from "../Images/super-trunfo-pokemon.png";
import { useState, useEffect } from "react";

export default function Main(props) {
  const [slide1, setSlide1] = useState(false);
  const [slide2, setSlide2] = useState(false);
  const [slide3, setSlide3] = useState(false);
  const [slide4, setSlide4] = useState(false);

  const openSlide = (id) => {
    switch (id) {
      case 1:
        setSlide1(!slide1);
        setSlide2(false);
        setSlide3(false);
        setSlide4(false);
        break;
      case 2:
        setSlide2(!slide2);
        setSlide1(false);
        setSlide3(false);
        setSlide4(false);
        break;
      case 3:
        setSlide3(!slide3);
        setSlide1(false);
        setSlide2(false);
        setSlide4(false);
        break;
      case 4:
        setSlide4(!slide4);
        setSlide1(false);
        setSlide2(false);
        setSlide3(false);
        break;
      default:
        break;
    }
  };

  return (
    <section className="container_all">
      <div className="container_main">
        <div className="container_showcase">
          <div className="showcase" onClick={() => openSlide(1)}>
            <div
              className={`${slide1 === true ? "slide1-true" : "slide1-false"}`}
            >
              {slide1 === true && (
                <>
                  <button>Ver Repositório</button>
                  <button>Ir Para Site</button>
                </>
              )}
            </div>
            <img
              src={pokemon}
              alt="Imagem de tela do projeto Super Trunfo Pokemon"
            />
          </div>
          <span>Pokemón Super Trunfo</span>
        </div>
        <div className="container_showcase">
          <div className="showcase" onClick={() => openSlide(2)}>
            <div
              className={`${slide2 === true ? "slide2-true" : "slide2-false"}`}
            >
              {slide2 === true && (
                <>
                  <button>Ver Repositório</button>
                  <button>Ir Para Site</button>
                </>
              )}
            </div>
            <img src="#" alt="?" />
          </div>
          <span>opasinjdoasdj</span>
        </div>
      </div>
      <div className="container_main">
        <div className="container_showcase">
          <div className="showcase" onClick={() => openSlide(3)}>
            <div
              className={`${slide3 === true ? "slide3-true" : "slide3-false"}`}
            >
              {slide3 === true && (
                <>
                  <button>Ver Repositório</button>
                  <button>Ir Para Site</button>
                </>
              )}
            </div>
            <img src="#" alt="?" />
          </div>
          <span>asd[pkasdpḱask</span>
        </div>
        <div className="container_showcase">
          <div className="showcase" onClick={() => openSlide(4)}>
            <div
              className={`${slide4 === true ? "slide4-true" : "slide4-false"}`}
            >
              {slide4 === true && (
                <>
                  <button>Ver Repositório</button>
                  <button>Ir Para Site</button>
                </>
              )}
            </div>
            <img src="#" alt="?" />
          </div>
          <span>apoidhjoasidiosadj</span>
        </div>
      </div>
    </section>
  );
}
