import {
  mobile,
  backend,
  front,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  next,
  nest,
  gomycode,
  cwd,
  chat,
  portfolio,
  fooddelivery,
  reactnative,
  ecomerce,
  realestateimg,
  threejs,
} from "../assets";
import sabrine from "../assets/testimonials/sabrine.webp";
import amine from "../assets/testimonials/amine.webp";
import sarah from "../assets/testimonials/sarah.webp";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "feedbacks",
    title: "Feedbacks",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Js Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: front,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "Nest",
    icon: nest,
  },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "celestial wave digital ",
    icon: cwd,
    iconBg: "#37517e",
    date: "Jun 2024 - October 2024",
    points: [
      "Developed and integrated user interfaces based on design specifications to create intuitive, responsive layouts.",
      "Implemented API integration to ensure smooth data exchange between front-end and back-end systems.",
      "Ensured adherence to coding standards and best practices, including web accessibility and performance optimization.",
      "Integrated design elements into the codebase to deliver cohesive user experiences.",
      "Followed industry standards for version control (Git) to manage code changes and maintain collaboration across the development team.",
    ],
  },
  {
    title: "Full stack Js Developer",
    company_name: "Gomycode",
    icon: gomycode,
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Fev 2024",
    points: [
      "Developed and maintained web applications using React.js and related technologies, ensuring efficient and scalable solutions.",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to deliver high-quality digital products.",
      "Implemented responsive design to ensure applications were optimized for various devices and ensured cross-browser compatibility.",
      "Actively participated in code reviews, providing and receiving constructive feedback to maintain clean, efficient, and maintainable code.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I am thrilled to share my experience with my student, who has truly excelled in web development. From the very beginning, he displayed an impressive passion for the field. His dedication to mastering HTML, CSS, and JavaScript, along with advanced technologies like React and Node.js, has been remarkable. What sets him apart is his exceptional problem-solving skills and innovative approach. Each project he undertakes showcases his growth, both technically and creatively. Today, he stands out as a skilled web developer, ready to tackle any challenge in the ever-evolving tech landscape.",
    name: "Sabrine Loussaief",
    designation: " Instructor",
    company: "GOMYCODE",
    image: sabrine,
  },
  {
    testimonial:
      "I've had the pleasure of working closely with Hamza on multiple projects at Celestial Wave degital . As a frontend developer, he consistently demonstrates an impressive ability to translate complex UI/UX designs into highly functional, user-friendly web applications.",
    name: "Mohamed amine sefi",
    designation: "UI/UX Designer",
    company: "CWD",
    image: amine,
  },
  {
    testimonial:
      "I’ve had the pleasure of working alongside Hamza on several projects and I can confidently say that he is an exceptional developer His ability to solve complex problems with clean efficient code paired with a strong sense of design and user experience truly sets him apart Whether it's creating robust backend systems building dynamic user interfaces or Hamza consistently delivers high-quality work His passion for technology and continuous learning is evident in every project he tackles I highly recommend Hamza to anyone seeking a dedicated and skilled developer",
    name: "Sarra Fersi",
    designation: "Intern",
    company: "CWD",
    image: sarah,
  },
];

