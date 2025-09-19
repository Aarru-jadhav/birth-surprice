
// import React, { useState, useEffect } from "react";
// import Confetti from "react-confetti";
// import { useNavigate } from "react-router-dom";
// import "./App.css";


// const App = () => {
//   const [screen, setScreen] = useState("loading"); // "loading" | "countdown" | "celebrate"
//   const [timeLeft, setTimeLeft] = useState(10); // countdown in seconds
//   const [showConfetti, setShowConfetti] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Step 1 → Show loading for 5 sec, then switch to countdown
//     if (screen === "loading") {
//       const timer = setTimeout(() => {
//         setScreen("countdown");
//       }, 5000);
//       return () => clearTimeout(timer);
//     }

//     // Step 2 → Start countdown
//     if (screen === "countdown") {
//       if (timeLeft <= 0) {
//         setScreen("celebrate");
//         setShowConfetti(true);
//       } else {
//         const interval = setInterval(() => {
//           setTimeLeft((prev) => prev - 1);
//         }, 1000); // ✅ countdown every 1 second
//         return () => clearInterval(interval);
//       }
//     }
//   }, [screen, timeLeft]);

//   // Optional: calculate days/hours/minutes/seconds
//   const days = Math.floor(timeLeft / (24 * 3600));
//   const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
//   const minutes = Math.floor((timeLeft % 3600) / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
//       {screen === "loading" && (
//         <div>
//           <div
//             key={screen}
//             className={`shape mx-auto mb-6 ${
//               screen === "loading" ? "circle animate-bounce" : "heart pulse"
//             }`}
//           ></div>
//           <h1 className="text-2xl font-bold text-pink-400">
//             Preparing Something Special
//           </h1>
//           <p className="text-gray-300">For someone very special...</p>
//         </div>
//       )}

//       {screen === "countdown" && (
//         <div>
//           <div
//             key={screen}
//             className={`shape mx-auto mb-6 heart pulse`}
//           ></div>
//           <h1 className="text-3xl font-bold text-pink-400 mb-4">
//             🎂 Birthday Countdown 🎂
//           </h1>
//           <p className="mb-6">The magical moment approaches...</p>
//           <div className="grid grid-cols-2 gap-4">
//             <div className="bg-pink-600 p-4 rounded-xl">
//               <h2 className="text-2xl">{String(days).padStart(2, "0")}</h2>
//               <p>Days</p>
//             </div>
//             <div className="bg-pink-500 p-4 rounded-xl">
//               <h2 className="text-2xl">{String(hours).padStart(2, "0")}</h2>
//               <p>Hours</p>
//             </div>
//             <div className="bg-purple-500 p-4 rounded-xl">
//               <h2 className="text-2xl">{String(minutes).padStart(2, "0")}</h2>
//               <p>Minutes</p>
//             </div>
//             <div className="bg-blue-500 p-4 rounded-xl">
//               <h2 className="text-2xl">{String(seconds).padStart(2, "0")}</h2>
//               <p>Seconds</p>
//             </div>
//           </div>
//         </div>
//       )}

