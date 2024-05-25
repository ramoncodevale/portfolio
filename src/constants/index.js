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

  {
    id: 3,
    title: 'Quiz Expert',
    description: "Rockseat Quiz Expert é um projeto dinâmico e interativo desenvolvido com o objetivo de aprimorar habilidades de aprendizado através de quizzes desafiadores. Com uma vasta gama de temas e perguntas criteriosamente selecionadas, este aplicativo proporciona uma experiência educativa envolvente para usuários de todos os níveis.",
    imageUrl: images.Projeto3,
    technologies: [images.FaHtml5, images.FaCss3Alt, images.IoLogoJavascript],
    projectLink: "https://ramoncodevale.github.io/quiz-expert/"
  },

]