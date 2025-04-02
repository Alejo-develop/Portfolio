import {
  faCss,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { SkillsInterface } from "../interfaces/skills.interface";
import { StudiesInterface } from "../interfaces/studies.interface";
import { ProjectInterface } from "../interfaces/projects.interface";

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
    name: "HTML5",
  },
  {
    icon: faCss,
    name: "CSS",
  },
  {
    icon: faJs,
    name: "Javascript",
  },
  {
    icon: faReact,
    name: "React",
  },
  {
    icon: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743393318/nextjsW_vuolf9.png",
    name: "Next Js",
  },
  {
    icon: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743393257/tailwindcssW_pojvey.png",
    name: "Tailwind Css",
  },
  {
    icon: faReact,
    name: "React Native",
  },
];

export const backendSkills: SkillsInterface[] = [
  {
    icon: faPython,
    name: "Python",
  },
  {
    icon: faNodeJs,
    name: "Node Js",
  },
  {
    icon: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743392856/NestjsWR_in7zsz.png",
    name: "Nest js",
  },
  {
    icon: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743393060/MongoDbW_hxdqux.png",
    name: "Mongo Db",
  },
  {
    icon: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743393147/mysqlW_f2247u.png",
    name: "MySQL & Sql lite",
  },
];

export const projects: ProjectInterface[] = [
  {
    name: "VorteXtream",
    description:
      "Vortextream is a website that covers most of the audiovisual content consumed today. From reviews and information on your favorite movies or anime, to live streaming with your favorite twitch streamers!",
    img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743568894/Vortextream_heerfi.png",
    link: "",
    type: "web",
  },
  {
    name: "CloseToYou",
    description:
      "CloseToYou is a mobile application for you to save your contacts where you can save more than just a number or a name, you can personalize your contact with the photo of your choice and save their location... just in case you forgot it!",
    img: "",
    link: "https://github.com/Alejo-develop/CloseToYou-app.git",
    type: "mobile",
  },
  {
    name: "Cashify",
    description:
      "Cashify is a mobile wallet application to put all your monthly money management in one place. Here you can not only save how much money you spend per month, but also how much you earn! and with that you can budget for a trip, for your house, for your hobbies or for anything you want! ",
    img: "",
    link: "https://github.com/Alejo-develop/walletapp-mobile.git",
    type: "mobile",
  },
  {
    name: "TaskManager",
    description:
      "TaskManager is a mobile app (still under development) to manage your habits, challenges or purposes. With an interactive interface, this app aims to be a smart task manager where you can save not only the frequency in which you do your things, but also an app where you can see your way to success by watching your constant progress.",
    img: "",
    link: "https://github.com/Alejo-develop/TaskManager-app.git",
    type: "mobile",
  },
];
