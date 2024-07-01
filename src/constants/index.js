import { images } from "./image";

export const projects = [
  {
    id: 1,
    title: 'Quiz Expert',
    description: "Rockseat Quiz Expert é um projeto dinâmico e interativo desenvolvido com o objetivo de aprimorar habilidades de aprendizado através de quizzes desafiadores. Com uma vasta gama de temas e perguntas criteriosamente selecionad.as, este aplicativo proporciona uma experiência educativa envolvente para usuários de todos os níveis.",
    imageUrl: images.Projeto1,
    technologies: [images.FaHtml5, images.FaCss3Alt, images.IoLogoJavascript],
    projectLink: "https://ramoncodevale.github.io/quiz-expert/"
  },
  {
    id: 2,
    title: 'Countries api',
    description: "O Explorador de Países é uma aplicação web interativa que permite aos usuários explorar informações detalhadas sobre países ao redor do mundo. Utilizando a API REST Countries, a aplicação fornece dados abrangentes, como bandeira, capital, população, área, idiomas, moeda, e localização geográfica.",
    imageUrl: images.Projeto2,
    technologies: [images.BiLogoTypescript, images.FaReact, images.SiTailwindcss],
    projectLink: "https://countries-api-react-tailwind.netlify.app/",
  }
];
