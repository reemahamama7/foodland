import "./App.css";
import Nav from "./components/Nav";
import rightImage from "./img/Mask3Group.svg";
import Ellipse from "./img/Ellipse.png";
import paper from "./img/paper.png";
import Hero from "./components/Hero";
import Cat from "./components/Cat";
import RecipeList from "./components/RecipeList";
import Hero2 from "./components/Hero2";
import Insta from "./components/Insta";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-blue-50 rounded-larg">
          {/* Left Side - Text and Details */}
          <div className="flex flex-col justify-center p-6 space-y-4">
            <div className="flex  justify-around px-1 py-1 rounded-larg bg-white w-[30%]">
              <img src={paper} /> <span className=" text-black  text-sm font-semibold ">Hot Recipes</span>
            </div>
            <h1 className="text-6xl font-bold text-black leading-snug text-left">Spicy delicious chicken wings</h1>
            <p className="text-gray-500 text-left text-[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.</p>

            {/* Icons for Time and Category */}
            <div className="flex space-x-4 text-gray-600">
              <div className="flex items-center space-x-2  bg-gray-200 text-black px-3 py-1 rounded-larg">
                <span className="material-icons">schedule</span>
                <span>30 Minutes</span>
              </div>
              <div className="flex items-center space-x-2  bg-gray-200 text-black px-3 py-1 rounded-larg">
                <span className="material-icons">restaurant</span>
                <span>Chicken</span>
              </div>
            </div>

            {/* Author Info and Button */}
            <div className="flex justify-between">
              <div className="flex items-center space-x-4 mt-4">
                <img src={Ellipse} alt="Author" className="rounded-full" />
                <div>
                  <p className="text-gray-900 font-medium">John Smith</p>
                  <p className="text-gray-500 text-sm">15 March 2022</p>
                </div>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-xsmall mt-4 font-semibold">View Recipes</button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center">
            <img src={rightImage} alt="Spicy Chicken Wings" className="rounded-lg shadow-lg" />
          </div>
        </section>
      </div>
      <Cat />
      <RecipeList />
      <Hero2 />
      <Insta />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
