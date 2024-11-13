import React from "react";

const recipes = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    time: "30 Minutes",
    category: "Snack",

    imageUrl: require("../img/humburger.png"), // Use require here
  },
  {
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    time: "30 Minutes",
    category: "Fish",
    imageUrl: require("../img/fish.png"), // Use require here
  },
  {
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    time: "30 Minutes",
    category: "Breakfast",

    imageUrl: require("../img/strawberry.png"), // Use require here
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    time: "30 Minutes",
    category: "Healthy",

    imageUrl: require("../img/fresh.png"), // Use require here
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    time: "30 Minutes",
    category: "Meat",

    imageUrl: require("../img/meat.png"), // Use require here
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    time: "30 Minutes",
    category: "Meat",

    imageUrl: require("../img/meat.png"), // Use require here
  },

  {
    title: "Fruity Pancake with Orange & Blueberry",
    time: "30 Minutes",
    category: "Sweet",

    imageUrl: require("../img/fruity.png"), // Use require here
  },
  {
    title: "The Best Easy One Pot Chicken and Rice",
    time: "30 Minutes",
    category: "Snack",

    imageUrl: require("../img/pot.png"), // Use require here
  },
  {
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    time: "30 Minutes",
    category: "Noodles",

    imageUrl: require("../img/pasta.png"), // Use require here
  },
];

const RecipeCard = ({ recipe }) => (
  <div className="relative  rounded-larg shadow-md overflow-hidden" style={{ background: "linear-gradient(180deg, rgba(231, 249, 253, 0) 0%, #E7F9FD 100%)" }}>
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

const RecipeList = () => (
  <section className="py-12">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple and tasty recipes</h2>
      <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </div>
  </section>
);

export default RecipeList;
