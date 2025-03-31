import { faCss, faHtml5, faJs, faNodeJs, faPython, faReact } from "@fortawesome/free-brands-svg-icons";
import { SkillsInterface } from "../interfaces/skills.interface";
import { StudiesInterface } from "../interfaces/studies.interface";

export const aboutMeData = {
  title: "Who am I?",
  paragraph1:
    "I’m Alejandro Zapata, an accomplished full-stack and mobile developer, seamlessly adapting to diverse project demands across frontend, backend, and mobile platforms.",
  paragraph2:
    " On the frontend, I utilize cutting-edge technologies such as React and Tailwind CSS, while on the backend, I excel with NestJS, Node.js, and TypeScript. Additionally, I specialize in mobile development with React Native, crafting intuitive and visually appealing UIs that enhance user experience. ",
  paragraph3:
    "By integrating these skills, I focus on delivering efficient and scalable web and mobile solutions. Whether working autonomously or within a collaborative team environment, I remain dedicated to consistently delivering high-quality impactful projects.",
};

export const studies: StudiesInterface[] = [
  {
    title: "Riwi",
    studie: "FullStack Developer",
    img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1742663052/riwi_io_logo_a7c6gg.jpg",
    duration: "1 Year",
    studieType: "Bootcamp",
    background:
      "Riwi is a bootcamp where I learned to program, I had the opportunity to do many projects both in Front-end and Back-end, and also as a Mobile developer. There I worked with many teams while learning about agile working methodologies, architecture patterns and in general how to work in the programming world.",
  },
];

export const frontendSkills: SkillsInterface[] = [
  {
    icon: faHtml5,
    name: 'HTML5'
  },
  {
    icon: faCss,
    name: 'CSS'
  },
  {
    icon: faJs,
    name: 'Javascript'
  },
  {
    icon: faReact,
    name: 'React'
  },
  {
    icon: 'https://res.cloudinary.com/djqwo9izl/image/upload/v1743393318/nextjsW_vuolf9.png',
    name: 'Next Js'
  },
  {
    icon: 'https://res.cloudinary.com/djqwo9izl/image/upload/v1743393257/tailwindcssW_pojvey.png',
    name: 'Tailwind Css'
  },
  {
    icon: faReact,
    name: 'React Native'
  }
];

export const backendSkills: SkillsInterface[] = [
  {
    icon: faPython,
    name: 'Python'
  },
  {
    icon: faNodeJs,
    name: 'Node Js'
  },
  {
    icon: 'https://res.cloudinary.com/djqwo9izl/image/upload/v1743392856/NestjsWR_in7zsz.png',
    name: 'Nest js'
  },
  {
    icon: 'https://res.cloudinary.com/djqwo9izl/image/upload/v1743393060/MongoDbW_hxdqux.png',
    name: 'Mongo Db'
  },
  {
    icon: 'https://res.cloudinary.com/djqwo9izl/image/upload/v1743393147/mysqlW_f2247u.png',
    name: 'MySQL & Sql lite'
  }
] 
