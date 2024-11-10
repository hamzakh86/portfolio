import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import heroImage from "../assets/herohamza.png";

const Hero = () => {
  const [role, setRole] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    "A Full Stack JS Developer",
    "Freelancer",
    "Frontend Developer",
    "Full Stack Js",
    "Backend Developer",
    "Mobile Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentRole = roles[currentIndex];
      if (role.length < currentRole.length) {
        setRole(currentRole.slice(0, role.length + 1));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % roles.length);
          setRole("");
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [role, currentIndex, roles]);

  return (
    <section
      className={`relative w-full h-screen mx-auto ${styles.heroBackground}`}
    >
      <div
        className={`absolute inset-0 top-[30px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-center gap-5`}
      >
        <div className="flex-1 flex justify-center items-center order-1 sm:order-2">
          <img
            src={heroImage}
            alt="Hero Hamza"
            className={`${styles.heroImage}`} 
          />
        </div>

        <div className="flex-1 text-center sm:text-left order-2 sm:order-1">
          <h1 className={`${styles.heroHeadText} font-bold text-blue`}>
            <span style={{ color: "rgb(51 65 85 / var(--tw-text-opacity))" }}>
              Hi, I'm
            </span>{" "}
            <span style={{ color: "rgb(100 116 139 / var(--tw-text-opacity))" }}>
              Hamza
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {role.split("").map((letter, index) => (
              <span
                key={index}
                className="letter"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  color: "rgb(71 85 105 / var(--tw-text-opacity))",
                }}
              >
                {letter}
              </span>
            ))}
            <span className="index-module_cursor__PQg0P">|</span>
            <br className="sm:block hidden" />
            <h1
              className={`${styles.heroHeadText} font-bold text-blue`}
              style={{ color: "rgb(51 65 85 / var(--tw-text-opacity))" }}
            >
              From Tunisia
            </h1>
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;