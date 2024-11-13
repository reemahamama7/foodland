import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; // <-- Add this line

const Insta = () => {
  // Dummy data for Instagram posts
  const posts = [
    {
      imageUrl: require("../img/insta1.png"),
      caption: "Delicious salad to start your day!",
      likes: "1,235 likes",
      comments: "View all 12 comments",
    },
    {
      imageUrl: require("../img/insta5.png"),
      caption: "Pancakes with honey syrup 🍯",
      likes: "980 likes",
      comments: "View all 8 comments",
    },
    {
      imageUrl: require("../img/insta3.png"),
      caption: "Fresh herbs to elevate your dishes 🌿",
      likes: "820 likes",
      comments: "View all 5 comments",
    },
    {
      imageUrl: require("../img/insta4.png"),
      caption: "Perfectly cooked steak 🥩",
      likes: "1,452 likes",
      comments: "View all 16 comments",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#E7F9FD]">
      <div className="text-center mb-8 w-[67%] justify-self-center">
        <h2 className="text-3xl font-bold">Check out @foodieland on Instagram</h2>
        <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-24">
        {posts.map((post, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={post.imageUrl} alt="Instagram post" className="w-full h-48 object-cover" />

            {/* Icons Row */}
            <div className="flex justify-between items-center px-4 py-2">
              <div className="flex space-x-4">
                <FontAwesomeIcon icon={faHeart} className="text-gray-600 hover:text-red-500 cursor-pointer" />
                <FontAwesomeIcon icon={faComment} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
              </div>
              <FontAwesomeIcon icon={faBookmark} className="text-gray-600 hover:text-gray-800 cursor-pointer" />
            </div>
            <div className="flex items-center text-black text-sm mb-2 px-4 py-2 text-left">
              {/* <FontAwesomeIcon icon={faHeart} className="text-red-500 mr-2" /> */}
              <span>
                Liked by <span className="font-semibold">craig_love</span> {post.likes}
              </span>
            </div>
            {/* Post Content */}
            <div className="px-4 pb-4">
              {/* <p className="text-gray-700 font-semibold">{post.likes}</p> */}
              <p className="text-black text-left mt-1">{post.caption}</p>
              <p className="text-sm text-black text-left mt-2">{post.comments}</p>
            </div>
            <div className="px-4 py-2 text-xs text-black text-left">September 19</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-black text-white px-6 py-3 rounded-larg flex items-center space-x-2">
          <span>Visit Our Instagram</span>
          <FontAwesomeIcon icon={faInstagram} />
        </button>
      </div>
    </section>
  );
};

export default Insta;
