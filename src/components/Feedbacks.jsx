//src/components/Feedbacks.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", 0.5, 0.75)}
    className='bg-black-200 p-6 rounded-3xl w-full sm:w-[700px] mx-auto relative'
    style={{ minHeight: '300px' }} 
  >
    <p className='text-white font-black text-[40px]'>"</p>

    <div className='mt-1'>
      <p className='text-white tracking-wider text-[16px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-white font-medium text-[14px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[10px]'>
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by_${name}`}
          className='w-8 h-8 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mt-12 bg-black-100 rounded-[20px] relative overflow-hidden">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[200px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`-mt-10 pb-12 ${styles.paddingX} flex flex-col items-center`}>
        {isMobile ? (
          testimonials.map((testimonial, index) => (
            <div key={index} className="mb-4 w-full">
              <FeedbackCard {...testimonial} />
            </div>
          ))
        ) : (
          <FeedbackCard {...testimonials[currentIndex]} />
        )}
      </div>

      {!isMobile && (
        <>
          <div
            onClick={handlePrev}
            className="absolute left-40 top-[60%] transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full cursor-pointer hover:bg-gray-500"
          >
            <FaArrowLeft size={20} />
          </div>

          <div
            onClick={handleNext}
            className="absolute right-40 top-[60%] transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full cursor-pointer hover:bg-gray-500"
          >
            <FaArrowRight size={20} />
          </div>
        </>
      )}
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
