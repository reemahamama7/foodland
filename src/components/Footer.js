import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../img/Foodieland.svg";
import facebook from "../img/facebook.svg";
import ins from "../img/instagram.svg";
import twitt from "../img/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-white  py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center border-b border-gray-200">
        {/* Left Section: Logo and Description */}
        <div className="mb-4 md:mb-0 text-left">
          <img className="" src={logo} alt="Workflow" />
          {/* <h2 className="text-lg font-semibold italic">Foodieland.</h2> */}
          <p className="text-gray-500 text-sm mt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="flex space-x-6 mb-4 md:mb-0">
          <a href="#recipes" className="text-black hover:text-blue-400">
            Recipes
          </a>
          <a href="#blog" className="text-black hover:text-blue-400">
            Blog
          </a>
          <a href="#contact" className="text-black hover:text-blue-400">
            Contact
          </a>
          <a href="#about" className="text-black hover:text-blue-400">
            About us
          </a>
        </nav>

        {/* Right Section: Social Icons */}
        {/* <div className="flex space-x-4">
          <FaFacebook className="text-gray-600 hover:text-black cursor-pointer" />
          <FaTwitter className="text-gray-600 hover:text-black cursor-pointer" />
          <FaInstagram className="text-gray-600 hover:text-black cursor-pointer" />
        </div> */}
      </div>

      {/* Bottom Section: Copyright */}
      <div className="container mx-auto px-4 text-center text-gray-500 text-sm mt-6 flex flex-col md:flex-row justify-between items-center">
        <div></div>
        <p>
          {" "}
          © 2020 Flowbase. Powered by <span className="text-red-500">Webflow</span>
        </p>
        <div className="flex space-x-4">
          <img src={facebook} />
          <img src={ins} />
          <img src={twitt} />
          {/* <FaFacebook className="text-gray-600 hover:text-black cursor-pointer" />
          <FaTwitter className="text-gray-600 hover:text-black cursor-pointer" />
          <FaInstagram className="text-gray-600 hover:text-black cursor-pointer" /> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
