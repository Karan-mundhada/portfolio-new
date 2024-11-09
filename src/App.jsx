// App.js
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Contact } from "./components/sections/Contact";
import { Timeline } from "./components/sections/Timeline";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="bg-gray-800 min-h-screen text-white font-mono">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="p-6 max-w-6xl mx-auto">
        {activeSection === "about" && <About />}
        {activeSection === "skills" && <Skills />}
        {activeSection === "contact" && <Contact />}
        <Timeline />
      </main>

      <Footer />
    </div>
  );
};

export default App;
