import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo, menu, close } from "../assets";
import { navLinks } from "../constants";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaDownload, FaCopy } from "react-icons/fa";
import { GoCheckCircle } from "react-icons/go";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
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
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-8 h-8 object-contain" />
            <p className="text-slate-500 text-[17px] font-bold cursor-pointer flex">
              Hamza Khaled{" "}
              <span className="sm:block hidden"> | Full Stack JS Developer</span>
            </p>
          </Link>
        </div>

        <div className="hidden sm:flex items-center">
          <CopyToClipboard
            text="khaledhamza251785@gmail.com"
            onCopy={handleEmailCopy}
          >
            <span className="text-slate-700 hover:text-primary text-[17px] font-medium cursor-pointer flex items-center gap-3">
              <FaCopy className="text-secondary" />
              khaledhamza251785@gmail.com
            </span>
          </CopyToClipboard>

          <button
            onClick={handleDownloadCV}
            className="bg-[#0080FF] text-white px-4 py-1 rounded-md text-[17px] font-medium cursor-pointer flex items-center gap-2 ml-40 mr-60"
          >
            Download CV <FaDownload className="text-white" />
          </button>
        </div>

        <div className="sm:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        {emailCopied && (
          <span className="text-green-500 text-[14px] flex items-center gap-1 absolute top-16 left-1/2 transform -translate-x-1/2">
            E-mail Copié <GoCheckCircle className="text-green-500" />
          </span>
        )}
      </div>

      {toggle && (
        <div className="sm:hidden absolute top-16 left-0 w-full bg-slate-200 p-4 z-10">
          <div className="flex flex-col items-center">
            <p className="text-slate-500 text-[15px] sm:text-[17px] font-bold text-start break-words">
              Hamza Khaled | Full Stack JS Developer
            </p>

            <CopyToClipboard
              text="khaledhamza251785@gmail.com"
              onCopy={handleEmailCopy}
            >
              <span className="text-slate-700 hover:text-primary text-[15px] sm:text-[17px] font-medium cursor-pointer flex items-start gap-2 mt-2 break-all">
                <FaCopy className="text-secondary" />
                khaledhamza251785@gmail.com
              </span>
            </CopyToClipboard>

            <button
              onClick={handleDownloadCV}
              className="bg-[#0080FF] text-white px-2 py-1 mt-2 rounded-md text-[15px] sm:text-[17px] font-medium flex items-start gap-2"
            >
              Download CV <FaDownload className="text-white" />
            </button>
          </div>

          <ul className="list-none flex flex-col gap-4 mt-4">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="font-medium cursor-pointer text-[18px] text-secondary hover:text-primary"
              >
                <ScrollLink
                  to={nav.id}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  {nav.title}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;