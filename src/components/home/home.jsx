import './home.css';

import { FaFileAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import computer from '../../assets/computer.svg';
import curriculum from '../../assets/CV-RAMON-VALENTIM-FRONT-END.pdf'
import { DarkModeContext } from '../../context/dark-mode-context';
import { useContext} from 'react';


export function Home() {
    const { darkModeEnabled} = useContext(DarkModeContext)
    return (
        <>
            <section className="home" id='home'>
                <div className="home-container">
                    <div className="text-container">
                        <h1 className={darkModeEnabled ? "title-home-dark" : "title-home-light"}>Olá, Eu Sou o Ramon</h1>
                        <h2 className='text-front-end'>Front-End developer</h2>
                        <p>Sou especializado na construção de aplicativos web e móveis inovadores <br /> usando tecnologias como Html,Css,Js e React.</p>
                    </div>
                <div className="button-container">
                    <button className='btn-cv'>
                        <a href={curriculum} target='_blank'>
                            <FaFileAlt />
                            Meu Currículo
                        </a>
                    </button>
                    <button className='btn-contact'>
                        <a href="https://api.whatsapp.com/send/?phone=1198887-2804&text&type=phone_number&app_absent=0" target='_blank'>
                             Contato
                            <FaArrowRight />
                        </a>
                    </button>
                </div>
        </div >
                <img className="img-computer" src={computer} alt="img computer" />
                </section>
</>
    )
}
