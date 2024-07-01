import  { useContext } from 'react';
import { DarkModeContext } from '../../context/dark-mode-context';
import './card-projects.css';

export function CardProjects({ title, description, imageUrl, technologies, projectLink }) {
  const { darkModeEnabled } = useContext(DarkModeContext);

  if (!title || !description || !imageUrl || !technologies || !projectLink) {
    return null; 
  }

  return (
    <div className='projects-container'>
      <div className={darkModeEnabled ? 'card-projects-dark' : 'card-projects-light'}>
        <h3 className={darkModeEnabled ? 'title-project-dark' : 'title-project-light'}>{title}</h3>
        <div className='container-img-projeto'>
          <img className='img-projeto' src={imageUrl} alt='Imagem do projeto' />
        </div>
        <div className='icons-project'>
          {technologies.map((Icon, index) => (
            <Icon key={index} size={30} color='#22c55e' />
          ))}
        </div>
        <div className='description-project'>
          <p className={darkModeEnabled ? 'description-project-dark' : 'description-project-light'}>{description}</p>
        </div>
        <div className='container-button-projects'>
          <button className={darkModeEnabled ? 'button-projects-dark' : 'button-projects-light'}>
            <a
              className={darkModeEnabled ? 'links-projects-dark' : 'links-projects-light'}
              href={projectLink}
              target='_blank'
              rel='noopener noreferrer' 
            >
              Ver Projeto
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}


