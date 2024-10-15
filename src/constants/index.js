// src/constants/index.js
import {
  mobile,
  backend,
  Front,
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
  car,
  ecomerce,
  realestateimg,
  threejs,
} from "../assets";
import sabrine from "../assets/testimonials/sabrine.jpg";
import amine from "../assets/testimonials/amine.jpg";
import sarah from "../assets/testimonials/sarah.jpg";


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
    icon: Front,
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
    name: "Car Showcase",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce Website",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: ecomerce,
    source_code_link: "https://github.com/",
  },
  {
    name: "A Modern Real Estate",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: realestateimg,
    source_code_link: "https://github.com/",
  },
  {
    name: " Food Delivery",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: fooddelivery,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chat Application",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/",
  },
];

export const certifications = [
  {
    title: "GOMYCODE",
    image: "/assets/certification1.png",
    description: "The Full-Stack Javascript Bootcamp Graduate",
  },
  {
    title: "SCRUMstudy",
    image: "/assets/certification8.png",
    description: "Scrum for Ops and DevOps Fundamentals",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification2.png",
    description: "Responsive Web Design",
  },
  {
    title: "Certifprof",
    image: "/assets/certification7.png",
    description: "Scrum Foundation Professional Certificate SFPC (v2020) - English -",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification3.png",
    description: "JavaScript Algorithms and Data Structures (Beta)",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification4.png",
    description: "Front End Development Libraries",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification5.png",
    description: "Back End Development and APIs",
  },
  {
    title: "Postman",
    image: "/assets/certification6.png",
    description: "Postman API Fundamentals Student Expert",
  },
  {
    title: "SCRUMstudy",
    image: "/assets/certification9.png",
    description: "Scrum Fundamentals Certified (SFC)",
  },
];

export { services, technologies, experiences, testimonials, projects };