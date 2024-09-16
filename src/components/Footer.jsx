// src/components/Footer.jsx
import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { GoCheckCircle } from "react-icons/go";

const Footer = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleEmailCopy = () => {
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Clear form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-xl font-bold mb-4">Contact Me</h3>
          <p className="text-sm text-gray-400 mb-6">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want to run past me.
          </p>
          <div className="flex flex-col items-center md:items-start">
            <CopyToClipboard text="khaledhamza251785@gmail.com" onCopy={handleEmailCopy}>
              <span className="text-white hover:text-blue-500 cursor-pointer flex flex-col items-center md:items-start">
                <h1>Email me at</h1>
                <span className="flex items-center gap-2">
                  <FaEnvelope className="text-2xl" />
                  khaledhamza251785@gmail.com
                </span>
              </span>
            </CopyToClipboard>
            {emailCopied && (
              <span className="text-green-500 text-[14px] flex items-center gap-1 absolute bottom-20 left-1/2 transform -translate-x-1/2">
                E-mail Copiée <GoCheckCircle className="text-green-500" />
              </span>
            )}
          </div>
          <h3 className="text-xl font-bold mb-4 mt-6">Socials</h3>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/hamza-khaled-16a114290/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaLinkedin className="text-2xl" />
            </a>
            <a href="https://github.com/hamzakh86" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaGithub className="text-2xl" />
            </a>
            <a href="https://www.instagram.com/hamzakhaled1111111/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://www.facebook.com/hamzakhaled1111111/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
              <FaFacebook className="text-2xl" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-start md:col-span-2">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="bg-gray-800 text-white w-full p-2 rounded-md outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="bg-gray-800 text-white w-full p-2 rounded-md outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="4"
                className="bg-gray-800 text-white w-full p-2 rounded-md outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Hamza Khaled. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;