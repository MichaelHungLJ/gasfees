import React from "react";
import { Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddChain from "./pages/AddChain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/addchain" element={<AddChain />} />
    </Routes>
  );
}

export default App;
