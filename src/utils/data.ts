import {
  faCss,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { SkillsInterface, SoftSkillInterface } from "../interfaces/skills.interface";
import { StudiesInterface } from "../interfaces/studies.interface";
import { ProjectInterface } from "../interfaces/projects.interface";

export const imgYeyo: string[] = [
  'https://res.cloudinary.com/djqwo9izl/image/upload/v1744217338/yeyo1_jgc7ql.png',
  'https://res.cloudinary.com/djqwo9izl/image/upload/v1744218481/yeyo2_hvamg3.png'
] 

export const aboutMeData = {
  title: "Who am I?",
  paragraph1:
    "I’m Alejandro Zapata, an accomplished full-stack and mobile developer, seamlessly adapting to diverse project demands across frontend, backend, and mobile platforms.",
  paragraph2:
    " On the frontend, I utilize cutting-edge technologies such as React and Tailwind CSS, while on the backend, I excel with NestJS, Node.js, and TypeScript. Additionally, I specialize in mobile development with React Native, crafting intuitive and visually appealing UIs that enhance user experience. ",
  paragraph3:
    "By integrating these skills, I focus on delivering efficient and scalable web and mobile solutions. Whether working autonomously or within a collaborative team environment, I remain dedicated to the consistent delivery of high quality, impactful projects. In my career I have been able to work with numerous teams with different types of methodologies, which has given me enough experience to approach any project in the best way and adapting to any situation or technology.",
};

export const studies: StudiesInterface[] = [
  {
    title: "Riwi",
    studie: "FullStack Developer",
    img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1742663052/riwi_io_logo_a7c6gg.jpg",
    duration: "1 Year",
    studieType: "Bootcamp",
    background:
      ''
  },
];

export const softSkills: SoftSkillInterface[] = [
  {
    title: "Adaptability To Change",
    description:
      "Since I was a child I have been accustomed to constant change and I have been able to strengthen it in different projects that I have been involved in. ",
  },
  {
    title: "Problem solving",
    description:
      "I'm fast and I like to find and propose solutions to the problems that arise to the work team, always being communicative.",
  },
  {
    title: "Working under pressure",
    description:
      "At different points in my life I have had to test my abilities in situations under a lot of pressure, which has helped me not to block myself in such situations.",
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
    link: "https://vortextreaming.netlify.app/",
    type: "web",
  },
  {
    name: "CloseToYou",
    description:
      "CloseToYou is a mobile application for you to save your contacts where you can save more than just a number or a name, you can personalize your contact with the photo of your choice and save their location... just in case you forgot it!",
    img: [{ img: "", title: "" }],
    link: "https://github.com/Alejo-develop/CloseToYou-app.git",
    type: "mobile",
  },
  {
    name: "Cashify",
    description:
      "Cashify is a mobile wallet application to put all your monthly money management in one place. Here you can not only save how much money you spend per month, but also how much you earn! and with that you can budget for a trip, for your house, for your hobbies or for anything you want! ",
    img: [
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688701/login_mvcvca.jpg",
        title: "Login",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688712/SignUp_hicsce.jpg",
        title: "Sign Up",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688721/MenuFirstLog_hmamha.jpg",
        title: "Menu without Data",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688743/WalletModalFirstLog_zfszel.jpg",
        title: "Wallet Setttings without Data",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688769/MenuWithCategory_q60itg.jpg",
        title: "Menu",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688781/ModalInfoCateogry_rifxqa.jpg",
        title: "Category info Modal",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688809/MenuWallet_gm1plk.jpg",
        title: "Wallet Menu",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688819/CreateBudget_yarckd.jpg",
        title: "Create Budget Feature",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688824/createTransaction_ukoocw.jpg",
        title: "Create Budget Transactions",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688827/TransactionsScreen_yr3tyv.jpg",
        title: "History Transaction Screen",
      },
      {
        img: "https://res.cloudinary.com/djqwo9izl/image/upload/v1743688834/DetailsTransactions_pltorr.jpg",
        title: "Detail Transaction Screen",
      },
    ],
    link: "https://github.com/Alejo-develop/walletapp-mobile.git",
    type: "mobile",
  },
  {
    name: "TaskManager",
    description:
      "TaskManager is a mobile app (still under development) to manage your habits, challenges or purposes. With an interactive interface, this app aims to be a smart task manager where you can save not only the frequency in which you do your things, but also an app where you can see your way to success by watching your constant progress.",
    img: [{ img: "", title: "" }],
    link: "https://github.com/Alejo-develop/TaskManager-app.git",
    type: "mobile",
  },
];