const projects = [
  {
    name: "Full Stack React Native App",
    description:
      "Self-learning Project – Developed with React Native, Animatable, and Appwrite. The app enables seamless AI video sharing, emphasizing design and functionality. Tools: React Native, Expo, Nativewind, Animatable, Appwrite.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "purple-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
    ],
    image: reactnative, 
    source_code_link: "https://github.com/hamzakh86/AI-video-sharing",
    description_class: "react-native-app" 
  },
  {
    name: "E-Commerce Website",
    description:
      "Developed a full-stack e-commerce platform with Next.js 14, featuring an admin dashboard and CMS for managing products, users, and orders. The platform supports secure payments via Stripe and is optimized for scalability.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "yellow-text-gradient",
      },
      {
        name: "stripe",
        color: "purple-text-gradient",
      },
    ],
    image: ecomerce,
    source_code_link: "https://github.com/hamzakh86/E-commerce-Admin-Dashboard",
    description_class: "ecommerce-website" 
  },
  {
    name: "A Modern Real Estate",
    description:
      "Built a real estate marketplace using the MERN stack, with features like property listing management (CRUD), image uploads, and advanced search functionality. Tools: MongoDB, Express.js, React.js, Node.js, JWT, Redux Toolkit.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
      {
        name: "jwt",
        color: "red-text-gradient",
      },
   
    ],
    image: realestateimg,
    source_code_link: "https://github.com/hamzakh86/A-modern-real-estate-",
  },
  {
    name: "Food Delivery",
    description:
      "Developed a comprehensive food delivery web application utilizing Microservice Architecture, featuring distinct applications for Admin, User, Restaurant Owner, and Delivery Personnel. Tools: Next.js, Tailwind CSS, TypeScript.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "yellow-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: fooddelivery,
    source_code_link: "https://github.com/hamzakh86/Food-Delivery",
  },
  {
    name: "Portfolio Website",
    description:
      "Designed a responsive portfolio website using Three.js for 3D models and Framer Motion for interactivity. Ensured performance optimization and cross-device compatibility. Tools: React.js, Three.js, TailwindCSS, Framer Motion.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "framermotion",
        color: "purple-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/hamzakh86/portfolio",
  },
  {
    name: "Chat Application",
    description:
      "Developed a real-time chat application using the MERN stack, featuring online indicators, file uploads/attachments, and auto-scrolling for user messages. Tools: MongoDB, Express.js, React.js, Node.js, WebSockets.",
    tags: [
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    
    ],
    image: chat,
    source_code_link: "https://github.com/hamzakh86/Chat-app",
  },
];

export const certifications = [
  {
    title: "GOMYCODE",
    image: "/assets/certification1.png",
    description: "The Full-Stack Javascript Bootcamp Graduate",
    type: "link",
    link: "https://diploma.gomycode.app/?id=31705411332830853",
  },
  {
    title: "SCRUMstudy",
    image: "/assets/certification8.png",
    description: "Scrum for Ops and DevOps Fundamentals",
    type: "link",
    link: "https://www.scrumstudy.com/certification/verify?type=SODFC&number=1011595",
  },
  {
    title: "Certifprof",
    image: "/assets/certification7.png",
    description: "Scrum Foundation Professional Certificate SFPC (v2020) - English -",
    type: "pdf",
    pdf: "/assets/certification7.pdf",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification2.png",
    description: "Responsive Web Design",
    type: "link",
    link: "https://www.freecodecamp.org/certification/hamzakh06082000/responsive-web-design",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification3.png",
    description: "JavaScript Algorithms and Data Structures (Beta)",
    type: "link",
    link: "https://www.freecodecamp.org/certification/hamzakh06082000/javascript-algorithms-and-data-structures-v8",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification4.png",
    description: "Front End Development Libraries",
    type: "link",
    link: "https://www.freecodecamp.org/certification/hamzakh06082000/front-end-development-libraries",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification5.png",
    description: "Back End Development and APIs",
    type: "link",
    link: "https://www.freecodecamp.org/certification/hamzakh06082000/back-end-development-and-apis",
  },
  {
    title: "Postman",
    image: "/assets/certification6.png",
    description: "Postman API Fundamentals Student Expert",
    type: "link",
    link: "https://badgr.com/backpack/badges/66a41b7a1ea7d93715e019af",
  },
  {
    title: "SCRUMstudy",
    image: "/assets/certification9.png",
    description: "Scrum Fundamentals Certified (SFC)",
    type: "link",
    link: "https://www.scrumstudy.com/certification/verify?type=SFC&number=1036406",
  },
];
export { services, technologies, experiences, testimonials, projects };