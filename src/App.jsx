// src/App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import the Footer component
import { About, Contact, Experience, Feedbacks, Hero, Tech, Works, StarsCanvas, Certifications } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='flex bg-primary'>
        <Sidebar />
        <div className='flex-1 ml-64'>
          <Navbar />
          <Hero />
          <section id='about'>
            <About />
          </section>
          <section id='experience'>
            <Experience />
          </section>
          <section id='tech'>
            <Tech />
          </section>
          <section id='works'>
            <Works />
          </section>
          <section id='certifications'>
            <Certifications />
          </section>
          <section id='feedbacks'>
            <Feedbacks />
          </section>
          <section id='contact'>
            <Contact />
            <StarsCanvas />
          </section>
          <Footer /> {/* Add the Footer component here */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;