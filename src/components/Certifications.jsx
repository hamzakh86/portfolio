// src/components/Certifications.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const certifications = [
  {
    title: "GOMYCODE",
    image: "/assets/certification1.png",
    description: "The Full-Stack Javascript Bootcamp Graduate",
  },
  {
    title: "freeCodeCamp",
    image: "/assets/certification2.png",
    description: "Responsive Web Design",
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
    title: "Certifprof",
    image: "/assets/certification7.png",
    description: " Scrum Foundation Professional Certificate SFPC (v2020) - English -",
  },
  {
    title: "SCRUMstudy",
    image: "/assets/certification8.png",
    description: "Scrum for Ops and DevOps Fundamentals",
  },
  {
    title: "SCRUMstudy",
    image: "/assets/certification9.png",
    description: "Scrum Fundamentals Certified (SFC)",
  },
  // Add more certifications as needed
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(certifications.length / 3));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(certifications.length / 3)) % Math.ceil(certifications.length / 3));
  };

  const getCertificationsForPage = (pageIndex) => {
    const startIndex = pageIndex * 3;
    return certifications.slice(startIndex, startIndex + 3);
  };

  const currentCertifications = getCertificationsForPage(currentIndex);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Certifications.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-12 relative w-full flex justify-center items-center'
      >
        <button
          onClick={handlePrev}
          className='absolute left-0 top-1/2 transform -translate-y-1/2 bg-black-100 text-white p-2 rounded-full hover:bg-black-200 transition duration-300'
        >
          <FaArrowLeft />
        </button>

        <div className='flex space-x-4 w-full'>
          {currentCertifications.map((cert, index) => (
            <div
              key={index}
              className='bg-tertiary p-4 rounded-2xl w-1/3 flex flex-col items-center justify-center'
            >
              <img
                src={cert.image}
                alt={cert.title}
                className='w-full h-50 object-cover mb-4'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>{cert.title}</h3>
              <p className='text-secondary text-[14px] text-center'>{cert.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black-100 text-white p-2 rounded-full hover:bg-black-200 transition duration-300'
        >
          <FaArrowRight />
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");