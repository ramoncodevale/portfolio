import './card-projects.css'

import { IoLogoJavascript } from "react-icons/io5";

import { DarkModeContext } from '../../context/dark-mode-context';
import { useContext } from 'react';


export function CardProjects({title,description,imageUrl,technologies }){
    const { darkModeEnabled } = useContext(DarkModeContext)

    return(
        <div className='projects-container'>
        <div className={darkModeEnabled ? "card-projects-dark" : "card-projects-light"}>
          <div className="container-img-projeto">
            <img className='img-projeto' src={imageUrl} alt="img project" />
          </div>
          <div className="icons-project">
          {technologies.map(Icon =>
            <Icon size={30} color="#22c55e"  key={Icon.name} />
          )}
          </div>
          <h3 className={darkModeEnabled ? "title-project-dark" : "title-project-light"}>{title}</h3>
          <p className={darkModeEnabled ? "description-project-dark" : "description-project-light"}> 
          {description}
          </p>
          <div className="container-button-projects">
            <button className={darkModeEnabled ? "button-projects-dark" : "button-projects-light"}>
              <a className={darkModeEnabled ? "links-projects-dark" : "links-projects-light"} href="https://photo-api-sepia.vercel.app/" target='_blank'>
                Ver Projeto
              </a>
            </button>
          </div>
        </div>
 </div>
    )

}