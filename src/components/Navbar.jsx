import React from 'react';
import logo from "../assets/anmollogo.png";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo"style={{ width: '70px', height: 'auto' }} />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/anmol-singh-cs" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="transition duration-300 ease-in-out transform hover:text-blue-600 hover:scale-110" />
        </a>
        <a href="https://github.com/anmolsingh2199" target="_blank" rel="noopener noreferrer">
          <FaGithub className="transition duration-300 ease-in-out transform hover:text-red-600 hover:scale-110" />
        </a>
        <a href="https://www.instagram.com/anmolsingh.77/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="transition duration-300 ease-in-out transform hover:text-pink-600 hover:scale-110" />
        </a>
        
        <a href="tel:(559) 371-3889">
          <FaPhoneAlt className="transition duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-110" />
        </a>
        <a href="mailto:anmolsingh2199@gmail.com">
          <FaEnvelope className="transition duration-300 ease-in-out transform hover:text-green-400 hover:scale-110" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
