// src/components/Certifications.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaArrowLeft, FaArrowRight, FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { certifications } from "../constants";  

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrev();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handlePrev, handleNext]);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Achievements</p>
        <h2 className={`${styles.sectionHeadText} text-center`} style={{ color: 'rgb(71 85 105 / var(--tw-text-opacity))' }}>Certifications.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-12 relative w-full flex justify-center items-center'
      >
        <button
          onClick={handlePrev}
          className='hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-black-100 text-white p-2 rounded-full hover:bg-black-200 transition duration-300'
        >
          <FaArrowLeft />
        </button>

        <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full'>
          {currentCertifications.map((cert, index) => (
            <div
              key={index}
              className='bg-secondary p-4 rounded-2xl w-full sm:w-1/3 flex flex-col items-center justify-center'
            >
              <img
                src={cert.image}
                alt={cert.title}
                className='w-full h-50 object-cover mb-4'
              />
              <h3 className='text-white text-[20px] font-bold text-center'>{cert.title}</h3>
              <p className='text-text-primary text-[14px] text-center'>{cert.description}</p>
              {cert.type === "link" && cert.link && (
                <div
                  onClick={() => window.open(cert.link, "_blank")}
                  className='mt-4 cursor-pointer text-white hover:text-gray-300 transition duration-300'
                >
                  <FaExternalLinkAlt className='text-2xl' />
                </div>
              )}
              {cert.type === "pdf" && cert.pdf && (
                <div
                  onClick={() => window.open(cert.pdf, "_blank")}
                  className='mt-4 cursor-pointer text-white hover:text-gray-300 transition duration-300'
                >
                  <FaFilePdf className='text-2xl' />
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className='hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-black-100 text-white p-2 rounded-full hover:bg-black-200 transition duration-300'
        >
          <FaArrowRight />
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");