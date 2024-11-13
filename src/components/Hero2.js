import chefImage from "../img/chef.png"; // Path to the chef image

const Hero2 = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-white p-6">
      <div className="flex max-w-5xl mx-auto bg-gradient-to-br from-white to-[#E7F9FD] rounded-[30px] p-8">
        {/* Text Section */}
        <div className="flex-1 text-left">
          <h2 className="text-4xl font-bold mb-4 leading-snug">Everyone can be a chef in their own kitchen</h2>
          <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="bg-black text-white px-6 py-2 rounded-xsmall">Learn More</button>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 flex justify-center items-center">
          <img src={chefImage} alt="Chef" className="w-[300px] h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
