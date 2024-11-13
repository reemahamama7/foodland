// const Contact = () => {
//   return (
//     <>
//       <section className="max-w-7xl mx-auto p-10 sm:px-6 lg:px-8 rounded-xlarg" style={{ background: "#E7F9FD" }}>
//         <div className="text-center grid gap-5 py-8 px-56">
//           <h1 className="text-black font-bold text-5xl text-left">Deliciousness to your inbox</h1>
//           <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
//           <div className="flex items-center max-w-md mx-auto border rounded-lg overflow-hidden">
//             <input type="email" placeholder="Enter your email" className="w-full p-3 text-gray-700 focus:outline-none" />
//             <button className="bg-black text-white px-4 py-2 font-semibold">Subscribe</button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
// export default Contact;
import React from "react";
import saladImg from "../img/salad.png"; // Replace with your actual image path
import veggiesImg from "../img/veggies.png"; // Replace with your actual image path

const Contact = () => {
  return (
    <div className="relative bg-blue-50 rounded-xlarg p-44 max-w-7xl mx-auto my-10 text-center shadow-lg">
      {/* Rotated Images */}
      <img src={saladImg} alt="Veggies" className="absolute left-[24px] bottom-[42px] transform -translate-x-10 -rotate-6" />
      <img src={veggiesImg} alt="Salad" className="absolute right-0 bottom-0 transform translate-x-0 -rotate-0 rounded-br-larg" />

      {/* Subscription Content */}
      <h2 className="text-2xl font-bold mb-4">Deliciousness to your inbox</h2>
      <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.</p>

      {/* Input with Subscribe Button */}
      <div className="flex items-center max-w-md mx-auto border rounded-xsmall overflow-hidden">
        <input type="email" placeholder="Your email address..." className="w-full p-3 pl-5 text-gray-700 focus:outline-none" />
        <button className="bg-black text-white px-6 py-3 font-semibold rounded-xsmall me-[60px]">Subscribe</button>
      </div>
    </div>
  );
};

export default Contact;
