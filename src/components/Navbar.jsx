import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const buttonStyle =
    "px-4 py-2 border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-x-[2px] active:translate-y-[2px] transition-all";

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "timeline", label: "Timeline" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleMinimize = () => {
    setIsMinimized(true);
    document.documentElement.style.transform = "scale(0.1)";
    document.documentElement.style.transition = "transform 0.3s ease";
    setTimeout(() => {
      document.documentElement.style.transform = "scale(1)";
      setIsMinimized(false);
    }, 300);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => setIsFullscreen(true))
        .catch((err) => console.log(err));
    } else {
      document
        .exitFullscreen()
        .then(() => setIsFullscreen(false))
        .catch((err) => console.log(err));
    }
  };

  const handleClose = () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.3s ease";
    setTimeout(() => {
      window.location.href = "about:blank";
    }, 300);
  };

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Title Bar */}
      <div className="bg-blue-900 p-2 flex items-center justify-between border-b border-blue-700">
        <div className="flex items-center gap-2">
          <Menu className="w-4 h-4" />
          <span>Portfolio.exe</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleMinimize}
            className="hover:bg-blue-800 p-1 border border-white/20 min-w-[24px]"
          >
            _
          </button>
          <button
            onClick={handleFullscreen}
            className="hover:bg-blue-800 p-1 border border-white/20 min-w-[24px]"
          >
            {isFullscreen ? "❐" : "□"}
          </button>
          <button
            onClick={handleClose}
            className="hover:bg-red-600 p-1 border border-white/20 min-w-[24px]"
          >
            ×
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-gray-200 text-black p-4 border-b-4 border-gray-400">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex gap-4">
              {menuItems.slice(0, 3).map((item) => (
                <button
                  key={item.id}
                  className={`${buttonStyle} ${
                    activeSection === item.id
                      ? "bg-blue-200"
                      : "bg-gray-100 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSectionClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className={`text-xl font-bold px-6 py-2 bg-gray-800 text-white border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] active:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)] active:translate-x-[2px] active:translate-y-[2px] transition-all`}
            >
              KARAN
            </button>

            <div className="flex gap-4">
              {menuItems.slice(3).map((item) => (
                <button
                  key={item.id}
                  className={`${buttonStyle} ${
                    activeSection === item.id
                      ? "bg-blue-200"
                      : "bg-gray-100 hover:bg-gray-300"
                  }`}
                  onClick={() => handleSectionClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`${buttonStyle} w-full text-left ${
                  activeSection === item.id
                    ? "bg-blue-200"
                    : "bg-gray-100 hover:bg-gray-300"
                }`}
                onClick={() => handleSectionClick(item.id)}
              >
                {item.label}
              </button>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonStyle} w-full text-left bg-gray-100 hover:bg-gray-300 block`}
            >
              Resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;