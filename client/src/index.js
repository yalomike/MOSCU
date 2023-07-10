import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bookings from "./Components/Bookings";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </BrowserRouter>
);
