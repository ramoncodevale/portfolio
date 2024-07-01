import  { useContext } from 'react';
import { DarkModeContext } from '../../context/dark-mode-context';
import { projects } from '../../constants/index';
import { CardProjects } from './card-projects';

import './projects.css';

export function Projects() {
  const { darkModeEnabled } = useContext(DarkModeContext);

  return (
    <section className='projects' id='projects'>
      <p className={darkModeEnabled ? 'title-projects-dark' : 'title-projects-light'}>Projetos</p>
      <h3 className={darkModeEnabled ? 'text-projects-dark' : 'text-projects-light'}>Dê uma olhada nos meus projetos em destaque</h3>
      {projects.map((project) => (
        <CardProjects
          key={project.id} 
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          technologies={project.technologies}
          projectLink={project.projectLink}
        />
      ))}
    </section>
  );
}

