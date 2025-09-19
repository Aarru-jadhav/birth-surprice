
// import React from 'react';
// import { motion } from 'framer-motion';

// const Letter = () => {

//   const containerVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { staggerChildren: 0.2, duration: 0.8 } 
//     },
//     exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
//   };

//   const itemVariants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
//   };

//   const iconVariants = {
//     initial: { scale: 0 },
//     animate: { scale: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } }
//   };

//   return (
//     <motion.div
//       className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#11011c] text-white font-sans bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"
//       variants={containerVariants}
//       initial="initial"
//       animate="animate"
//       exit="exit"
//     >
//       {/* Title */}
//       <motion.div className="text-center mb-8 md:mb-12" variants={itemVariants}>
//         <motion.h1 
//           className="text-5xl md:text-6xl font-['Pacifico'] text-purple-300 mb-2 drop-shadow-lg"
//           variants={itemVariants}
//         >
//           A Special Letter
//         </motion.h1>
//         <motion.p className="text-lg md:text-xl font-light text-gray-300" variants={itemVariants}>
//           Just for you, on your special day ❤️
//         </motion.p>
//       </motion.div>

//       {/* Letter Card */}
//       <motion.div 
//         className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-purple-100 bg-opacity-30 rounded-3xl p-6 md:p-10 shadow-xl border border-white border-opacity-10 backdrop-blur-md"
//         variants={itemVariants}
//       >
//         {/* Top-left star */}
//         <motion.div className="absolute top-4 left-4 transform -translate-x-1/2 -translate-y-1/2" variants={iconVariants} whileHover={{ scale: 1.2, rotate: 15 }}>
//           <svg className="w-8 h-8 text-yellow-300 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.25l-6.18 3.78L7 14.14l-5-4.87 6.91-1.01L12 2z"/>
//           </svg>
//         </motion.div>

//         {/* Top-right heart */}
//         <motion.div className="absolute top-4 right-4 transform translate-x-1/2 -translate-y-1/2" variants={iconVariants} whileHover={{ scale: 1.2, rotate: -15 }}>
//           <svg className="w-8 h-8 text-red-400 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 7.5 3a5.5 5.5 0 0 1 5.5 5.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//           </svg>
//         </motion.div>

//         {/* Letter Content */}
//         <motion.div className="text-gray-900 leading-relaxed font-serif text-base sm:text-lg mt-6" variants={itemVariants}>
//           <p className="mb-4 text-purple-900 font-semibold">My Dearest Panda,</p>
//           <p>
//             On this very special day, I want you to know how incredibly important you are to me. 
//             You are a source of endless joy, laughter, and support in my life. Every moment 
//             spent with you is a treasure, and I cherish the bond we share. Your strength, 
//             kindness, and beautiful heart inspire me every day.
//           </p>
//           <p className="mt-4">
//             I am so grateful for everything you do. May your day be as wonderful and special 
//             as you are. I hope it's filled with all the happiness, love, and joy you truly deserve.
//             Happy Birthday! 🎉
//           </p>
//           <p className="mt-6 text-right font-light text-purple-900">
//             With all my love,<br />
//             Its Me...
//           </p>
//         </motion.div>

//         {/* Bottom-left heart */}
//         <motion.div className="absolute bottom-4 left-4 transform -translate-x-1/2 translate-y-1/2" variants={iconVariants} whileHover={{ scale: 1.2 }}>
//           <svg className="w-8 h-8 text-pink-400 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 7.5 3a5.5 5.5 0 0 1 5.5 5.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//           </svg>
//         </motion.div>

//         {/* Bottom-right heart */}
//         <motion.div className="absolute bottom-4 right-4 transform translate-x-1/2 translate-y-1/2" variants={iconVariants} whileHover={{ scale: 1.2 }}>
//           <svg className="w-8 h-8 text-red-400 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
//             <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A5.5 5.5 0 0 1 7.5 3a5.5 5.5 0 0 1 5.5 5.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
//           </svg>
//         </motion.div>

//         {/* Instagram Handle */}
//         <motion.div className="absolute bottom-4 left-1/2 transform -translate-x-1/2" variants={itemVariants}>
//           <p className="text-gray-900 text-sm opacity-50 font-sans tracking-wide">
//             @ganujbuilds
//           </p>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Letter;
import React from 'react';
import { AnimatePresence } from "framer-motion";

const Letter = () => {
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1, 
      transition: { duration: 1.5, ease: "easeInOut", staggerChildren: 0.2 } 
    },
    exit: { opacity: 0, transition: { duration: 1.2, ease: "easeOut" } }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
  };

  const letterCardVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: "easeOut", delay: 0.3 }
    }
  };

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-950 text-white font-poppins relative"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center text-center">
        {/* Title */}
        <motion.div className="mb-8 md:mb-12" variants={itemVariants}>
          <motion.h1 
            className="text-4xl sm:text-5xl font-extrabold text-white mb-2 tracking-wide"
            variants={itemVariants}
          >
            A Special Letter
          </motion.h1>
          <motion.p className="text-lg md:text-xl font-light text-gray-400" variants={itemVariants}>
            A moment of reflection, just for you.
          </motion.p>
        </motion.div>

        {/* Letter Card */}
        <motion.div 
          className="relative w-full rounded-3xl p-6 sm:p-10 shadow-2xl bg-white text-gray-900"
          variants={letterCardVariants}
        >
          {/* Letter Content */}
          <div 
            className="leading-relaxed font-serif text-base sm:text-lg text-left" 
          >
            <p className="mb-4 text-purple-700 font-bold tracking-wide">My Dearest Panda,</p>
            <p className="mt-4">
              On this very special day, I want you to know how incredibly important you are to me. 
              You are a source of endless joy, laughter, and support in my life. Every moment 
              spent with you is a treasure, and I cherish the bond we share. Your strength, 
              kindness, and beautiful heart inspire me every day.
            </p>
            <p className="mt-4">
              I am so grateful for everything you do. May your day be as wonderful and special 
              as you are. I hope it's filled with all the happiness, love, and joy you truly deserve.
              Happy Birthday! 🎉
            </p>
            <p className="mt-6 text-right font-light text-gray-700 italic">
              With all my love,<br />
              Its Me...
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Letter;