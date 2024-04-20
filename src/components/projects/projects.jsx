import './projects.css'

import { FaArrowRight } from "react-icons/fa";
import { DarkModeContext } from '../../context/dark-mode-context';
import { useContext } from 'react';
import Projeto from '../../assets/img-photo.png'

export function Projects() {
  const { darkModeEnabled } = useContext(DarkModeContext)

  return (
    <section className='projects' id='projects'>
      <p className={darkModeEnabled ? "title-projects-dark" : "title-projects-light"}>Projetos</p>
      <h3 className={darkModeEnabled ? "text-projects-dark" : "text-projects-light"}>Dê uma olhada nos meus projetos em destaque</h3>
      <div className='projects-container'>
        <div className={darkModeEnabled ? "card-projects-dark" : "card-projects-light"}>
          <div className="container-img-projeto">
            <img className='img-projeto' src={Projeto} alt="" />
          </div>
          <div className="container-button-projects">
            <button className={darkModeEnabled ? "button-projects-dark" : "button-projects-light"}>
              <a className={darkModeEnabled ? "links-projects-dark" : "links-projects-light"} href="https://photo-api-sepia.vercel.app/" target='_blank'>
              Ver Projeto
              </a>
            </button>
          </div>
        </div>

        <div className={darkModeEnabled ? "card-projects-dark" : "card-projects-light"}>

        </div>

        <div className={darkModeEnabled ? "cards-projects-dark" : "card-projects-light"}>

        </div>

      </div>

      <div className="button-project">
        <button className='btn-project'>
          <a href="#" >Ver Tudo
          </a>
          <FaArrowRight className='icon-arrow' />
        </button>
      </div>
    </section>
  )
}
