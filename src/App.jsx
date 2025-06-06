import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Home";
import Login from "./pages/Login";

function App() {

  return (
    <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default App
