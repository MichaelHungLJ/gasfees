import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddChain from "./pages/AddChain";
import Sidebar from "./components/Sidebar";
import SidebarLayout from "./components/SidebarLayout";

function App() {
  const [isModalOpen, setModal] = useState<boolean>(false);
  // Testing git flow from mac side

  const setModalOpen = () => {
    setModal(true);
  };

  const setModalClosed = () => {
    setModal(false);
  };

  return (
    <div>
      <Routes>
        <Route element={<SidebarLayout openModal={setModalOpen} />}>
          <Route
            path="/dashboard"
            element={
              <Dashboard modalState={isModalOpen} closeModal={setModalClosed} />
            }
          />
          <Route path="/addchain" element={<AddChain />} />
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
