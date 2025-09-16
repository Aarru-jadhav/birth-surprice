// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const MessagesPage = () => {
//   // Array of beautiful messages 💖
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
//    const navigate = useNavigate();

//   const handleOpenMessage = () => {
//     if (current < messages.length - 1) {
//       setCurrent(current + 1);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-center relative overflow-hidden">
//       {/* Heading */}
//       <div className="mb-8">
//         <div className="text-6xl mb-4">💌</div>
//         <h1 className="text-3xl font-bold text-pink-400 mb-2">
//           Special Messages
//         </h1>
//         <p className="text-lg text-purple-300">For Madam Jii 🇯🇵</p>
//       </div>

//       {/* Show current message if opened */}
//       {current >= 0 && (
//         <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-2xl shadow-lg w-72 p-6 mb-6 animate-fadeIn">
//           <h2 className="text-xl font-bold mb-2">{messages[current].title}</h2>
//           <p>{messages[current].text}</p>
//         </div>
//       )}

//       {/* Message Card (tap area) */}
//       {current < messages.length - 1 ? (
//         <div
//           onClick={handleOpenMessage}
//           className="cursor-pointer bg-gradient-to-r from-pink-200 to-pink-100 rounded-2xl shadow-lg w-72 p-6 mb-10 hover:scale-105 transition-transform"
//         >
//           {current === -1 ? (
//             <p className="text-pink-600 font-medium">
//               ❤️ Tap to open your first message
//             </p>
//           ) : (
//             <p className="text-pink-600 font-medium">
//               {messages.length - (current + 1)} messages remaining
//             </p>
//           )}
//         </div>
//       ) : (
//         <p className="text-green-400 font-semibold mb-10">
//           🌟 All messages opened! 🌟
//         </p>
//       )}

//       {/* Button to continue */}
//       <button
//         onClick={() => navigate("/moment")} // 👈 goes to MomentPage
//         className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
//       >
//        Every moment captures her grace.🥰
//       </button>
//     </div>
//   );
// };

// export default MessagesPage;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

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
  const navigate = useNavigate();

  const handleOpenMessage = () => {
    if (current < messages.length - 1) {
      setCurrent(current + 1);
    }
  };

  // Variants for page transition
  const pageVariants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  // Variants for message card animation
  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-black text-center relative overflow-hidden"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Heading */}
      <div className="mb-8">
        <motion.div
          className="text-6xl mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          💌
        </motion.div>
        <motion.h1
          className="text-3xl font-bold text-pink-400 mb-2"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Special Messages
        </motion.h1>
        <motion.p
          className="text-lg text-purple-300"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          For Madam Jii 🇯🇵
        </motion.p>
      </div>

      {/* Show current message if opened */}
      <AnimatePresence>
        {current >= 0 && (
          <motion.div
            key={current}
            className="bg-gradient-to-r from-orange-400 to-pink-500 text-white rounded-2xl shadow-lg w-72 p-6 mb-6"
            variants={messageVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-bold mb-2">{messages[current].title}</h2>
            <p>{messages[current].text}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message Card (tap area) */}
      <motion.div
        onClick={handleOpenMessage}
        className="cursor-pointer bg-gradient-to-r from-pink-200 to-pink-100 rounded-2xl shadow-lg w-72 p-6 mb-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {current < messages.length - 1 ? (
          current === -1 ? (
            <p className="text-pink-600 font-medium">
              ❤️ Tap to open your first message
            </p>
          ) : (
            <p className="text-pink-600 font-medium">
              {messages.length - (current + 1)} messages remaining
            </p>
          )
        ) : (
          <p className="text-green-400 font-semibold mb-10">
            🌟 All messages opened! 🌟
          </p>
        )}
      </motion.div>

      {/* Button to continue */}
      <motion.button
        onClick={() => navigate("/moment")}
        className="bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Every moment captures her grace.🥰
      </motion.button>
    </motion.div>
  );
};

export default MessagesPage;
