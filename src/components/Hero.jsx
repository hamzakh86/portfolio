import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  const [role, setRole] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const roles = [
    'A Full Stack JS Developer',
    'Freelancer',
    'Open Source Enthusiast',
    'Full Stack Js',
    'Learning In Public'
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
          setRole('');
        }, 1000);  
      }
    }, 100);  

    return () => clearInterval(interval);
  }, [role, currentIndex, roles]);

  return (
    <section className={`relative w-full h-screen mx-auto hero-background bg-f1f5f1`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#0080FF]' />
          <div className='w-1 sm:h-80 h-40 bleu-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} font-bold text-black`}>
            Hi, I'm <span className='text-slate-500'>Hamza</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-slate-600`}>
            {role.split('').map((letter, index) => (
              <span
                key={index}
                className="letter"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
            <span className="index-module_cursor__PQg0P">|</span>
            <br className='sm:block hidden' />
            <h1 className={`${styles.heroHeadText} font-bold text-black`}>
              From Tunisia
            </h1>
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;