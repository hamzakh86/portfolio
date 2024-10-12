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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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