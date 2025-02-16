import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const targetSection = document.getElementById(`${activeSection}-section`);
    if (targetSection) {
      const navbarHeight = 180; // 4rem in pixels
      const targetPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = targetPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-12">
        <div id="about-section">{activeSection === "about" && <About />}</div>
        <div id="skills-section">
          {activeSection === "skills" && <Skills />}
        </div>
        <div id="contact-section">
          {activeSection === "contact" && <Contact />}
        </div>
        <div id="Experience-section">
          <Experience />
        </div>
        <div id="projects-section">
          <Projects />
        </div>
      </main>
      <Footer setActiveSection={setActiveSection} />
    </div>
  );
};

export default App;
