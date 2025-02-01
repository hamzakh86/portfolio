import React, { useState, useEffect } from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <ParallaxTilt
        tiltMaxAngleX={45}
        tiltMaxAngleY={45}
        scale={1}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[350px]"
      >
        <div className="relative w-full h-[180px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-[12px] text-gris-works">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[12px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};

const Works = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(projects.length / 3));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(projects.length / 3)) % Math.ceil(projects.length / 3));
  };

  const getProjectsForPage = (pageIndex) => {
    const startIndex = pageIndex * 3;
    return projects.slice(startIndex, startIndex + 3);
  };

  const currentProjects = getProjectsForPage(currentIndex);

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
        <p className={`${styles.sectionSubText} text-center`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-center`} style={{ color: "rgb(71 85 105 / var(--tw-text-opacity))" }}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through real-world examples of my work. Each project is
          briefly described with links to code repositories and live demos. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-12 relative w-full flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-14 bg-black-100 text-white p-3 rounded-full shadow-lg hover:bg-black-200 transition duration-300 hover:shadow-xl"
        >
          <FaArrowLeft className="text-xl" />
        </button>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full">
          {currentProjects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1 bg-black-100 text-white p-3 rounded-full shadow-lg hover:bg-black-200 transition duration-300 hover:shadow-xl"
        >
          <FaArrowRight className="text-xl" />
        </button>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "");
