import './about.css';
import programming from '../../assets/development-pana(1).svg';
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DarkModeContext } from '../../context/dark-mode-context';
import { useContext} from 'react';


export function About() {
    const { darkModeEnabled } = useContext(DarkModeContext)
    return (
        <section className={darkModeEnabled ? "about-dark" : "about-light"} id='about'>
            <div className="about-container">
                <div className="about-content">
                    <img src={programming} alt="Imagem de programação" />
                </div>
                <div className="container-text-about">
                    <p className={darkModeEnabled ? "title-about-dark" : "title-about-light"}>Sobre mim</p>
                    <p className='text-objective'>Sou um desenvolvedor de software apaixonado em busca de minha primeira oportunidade</p>
                    <p className='text-about-me'>
                        Sou um apaixonado por transformar conceitos visuais em experiências digitais interativas e envolventes.
                        Como desenvolvedor front-end, meu objetivo é criar interfaces web que não apenas impressionem visualmente,
                        mas também ofereçam uma experiência de usuário fluida e intuitiva.
                    </p>
                    <div className="button-about">
                    <button className={darkModeEnabled ? "button-about-dark" : "button-about-light"}>
                        <a href="https://github.com/ramoncodevale" target='_blank' rel="noopener noreferrer">
                            <FaGithub />
                            Github
                        </a>
                    </button>
                    </div>
                <div className="icons">
                    <FaHtml5 fontSize={32} color={darkModeEnabled ? "#22c55e" : "#fff"}/>
                    <FaCss3Alt fontSize={32} color={darkModeEnabled ? "#22c55e" : "#fff"}/>
                    <IoLogoJavascript fontSize={32} color={darkModeEnabled ? "#22c55e" : "#fff"}/>
                    <FaReact fontSize={32} color={darkModeEnabled ? "#22c55e" : "#fff"}/>
                    <FaGithub fontSize={32} color={darkModeEnabled ? "#22c55e" : "#fff"}/>
                    <FaGitAlt fontSize={32} color={darkModeEnabled ? "#22c55e" : "#fff"}/>
                </div>
                </div>
                
            </div>
        </section>
    )
}

