
// import React, { useRef } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const Moment = () => {
//   const scrollRef = useRef(null);
//   const navigate = useNavigate();

//   const images = [
//     "/moment5.jpeg",
//     "/moment4.jpeg",
//     "/moment3.jpeg",
//     "/moment4.jpeg",
//   ];

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = direction === 'left' ? -350 : 350;
//       scrollRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth',
//       });
//     }
//   };

//   // Motion variants
//   const pageVariants = {
//     initial: { opacity: 0, y: 50 },
//     animate: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
//     exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
//   };

//   const imageVariants = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
//   };

//   const headerVariants = {
//     initial: { opacity: 0, x: -50 },
//     animate: { opacity: 1, x: 0, transition: { duration: 0.8 } },
//   };

//   return (
//     <motion.div
//       className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4"
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={pageVariants}
//     >
//       {/* Header Icon */}
//       <motion.div className="mb-8" variants={headerVariants}>
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-16 h-16">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055m-18.445 2.25A2.25 2.25 0 0 1 5.186 7.23a48.147 48.147 0 0 1-.186 1.134c-.054.38-.112.757-.175 1.134a2.25 2.25 0 0 0 2.25 2.25h15.5a2.25 2.25 0 0 0 2.25-2.25c0-.38-.054-.757-.112-1.134a47.865 47.865 0 0 1-.175-1.134" />
//           <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25h1.5m-1.5 3h1.5m-1.5 3h1.5" />
//         </svg>
//       </motion.div>

//       {/* Title */}
//       <motion.div className="text-center mb-8" variants={headerVariants}>
//         <h1 className="text-5xl font-bold mb-2" style={{ backgroundImage: 'linear-gradient(to right, #e990f3, #90cbf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
//           She Makes the World Brighter
//         </h1>
//         <p className="text-gray-400">💫 "You’re not just beautiful, you’re breathtaking in every moment"</p>
//       </motion.div>

//       {/* Image Slider */}
//       <div className="relative w-96 h-96 max-w-lg mb-8">
//         <div ref={scrollRef} className="flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar">
//           {images.map((imgSrc, index) => (
//             <motion.div key={index} className="flex-shrink-0 w-full snap-center px-2" variants={imageVariants}>
//               <div className="relative w-full rounded-3xl overflow-hidden shadow-lg">
//                 <img src={imgSrc} alt={`Moment ${index + 1}`} className="w-full h-full object-cover rounded-3xl" />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white z-10 ml-2 hover:scale-110 transition-transform">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
//           </svg>
//         </button>
//         <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-black bg-opacity-50 text-white z-10 mr-2 hover:scale-110 transition-transform">
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//             <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//           </svg>
//         </button>
//       </div>

//       {/* Continue Button */}
//       <motion.button
//         onClick={() => navigate("/letter")}
//         className="relative w-full max-w-sm rounded-full py-4 px-8 text-xl font-bold transition-all duration-300 ease-in-out"
//         style={{ backgroundImage: 'linear-gradient(to right, #a46dff, #6246e7)', boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
//         whileHover={{ scale: 1.05, y: -3 }}
//         whileTap={{ scale: 0.95 }}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.3 }}
//       >
//         One Last Thing
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6 inline-block ml-2">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0L17.25 15.75m3.75-3.75H3" />
//         </svg>
//       </motion.button>

//       <style jsx>{`
//         .hide-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .hide-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </motion.div>
//   );
// };

// export default Moment;
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const Moment = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  // Replace these with your own high-quality image paths
  const images = [
    "/moment5.jpeg",
    "/moment4.jpeg",
    "/moment3.jpeg",
    "/moment4.jpeg",
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Motion variants for a more cinematic feel
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-serif p-6"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-80"></div>

      {/* Header and Title */}
      <motion.div className="text-center mb-16 relative z-10" initial="hidden" animate="visible" variants={textVariants}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-thin tracking-widest text-white mb-4 uppercase">
          A Glimpse of Her Grace
        </h1>
        <p className="text-lg text-gray-400 font-light italic">
          "The world is brighter simply because you are in it."
        </p>
      </motion.div>

      {/* Image Slider */}
      <motion.div
        className="relative w-full max-w-2xl mx-auto mb-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <div ref={scrollRef} className="flex overflow-x-scroll snap-x snap-mandatory hide-scrollbar rounded-xl shadow-2xl border border-gray-700">
          {images.map((imgSrc, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full snap-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="w-full h-80 sm:h-96">
                <img
                  src={imgSrc}
                  alt={`Moment ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={() => scroll('left')} className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 text-white z-10 transition-colors hover:bg-white/20 backdrop-blur-sm focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button onClick={() => scroll('right')} className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/10 text-white z-10 transition-colors hover:bg-white/20 backdrop-blur-sm focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </motion.div>

      {/* Continue Button */}
      <motion.button
        onClick={() => navigate("/letter")}
        className="relative px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-md rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-white/20 focus:outline-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <span className="relative z-10">Discover One Last Thing</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 inline-block ml-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0L17.25 15.75m3.75-3.75H3" />
        </svg>
      </motion.button>

      {/* Custom styles */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .font-serif {
          font-family: 'Times New Roman', Times, serif;
        }
      `}</style>
    </motion.div>
  );
};

export default Moment;