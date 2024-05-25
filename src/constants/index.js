import {
  images
} from "./image";

export const projects = [{
    id: 1,
    title: "Api Pexels",
    description: "Um projeto que utiliza a API do Pexels para buscar e obter imagens de alta qualidade de forma eficiente e intuitiva.",
    imageUrl: images.Projeto1,
    technologies: [images.FaReact, images.IoLogoJavascript],
    projectLink: "https://photo-api-sepia.vercel.app/"
  },

  {
    id: 2,
    title: "Nlw Dashboard",
    description: "Um dashboard desenvolvido durante a Next Level Week da Rocketseat, que permite a visualização e gestão de dados dos participantes de forma dinâmica e estilizada.",
    imageUrl: images.Projeto2,
    technologies: [images.FaReact, images.BiLogoTypescript, images.SiTailwindcss],
    projectLink: "https://dashboard-nlw-sd9e.vercel.app/"  
  },
]
