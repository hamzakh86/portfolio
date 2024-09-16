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
    link.href = "/assets/CVHamza.pdf"; // Static path to the PDF file
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
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-start items-Start'>
        <div className='flex items-Start gap-20'>
          <Link
            to='/'
            className='flex items-center gap-2'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
            <p className='text-white text-[18px] font-bold cursor-pointer flex '>
              Hamza Khaled &nbsp;
              <span className='sm:block hidden'> | Full Stack JS Developer</span>
            </p>
          </Link>

          <CopyToClipboard text="khaledhamza251785@gmail.com" onCopy={handleEmailCopy}>
            <span className='text-secondary hover:text-white text-[18px] font-medium cursor-pointer flex items-center gap-2'>
              <FaCopy className='text-secondary' />
              khaledhamza251785@gmail.com
            </span>
          </CopyToClipboard>

          <button
            onClick={handleDownloadCV}
            className='bg-[#0080FF] text-white px-4 py-2 rounded-md text-[18px] font-medium cursor-pointer flex items-center gap-2'
          >
            Download CV <FaDownload className='text-white' />
          </button>
        </div>

        {emailCopied && (
          <span className='text-green-500 text-[14px] flex items-center gap-1 absolute top-20 left-1/2 transform -translate-x-1/2'>
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
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              <li className='font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white'>
                <CopyToClipboard text="khaledhamza251785@gmail.com" onCopy={handleEmailCopy}>
                  <span className='cursor-pointer flex items-center gap-2'>
                    <FaCopy className='text-secondary' />
                    khaledhamza251785@gmail.com
                  </span>
                </CopyToClipboard>
              </li>
              <li className='font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-white'>
                <button onClick={handleDownloadCV} className='bg-[#0080FF] text-white px-4 py-2 rounded-md flex items-center gap-2'>
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