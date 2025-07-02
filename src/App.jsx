import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/CreateEvent";
import ViewEvent from "./pages/ViewEvent";


function App() {

  return (
    <Routes>

        <Route path="/" element={<Index />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/viewevent" element={<ViewEvent />} />
    </Routes>
  )
}

export default App
