// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import logo from "../img/Foodieland.svg";
// import facebook from "../img/facebook.svg";
// import ins from "../img/instagram.svg";
// import twitt from "../img/twitter.svg";

// function Nav() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <nav className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex gap-x-7 items-center justify-between h-16">
//             <div className="flex items-center">
//               <div className="flex-shrink-0">
//                 <img className="" src={logo} alt="Workflow" />
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-80 flex items-baseline space-x-4">
//                   <a href="#" className=" hover:bg-gray-700 text-black px-2  py-2 rounded-md text-sm font-medium">
//                     Home
//                   </a>

//                   <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-2  py-2 rounded-md text-sm font-medium">
//                     Recipes
//                   </a>

//                   <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">
//                     Blog
//                   </a>

//                   <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium">
//                     Contact
//                   </a>

//                   <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-2  py-2 rounded-md text-sm font-medium">
//                     About us
//                   </a>
//                 </div>
//               </div>
//               <div className="hidden md:block">
//                 <div className="ml-80 flex items-baseline space-x-4 flex-shrink-3">
//                   <img src={facebook} />
//                   <img src={ins} />
//                   <img src={twitt} />
//                 </div>
//               </div>
//             </div>
//             <div className="-mr-2 flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 ) : (
//                   <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition show={isOpen} enter="transition ease-out duration-100 transform" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-75 transform" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
//           {(ref) => (
//             <div className="md:hidden" id="mobile-menu">
//               <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <a href="#" className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium">
//                   Home
//                 </a>

//                 <a href="#" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                   Recipes
//                 </a>

//                 <a href="#" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                   Blog
//                 </a>

//                 <a href="#" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                   Contact US
//                 </a>

//                 <a href="#" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
//                   About US
//                 </a>
//               </div>
//             </div>
//           )}
//         </Transition>
//       </nav>

//     </div>
//   );
// }

// export default Nav;
import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // For hamburger menu icons
import logo from "../img/Foodieland.svg";
import facebook from "../img/facebook.svg";
import ins from "../img/instagram.svg";
import twitt from "../img/twitter.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-14 border-b border-gray-200 h-16">
      {/* Logo */}
      {/* <div className="text-2xl font-semibold">Foodieland</div> */}
      <img className="" src={logo} alt="Workflow" />
      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li className="hover:text-black cursor-pointer font-bold">Home</li>
        <li className="hover:text-black cursor-pointer font-bold">Recipes</li>
        <li className="hover:text-black cursor-pointer font-bold">Blog</li>
        <li className="hover:text-black cursor-pointer font-bold">Contact</li>
        <li className="hover:text-black cursor-pointer font-bold">About us</li>
      </ul>

      {/* Social Media Icons (Desktop) */}
      <div className="hidden md:flex space-x-4 text-gray-700">
        <img src={facebook} />
        <img src={ins} />
        <img src={twitt} />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>{isOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}</button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-700">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Recipes</li>
            <li className="hover:text-black cursor-pointer">Blog</li>
            <li className="hover:text-black cursor-pointer">Contact</li>
            <li className="hover:text-black cursor-pointer">About us</li>
          </ul>
          <div className="flex justify-center space-x-4 pb-4 text-gray-700">
            <FaFacebookF className="hover:text-black cursor-pointer" />
            <FaTwitter className="hover:text-black cursor-pointer" />
            <FaInstagram className="hover:text-black cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
