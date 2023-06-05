import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddChain from "./pages/AddChain";
import Sidebar from "./components/Sidebar";
import SidebarLayout from "./components/SidebarLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addchain" element={<AddChain />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
