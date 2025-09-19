
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// const MessagesPage = () => {
//   const messages = [
//     {
//       title: "Dream Big ✨",
//       text: "May all your dreams come true and your year be filled with magic and wonder!",
//     },
//     {
//       title: "Stay Happy 💕",
//       text: "Your smile lights up the world — never stop shining bright!",
//     },
//     {
//       title: "You’re Special 🌸",
//       text: "Always remember, you’re loved more than words can say.",
//     },
//   ];

//   const [current, setCurrent] = useState(-1);
//   const navigate = useNavigate();

//   const handleOpenMessage = () => {
//     if (current < messages.length - 1) {
//       setCurrent(current + 1);
//     }
//   };

//   // Variants for page transition
//   const pageVariants = {
//     initial: { opacity: 0, x: 100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -100 },
//   };

//   // Variants for message card animation
//   const messageVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center min-h-screen bg-black text-center relative overflow-hidden"
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={pageVariants}
//       transition={{ duration: 0.8, ease: "easeInOut" }}
//     >
//       {/* Heading */}
//       <div className="mb-8">
//         <motion.div
//           className="text-6xl mb-4"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           💌
//         </motion.div>
//         <motion.h1
//           className="text-3xl font-bold text-pink-400 mb-2"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           Special Messages
//         </motion.h1>
//         <motion.p
//           className="text-lg text-purple-300"
//           initial={{ y: -20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         >
//           For Madam Jii 🇯🇵
//         </motion.p>
//       </div>

//       {/* Show current message if opened */}
//       <AnimatePresence>
//         {current >= 0 && (
//           <motion.div
//             key={current}
//             className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-2xl shadow-lg w-72 p-6 mb-6"
//             variants={messageVariants}
//             initial="hidden"
//             animate="visible"
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-xl font-bold mb-2">{messages[current].title}</h2>
//             <p>{messages[current].text}</p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Message Card (tap area) */}
//       <motion.div
//         onClick={handleOpenMessage}
//         className="cursor-pointer bg-gradient-to-r from-pink-200 to-pink-100 rounded-2xl shadow-lg w-72 p-6 mb-10"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         {current < messages.length - 1 ? (
//           current === -1 ? (
//             <p className="text-pink-600 font-medium">
//               ❤️ Tap to open your first message
//             </p>
//           ) : (
//             <p className="text-pink-600 font-medium">
//               {messages.length - (current + 1)} messages remaining
//             </p>
//           )
//         ) : (
//           <p className="text-green-400 font-semibold mb-10">
//             🌟 All messages opened! 🌟
//           </p>
//         )}
//       </motion.div>

//       {/* Button to continue */}
//       <motion.button
//         onClick={() => navigate("/moment")}
//         className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         Every moment captures her grace.🥰
//       </motion.button>
//     </motion.div>
//   );
// };

// export default MessagesPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const MessagesPage = () => {
  const messages = [
    {
      title: "Dream Big ✨",
      text: "May all your dreams come true and your year be filled with magic and wonder!",
    },
    {
      title: "Stay Happy 💕",
      text: "Your smile lights up the world — never stop shining bright!",
    },
    {
      title: "You’re Special 🌸",
      text: "Always remember, you’re loved more than words can say.",
    },
  ];

  const [current, setCurrent] = useState(-1);
  const [showFinalGift, setShowFinalGift] = useState(false);
  const navigate = useNavigate();

  const handleOpenMessage = () => {
    if (current < messages.length - 1) {
      setCurrent(current + 1);
    } else if (!showFinalGift) {
      setShowFinalGift(true);
    }
  };

  // Variants for main container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Variants for individual element animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Variants for message card animation
  const messageCardVariants = {
    initial: { scale: 0.8, opacity: 0, rotateX: 90 },
    animate: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    exit: { scale: 0.8, opacity: 0, rotateX: -90 },
  };

  // Variants for final gift reveal
  const giftVariants = {
    hidden: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
    visible: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center relative overflow-hidden bg-gray-950 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background radial gradient and star effect */}
      <div className="absolute inset-0 z-0 radial-gradient"></div>
      <div className="absolute inset-0 z-0 stars"></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md">
        {/* Heading Section */}
        <div className="mb-12">
          <motion.div
            className="text-7xl mb-4 animate-glow"
            variants={itemVariants}
          >
            💌
          </motion.div>
          <motion.h1
            className="text-4xl font-extrabold text-white mb-2 tracking-wide"
            variants={itemVariants}
          >
            Special Messages
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400 font-light"
            variants={itemVariants}
          >
            A collection of thoughts for Madam Jii 🇯🇵
          </motion.p>
        </div>

        {/* Message Card Display */}
        <AnimatePresence mode="wait">
          {current >= 0 && !showFinalGift && (
            <motion.div
              key={current}
              className="bg-purple-900/50 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-500/20 w-full p-8 mb-8"
              variants={messageCardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h2 className="text-2xl font-bold mb-3 text-pink-400">
                {messages[current].title}
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed">
                {messages[current].text}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Final Gift Section */}
        {showFinalGift && (
          <motion.div
            className="my-8"
            variants={giftVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold text-yellow-300 mb-4 animate-pulse">
              Your Final Gift! 🎁
            </h2>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1549488344-93e174b86861?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
                alt="A beautiful, glowing gift"
                className="w-full h-full object-cover rounded-2xl transform scale-110 saturate-150"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>
            </div>
          </motion.div>
        )}

        {/* Tap Area */}
        <motion.div
          onClick={handleOpenMessage}
          className="cursor-pointer bg-white/10 rounded-2xl border border-white/20 p-6 mb-10 transition-all duration-300 ease-in-out hover:bg-white/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          {current < messages.length - 1 ? (
            current === -1 ? (
              <p className="text-pink-300 font-semibold tracking-wide animate-pulse">
                ❤️ Tap to reveal your first message
              </p>
            ) : (
              <p className="text-gray-300 font-medium">
                {messages.length - (current + 1)}{" "}
                {messages.length - (current + 1) === 1 ? "message" : "messages"}{" "}
                remaining
              </p>
            )
          ) : (
            <p className="text-green-400 font-semibold animate-bounce">
              🌟 All messages opened! Tap for a final gift! 🌟
            </p>
          )}
        </motion.div>

        {/* Continue Button */}
        {showFinalGift && (
          <motion.button
            onClick={() => navigate("/moment")}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg px-6 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            variants={itemVariants}
          >
            Every moment captures her grace. 🥰
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default MessagesPage;