//       {screen === "celebrate" && (
//         <div>
//           {showConfetti && <Confetti />}
//           <h1 className="text-4xl font-bold text-purple-400 mb-4">
//             🎉 Time to Celebrate! 🎉
//           </h1>
//           <p className="mb-6">
//             The countdown is over... Let’s celebrate! 🥳
//           </p>
//           <button
//             onClick={() => navigate("/birthday")} // 👈 goes to BirthdayPage
//             className="bg-purple-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-purple-700 transition cursor-pointer"
//           >
//             Let’s Celebrate! ✨
//           </button>
//           <p>click this button </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const [screen, setScreen] = useState("password");
  const [timeLeft, setTimeLeft] = useState(10);
  const [showConfetti, setShowConfetti] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();

  const correctPassword = "mypassword";

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordInput === correctPassword) {
      setScreen("loading");
    } else {
      alert("Wrong password! Try again.");
      setPasswordInput("");
    }
  };

  useEffect(() => {
    if (screen === "loading") {
      const timer = setTimeout(() => setScreen("countdown"), 5000);
      return () => clearTimeout(timer);
    }

    if (screen === "countdown") {
      if (timeLeft <= 0) {
        setScreen("celebrate");
        setShowConfetti(true);
      } else {
        const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
        return () => clearInterval(interval);
      }
    }
  }, [screen, timeLeft]);

  const days = Math.floor(timeLeft / (24 * 3600));
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // PASSWORD SCREEN
  if (screen === "password") {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
        <div className="bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-sm border border-pink-500/20">
          <h1 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Access Portal 🗝️
          </h1>
          <form onSubmit={handlePasswordSubmit} className="flex flex-col items-center gap-6">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              placeholder="Enter secret password"
              className="w-full p-3 rounded-lg bg-gray-800 border border-transparent focus:border-pink-500 focus:outline-none transition-all text-white placeholder-gray-500"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  // MAIN APP (loading, countdown, celebrate)
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center text-white bg-gradient-to-br from-gray-900 via-gray-800 to-black animate-gradient-slow-pulse p-6">
      {screen === "loading" && (
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24 mb-6 animate-pulse-light">
            <span className="absolute inset-0 bg-pink-500 rounded-full opacity-75 blur-md animate-ping"></span>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-pink-300 animate-spin-slow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            Preparing Something Special
          </h1>
          <p className="text-gray-400 mt-2 text-lg">Just for you...</p>
        </div>
      )}

      {screen === "countdown" && (
        <div className="flex flex-col items-center">
          <div className="relative mb-6 animate-pulse-light">
            <span className="absolute inset-0 bg-pink-500 rounded-full opacity-75 blur-lg animate-ping-slow"></span>
            <div className="relative z-10 p-6 bg-gray-900 rounded-full shadow-2xl border border-pink-500/20">
              <svg
                className="w-20 h-20 text-pink-400 animate-heartbeat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 14c1.49-1.49 2-2.82 2-4.5a4.5 4.5 0 0 0-8.5-2.0A4.5 4.5 0 0 0 5 9.5c0 1.68.51 3.01 2 4.5l5 5.5 5-5.5z" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-2">
            Birthday Countdown 🎂
          </h1>
          <p className="text-gray-400 mb-8 text-lg">The magical moment approaches...</p>
          <div className="grid grid-cols-4 gap-4 w-full max-w-2xl">
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-pink-500/10">
              <h2 className="text-4xl font-bold text-pink-400">{String(days).padStart(2, "0")}</h2>
              <p className="text-sm text-gray-400 mt-1">Days</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-purple-500/10">
              <h2 className="text-4xl font-bold text-purple-400">{String(hours).padStart(2, "0")}</h2>
              <p className="text-sm text-gray-400 mt-1">Hours</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-blue-500/10">
              <h2 className="text-4xl font-bold text-blue-400">{String(minutes).padStart(2, "0")}</h2>
              <p className="text-sm text-gray-400 mt-1">Minutes</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-green-500/10">
              <h2 className="text-4xl font-bold text-green-400">{String(seconds).padStart(2, "0")}</h2>
              <p className="text-sm text-gray-400 mt-1">Seconds</p>
            </div>
          </div>
        </div>
      )}

      {screen === "celebrate" && (
        <div>
          {showConfetti && <Confetti />}
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4 animate-pulse">
            🎉 Happy Birthday! 🎉
          </h1>
          <p className="text-xl text-gray-300 mb-8">The wait is over! Let's celebrate! 🥳</p>
          <button
            onClick={() => navigate("/birthday")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full text-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-110 shadow-lg"
          >
            Discover Your Gift ✨
          </button>
        </div>
      )}
    </div>
  );
};

export default App;