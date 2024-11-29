import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
}

export default App;

