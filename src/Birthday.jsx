import React, { useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Birthday = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black overflow-hidden"
      initial={{ opacity: 0, x: 100 }}    // start invisible and slightly right
      animate={{ opacity: 1, x: 0 }}      // fade in and slide to center
      exit={{ opacity: 0, x: -100 }}      // fade out and slide left
      transition={{ duration: 0.8 }}      // duration of animation
    >
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black overflow-hidden">
        {/* Confetti */}
        {showConfetti && <Confetti />}

        {/* Cake Emoji */}
        <div className="text-7xl mb-6">🎂</div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-purple-300 mb-2">
          Happy Birthday!
        </h1>

        {/* Name */}
        <h2 className="text-2xl font-semibold text-pink-400 mb-4">
          CHIKU..❤️
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-300 mb-8">
          🎉 It’s your special day! 🎉
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/messages")} // 👈 goes to MessagesPage
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Continue the Magic →
        </button>

        {/* Balloons at bottom */}
        <div className="absolute bottom-0 flex gap-3 justify-center">
          <span className="text-5xl">🎈</span>
          <span className="text-5xl">🎉</span>
          <span className="text-5xl">🎈</span>
          <span className="text-5xl">🎉</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Birthday;
