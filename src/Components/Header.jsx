import "../Styles/Desktop/Header.css";
import "../Styles/Mobile/Header.css";
import gitIcon from "../Images/github-icon.png";
import linkedinIcon from "../Images/linkedin-icon.png";
import mailIcon from "../Images/mail-icon.png";
import pdfIcon from "../Images/pdf-icon.png";
import whatsIcon from "../Images/whatsapp-icon.png";
import setaEsquerda from "../Images/seta-esquerda-icon.png";
import menu from "../Images/menu-icon.png";
import { useEffect, useState } from "react";
import curriculo from "../Documents/pedro-zucolo-curriculo-2024.pdf";

export default function Header({ showHeader, switchBoolHeader }) {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const atualizarScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", atualizarScreenSize);

    return () => {
      window.removeEventListener("resize", atualizarScreenSize);
    };
  }, []);

  return (
    <>
      <header
        className={`${showHeader === false ? "header_off" : "header_on"}`}
      >
        <div className="container_title">
          <span>Portfólio Online - Pedro Zucolo</span>
        </div>
        <div className="container_image">
          <div>
            <img
              src="https://scontent.fsod1-2.fna.fbcdn.net/v/t39.30808-6/273879052_5492199290808954_1267342591819397276_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=DcvjpL7FhzoAX__rxWq&_nc_ht=scontent.fsod1-2.fna&oh=00_AfCNyDiaFbbMx7iZrDtg_Fa9O-h8gKMmF9G-UZuuQSCclg&oe=65A0502E"
              alt="Imagem de Pedro Zucolo"
            />
          </div>
          <span>Desenvolvedor Web</span>
        </div>
        <div className="container_info">
          <div className="container_info_data">
            <span>Nome: Pedro Zucolo</span>
            <span>Idade: 25 (20/05/1998)</span>
            <span>Localidade: Rio Claro - São Paulo</span>
            <span id="tec">
              Tecnologias: PHP/Laravel | React.js | MySql | Docker | Linux
              (Ubuntu/Mint)
            </span>
          </div>
          <div className="container_info_webs">
            <a href="https://github.com/Zucoprince/" target="_blank" rel="noopener noreferrer">
            <img src={gitIcon} alt="Icone GitHub" title="Abrir GitHub"/>
            </a>
            <a href="https://www.linkedin.com/in/pedrozucolo/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Icone Linkedin" title="Abrir Linkedin"/>
            </a>
            <a href="mailto:pedro.zucolo@outlook.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} alt="Icone Email" title="pedro.zucolo@outlook.com"/>
            </a>
            <a href="https://wa.me/5519996162312" target="_blank" rel="noopener noreferrer">
            <img src={whatsIcon} alt="Icone WhatsApp" title="Abrir Conversa em Whatssapp"/>
            </a>
            <a href={curriculo} download target="_blank" rel="noopener noreferrer">
            <img src={pdfIcon} alt="Icone Currículo" title="Download Currículo"/>
            </a>
          </div>
        </div>
      </header>
      <div>
        {screenSize < 480 && (
          <div
            className={`${
              showHeader === true ? "container_seta" : "container_menu"
            }`}
            onClick={switchBoolHeader}
          >
            <img
              src={showHeader === true ? setaEsquerda : menu}
              alt="Seta para esconder cabeçalho"
              id="seta"
            />
          </div>
        )}
      </div>
    </>
  );
}
