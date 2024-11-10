import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GoCheckCircle } from "react-icons/go";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailCopy = () => {
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <footer className="bg-slate-200 text-primary py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <CopyToClipboard text="khaledhamza251785@gmail.com" onCopy={handleEmailCopy}>
            <div className="cursor-pointer text-slate-700 hover:text-blue-500 transition-colors duration-300 flex flex-col md:flex-row items-start md:items-center gap-2">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-2xl" />
                <h1 className="text-lg font-semibold">Email :</h1>
              </div>
              <span className="text-lg break-all">khaledhamza251785@gmail.com</span>
            </div>
          </CopyToClipboard>
          {emailCopied && (
            <div className="text-green-500 text-sm flex items-center gap-1">
              Email Copié <GoCheckCircle className="text-green-500" />
            </div>
          )}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
          <h3 className="text-lg font-bold text-slate-500">Socials</h3>
          <div className="flex space-x-6 text-slate-500">
            <a href="https://www.linkedin.com/in/hamza-khaled-16a114290/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/hamzakh86" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/hamzakhaled1111111/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.facebook.com/hamzakhaled1111111/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition duration-300">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-300 pt-4 text-center">
        <p className="text-sm text-secondary">&copy; 2024 Hamza Khaled. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
