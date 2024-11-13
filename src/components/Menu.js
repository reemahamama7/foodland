import React from "react";

const recipes = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    category: "Snack",

    imageUrl: require("../img/menu1.png"), // Use require here
  },
  {
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    time: "30 Minutes",
    category: "Fish",
    imageUrl: require("../img/menu2.png"), // Use require here
  },
  {
    title: "Healthy Japanese Fried Rice with Asparagus",
    time: "30 Minutes",
    category: "Breakfast",

    imageUrl: require("../img/menu3.png"), // Use require here
  },
  {
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    time: "30 Minutes",
    category: "Healthy",

    imageUrl: require("../img/menu4.png"), // Use require here
  },
  {
    title: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
    time: "30 Minutes",
    category: "Meat",

    imageUrl: require("../img/menu5.png"), // Use require here
  },
  {
    title: "Barbeque Spicy Sandwiches with Chips ",
    time: "30 Minutes",
    category: "Meat",

    imageUrl: require("../img/menu6.png"), // Use require here
  },

  {
    title: "Firecracker Vegan Lettuce Wraps - Spicy! ",
    time: "30 Minutes",
    category: "Sweet",

    imageUrl: require("../img/menu7.png"), // Use require here
  },
  {
    title: "Chicken Ramen Soup with Mushroom ",
    time: "30 Minutes",
    category: "Snack",

    imageUrl: require("../img/menu8.png"), // Use require here
  },
];

const RecipeCard = ({ recipe }) => (
  <div className="relative  rounded-larg  overflow-hidden">
    <img src={recipe.imageUrl} alt={recipe.title} className="w-full h-48 object-cover rounded-t-xl" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-black text-left mb-2">{recipe.title}</h3>

      <div className="flex items-center mt-4 text-gray-600 space-x-4">
        <div className="flex items-center space-x-1">
          <span className="material-icons text-black">access_time</span>
          <span>{recipe.time}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="material-icons text-black">restaurant</span>
          <span>{recipe.category}</span>
        </div>
      </div>
    </div>
    <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
      <span className="material-icons text-red-500 flex">favorite_border</span>
    </button>
  </div>
);
const Menu = () => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-6 text-left">
      <h2 className="text-3xl font-bold text-black mb-8 mt-8">Try this delicious recipe to make your day</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  </section>
);

export default Menu;
