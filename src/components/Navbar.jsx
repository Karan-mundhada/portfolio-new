import React, { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const buttonStyle =
    "px-4 py-2 border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-x-[2px] active:translate-y-[2px] transition-all";

  // Handle minimize
  const handleMinimize = () => {
    setIsMinimized(true);
    // Animate the window to minimize
    document.documentElement.style.transform = "scale(0.1)";
    document.documentElement.style.transition = "transform 0.3s ease";

    // Restore after animation
    setTimeout(() => {
      document.documentElement.style.transform = "scale(1)";
      setIsMinimized(false);
    }, 300);
  };

  // Handle fullscreen
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          setIsFullscreen(true);
        })
        .catch((err) => {
          console.log(`Error attempting to enable fullscreen: ${err.message}`);
        });
    } else {
      document
        .exitFullscreen()
        .then(() => {
          setIsFullscreen(false);
        })
        .catch((err) => {
          console.log(`Error attempting to exit fullscreen: ${err.message}`);
        });
    }
  };

  // Handle close
  const handleClose = () => {
    // Add a fade-out effect
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.3s ease";

    // After animation, close the window or redirect
    setTimeout(() => {
      window.close(); // Try to close the window
      // If window.close() doesn't work (most modern browsers prevent it),
      // redirect to a blank page or your preferred destination
      window.location.href = "about:blank";
    }, 300);
  };

  return (
    <>
      {/* Title Bar */}
      <div className="bg-blue-900 p-2 flex items-center justify-between border-b border-blue-700">
        <div className="flex items-center gap-2">
          <Menu className="w-4 h-4" />
          <span>Portfolio.exe</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleMinimize}
            className="hover:bg-blue-800 p-1 border border-white/20 min-w-[24px] flex items-center justify-center focus:outline-none"
            title="Minimize"
          >
            _
          </button>
          <button
            onClick={handleFullscreen}
            className="hover:bg-blue-800 p-1 border border-white/20 min-w-[24px] flex items-center justify-center focus:outline-none"
            title="Toggle Fullscreen"
          >
            {isFullscreen ? "❐" : "□"}
          </button>
          <button
            onClick={handleClose}
            className="hover:bg-red-600 p-1 border border-white/20 min-w-[24px] flex items-center justify-center focus:outline-none"
            title="Close"
          >
            ×
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-200 text-black p-4 flex items-center justify-between border-b-4 border-gray-400">
        <div className="flex gap-4">
          <button
            className={`${buttonStyle} ${
              activeSection === "about"
                ? "bg-blue-200"
                : "bg-gray-100 hover:bg-gray-300"
            }`}
            onClick={() => setActiveSection("about")}
          >
            About
          </button>
          <button
            className={`${buttonStyle} ${
              activeSection === "skills"
                ? "bg-blue-200"
                : "bg-gray-100 hover:bg-gray-300"
            }`}
            onClick={() => setActiveSection("skills")}
          >
            Skills
          </button>
        </div>

        <button
          href="#"
          className={`text-xl font-bold px-6 py-2 bg-gray-800 text-white border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-x-[2px] active:translate-y-[2px] transition-all`}
        >
          KARAN
        </button>

        <div className="flex gap-4">
          <button
            className={`${buttonStyle} ${
              activeSection === "contact"
                ? "bg-blue-200"
                : "bg-gray-100 hover:bg-gray-300"
            }`}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </button>
          <a
            href="https://drive.google.com/file/d/10NMeYhkFNE8FYOc137vcLmGlIiUjqHtQ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonStyle} bg-gray-100 hover:bg-gray-300`}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
