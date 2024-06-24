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
    projectLink: "https://dashboard-nlw-sd9e.vercel.app/add"
  },

  {
    id: 3,
    title: 'Quiz Expert',
    description: "Rockseat Quiz Expert é um projeto dinâmico e interativo desenvolvido com o objetivo de aprimorar habilidades de aprendizado através de quizzes desafiadores. Com uma vasta gama de temas e perguntas criteriosamente selecionadas, este aplicativo proporciona uma experiência educativa envolvente para usuários de todos os níveis.",
    imageUrl: images.Projeto3,
    technologies: [images.FaHtml5, images.FaCss3Alt, images.IoLogoJavascript],
    projectLink: "https://ramoncodevale.github.io/quiz-expert/"
  },

  {
    id: 4,
    title: 'Countries api',
    description: "O Explorador de Países é uma aplicação web interativa que permite aos usuários explorar informações detalhadas sobre países ao redor do mundo. Utilizando a API REST Countries, a aplicação fornece dados abrangentes, como bandeira, capital, população, área, idiomas, moeda, e localização geográfica.",
    imageUrl: images.Projeto4,
    technologies: [images.BiLogoTypescript, images.FaReact, images.SiTailwindcss],
    projectLink: "https://countries-api-react-tailwind.netlify.app/",
  }

]