import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Birthday from "./Birthday.jsx";
import MessagesPage from "./MessagesPage.jsx";
import Moment from "./Moment.jsx";
import Letter from "./Letter.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/moment" element={<Moment />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
