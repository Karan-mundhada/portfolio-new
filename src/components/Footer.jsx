// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t-4 border-gray-700 p-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div className="bg-gray-700 p-4 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] break-words">
            <h3 className="text-green-400 font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-700 p-4 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] break-words">
            <h3 className="text-green-400 font-bold mb-2">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="break-words">Email: karanmundhada@engineer.com</li>
              <li>Location: Pune, India</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="bg-gray-700 p-4 rounded border-2 border-gray-600 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] break-words">
            <h3 className="text-green-400 font-bold mb-2">Connect</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Karan-mundhada"
                className="text-gray-300 hover:text-white break-words"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/karan-mundhada-075b071b7/"
                className="text-gray-300 hover:text-white break-words"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white break-words"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 pt-4 border-t border-gray-700 text-gray-400 break-words">
          © {new Date().getFullYear()} Karan Mundhada. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
