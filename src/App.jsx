
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const [screen, setScreen] = useState("loading"); // "loading" | "countdown" | "celebrate"
  const [timeLeft, setTimeLeft] = useState(10); // countdown in seconds
  const [showConfetti, setShowConfetti] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Step 1 → Show loading for 5 sec, then switch to countdown
    if (screen === "loading") {
      const timer = setTimeout(() => {
        setScreen("countdown");
      }, 5000);
      return () => clearTimeout(timer);
    }

    // Step 2 → Start countdown
    if (screen === "countdown") {
      if (timeLeft <= 0) {
        setScreen("celebrate");
        setShowConfetti(true);
      } else {
        const interval = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000); // ✅ countdown every 1 second
        return () => clearInterval(interval);
      }
    }
  }, [screen, timeLeft]);

  // Optional: calculate days/hours/minutes/seconds
  const days = Math.floor(timeLeft / (24 * 3600));
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-black text-white">
      {screen === "loading" && (
        <div>
          <div
            key={screen}
            className={`shape mx-auto mb-6 ${
              screen === "loading" ? "circle animate-bounce" : "heart pulse"
            }`}
          ></div>
          <h1 className="text-2xl font-bold text-pink-400">
            Preparing Something Special
          </h1>
          <p className="text-gray-300">For someone very special...</p>
        </div>
      )}

      {screen === "countdown" && (
        <div>
          <div
            key={screen}
            className={`shape mx-auto mb-6 heart pulse`}
          ></div>
          <h1 className="text-3xl font-bold text-pink-400 mb-4">
            🎂 Birthday Countdown 🎂
          </h1>
          <p className="mb-6">The magical moment approaches...</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-600 p-4 rounded-xl">
              <h2 className="text-2xl">{String(days).padStart(2, "0")}</h2>
              <p>Days</p>
            </div>
            <div className="bg-pink-500 p-4 rounded-xl">
              <h2 className="text-2xl">{String(hours).padStart(2, "0")}</h2>
              <p>Hours</p>
            </div>
            <div className="bg-purple-500 p-4 rounded-xl">
              <h2 className="text-2xl">{String(minutes).padStart(2, "0")}</h2>
              <p>Minutes</p>
            </div>
            <div className="bg-blue-500 p-4 rounded-xl">
              <h2 className="text-2xl">{String(seconds).padStart(2, "0")}</h2>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      )}

      {screen === "celebrate" && (
        <div>
          {showConfetti && <Confetti />}
          <h1 className="text-4xl font-bold text-purple-400 mb-4">
            🎉 Time to Celebrate! 🎉
          </h1>
          <p className="mb-6">
            The countdown is over... Let’s celebrate! 🥳
          </p>
          <button
            onClick={() => navigate("/birthday")} // 👈 goes to BirthdayPage
            className="bg-purple-600 px-6 py-3 rounded-full text-lg font-bold hover:bg-purple-700 transition cursor-pointer"
          >
            Let’s Celebrate! ✨
          </button>
          <p>click this button </p>
        </div>
      )}
    </div>
  );
};

export default App;
