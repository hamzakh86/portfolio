import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { navLinks } from "../constants";
import { FaHome, FaUser, FaBriefcase, FaCode, FaComments, FaEnvelope, FaCertificate } from "react-icons/fa";
import { styles } from "../styles";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <aside className={`w-64 h-screen bg-slate-200 text-primary fixed top-0 left-0 overflow-y-auto`}>
      <div className={`${styles.navbarPadding} flex flex-col items-center justify-start h-full`}>
        <div className="flex flex-col items-center mt-4 mb-6">
          <img
            src="/assets/ProfileHamza.jpg"
            alt="Profile"
            className="w-35 h-35 rounded-full object-cover border-2 border-white shadow-lg" 
          />
          <h2 className="text-slate-500 text-[16px] font-bold flex mt-4">Hamza Khaled</h2>
        </div>
        <ul className="space-y-4 w-full text-center">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className="w-full">
              <ScrollLink
                to={nav.id}
                smooth={true}
                duration={500}
                className={`flex items-center justify-start space-x-4 p-2 rounded-lg hover:bg-gray-700 transition duration-300 ${
                  active === nav.title ? "text-white" : "text-secondary"
                }`}
                onClick={() => setActive(nav.title)}
              >
                <span className="text-xl">
                  {index === 0 ? <FaHome /> : index === 1 ? <FaUser /> : index === 2 ? <FaBriefcase /> : index === 3 ? <FaCode /> : index === 4 ? <FaCertificate /> : index === 5 ? <FaComments /> : <FaEnvelope />}
                </span>
                <span className="text-lg">{nav.title}</span>
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;