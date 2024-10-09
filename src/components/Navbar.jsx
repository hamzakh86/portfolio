// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaDownload, FaCopy } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/assets/CVHamza.pdf";  
    link.download = "CVHamza.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmailCopy = () => {
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <nav
      className={`${styles.paddingX} pt-4 w-full flex items-center py-2 fixed top-0 z-20 ${
        scrolled ? "bg-slate-200" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-start items-start'>
        <div className='flex items-start gap-12'>
          <Link
            to='/'
            className='flex items-center gap-3'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-8 h-8 object-contain' />
            <p className='text-primary text-[17px] font-bold cursor-pointer flex '>
              Hamza Khaled &nbsp;
              <span className='sm:block hidden'> | Full Stack JS Developer</span>
            </p>
          </Link>

          <CopyToClipboard text="khaledhamza251785@gmail.com" onCopy={handleEmailCopy}>
            <span className='text-secondary hover:text-primary text-[17px] font-medium cursor-pointer flex items-center gap-3 ml-20'>
              <FaCopy className='text-secondary' />
              khaledhamza251785@gmail.com
            </span>
          </CopyToClipboard>

          <button
            onClick={handleDownloadCV}
            className='bg-[#0080FF] text-white px-4 py-1 rounded-md text-[17px] font-medium cursor-pointer flex items-center gap-6 ml-20 '
          >
            Download CV <FaDownload className='text-white' />
          </button>
        </div>

        {emailCopied && (
          <span className='text-green-500 text-[14px] flex items-center gap-1 absolute top-16 left-1/2 transform -translate-x-1/2'>
            E-mail Copiée <GoCheckCircle className='text-green-500' />
          </span>
        )}

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-4 bg-slate-200 absolute top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              <li className='font-poppins font-medium cursor-pointer text-[18px] text-secondary hover:text-primary'>
                <CopyToClipboard text="khaledhamza251785@gmail.com" onCopy={handleEmailCopy}>
                  <span className='cursor-pointer flex items-center gap-3'>
                    <FaCopy className='text-secondary' />
                    khaledhamza251785@gmail.com
                  </span>
                </CopyToClipboard>
              </li>
              <li className='font-poppins font-medium cursor-pointer text-[18px] text-secondary hover:text-primary'>
                <button onClick={handleDownloadCV} className='bg-[#0080FF] text-white px-4 py-2 rounded-md flex items-center gap-3'>
                  Download CV <FaDownload className='text-white' />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;