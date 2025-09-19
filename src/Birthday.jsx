// import React, { useState } from "react";
// import Confetti from "react-confetti";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";

// const Birthday = () => {
//   const [showConfetti, setShowConfetti] = useState(true);
//   const navigate = useNavigate();

//   return (
//     <motion.div
//       className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black overflow-hidden"
//       initial={{ opacity: 0, x: 100 }}    // start invisible and slightly right
//       animate={{ opacity: 1, x: 0 }}      // fade in and slide to center
//       exit={{ opacity: 0, x: -100 }}      // fade out and slide left
//       transition={{ duration: 0.8 }}      // duration of animation
//     >
//       <div className="relative flex flex-col items-center justify-center min-h-screen text-center bg-black overflow-hidden">
//         {/* Confetti */}
//         {showConfetti && <Confetti />}

//         {/* Cake Emoji */}
//         <div className="text-7xl mb-6">🎂</div>

//         {/* Heading */}
//         <h1 className="text-4xl font-bold text-purple-300 mb-2">
//           Happy Birthday!
//         </h1>

//         {/* Name */}
//         <h2 className="text-2xl font-semibold text-pink-400 mb-4">
//           CHIKU..❤️
//         </h2>

//         {/* Subtext */}
//         <p className="text-lg text-gray-300 mb-8">
//           🎉 It’s your special day! 🎉
//         </p>

//         {/* Button */}
//         <button
//           onClick={() => navigate("/messages")} // 👈 goes to MessagesPage
//           className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
//         >
//           Continue the Magic →
//         </button>

//         {/* Balloons at bottom */}
//         <div className="absolute bottom-0 flex gap-3 justify-center">
//           <span className="text-5xl">🎈</span>
//           <span className="text-5xl">🎉</span>
//           <span className="text-5xl">🎈</span>
//           <span className="text-5xl">🎉</span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Birthday;
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


const Birthday = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  // Variants for the main container animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  // Variants for each text element
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  useEffect(() => {
    // Stop confetti after a few seconds
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center min-h-screen text-center bg-gray-950 p-6 overflow-hidden font-poppins"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Confetti */}
      {showConfetti && (
        <Confetti
          recycle={false}
          numberOfPieces={400}
          confettiSource={{ x: window.innerWidth / 2, y: -20, w: 0, h: 0 }}
          gravity={0.1}
          initialVelocityY={-5}
          wind={0.01}
        />
      )}

      {/* Background glowing particles effect */}
      <div className="absolute inset-0 z-0 bg-dots"></div>
      <div className="absolute inset-0 z-0 bg-radial-gradient"></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center p-8 rounded-3xl backdrop-blur-md bg-white/5 border border-white/10 shadow-lg max-w-lg mx-auto">
        <motion.div
          className="relative text-7xl mb-6 text-pink-400 animate-fade-in-slow"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 80 }}
        >
          <span className="relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-pink-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10.5C22 17.5 12 22 12 22S2 17.5 2 10.5C2 5.5 6 2 12 2C18 2 22 5.5 22 10.5Z" />
              <path d="M12 6C14.2091 6 16 7.79086 16 10C16 12.2091 14.2091 14 12 14C9.79086 14 8 12.2091 8 10C8 7.79086 9.79086 6 12 6Z" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-pink-500 rounded-full opacity-0 blur-xl animate-pulse-glow"></div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-white mb-2"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Happy Birthday!
        </motion.h1>

        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...textVariants.visible.transition, delay: 0.2 }}
        >
          CHIKU ❤️
        </motion.h2>

        <motion.p
          className="text-lg text-gray-400 mb-8 font-light"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...textVariants.visible.transition, delay: 0.4 }}
        >
          Wishing you a day filled with elegance, grace, and joy.
        </motion.p>

        <motion.button
          onClick={() => navigate("/messages")}
          className="relative px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-2xl transition-transform hover:scale-105"
          variants={textVariants}
          initial="hidden"
          animate="visible"
          transition={{ ...textVariants.visible.transition, delay: 0.6 }}
        >
          <span className="relative z-10">Uncover Your Messages →</span>
          <div className="absolute inset-0 rounded-full opacity-30 bg-purple-400 blur-lg animate-button-glow"></div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Birthday;