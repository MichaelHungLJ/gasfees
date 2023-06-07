import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Gasbar from "../components/Gasbar";
import Modal from "../components/Modal";

import "./Dashboard.css";

interface DashboardProps {
  modalState: boolean;
  closeModal: () => void;
}

export default function Dashboard({ modalState, closeModal }: DashboardProps) {
  const [chain, setChain] = useState<string>("");

  const handleDataFromChild = (data: string) => {
    setChain(data);
  };

  return (
    <div>
      {modalState && (
        <Modal
          closeModal={closeModal}
          chainDataToParent={handleDataFromChild}
        />
      )}
      <div className="overview">
        <div className="currency">
          <p>Chain: {chain}</p>
          <span>Currency box here</span>
        </div>
        <div className="chain">
          <Gasbar chain="ETH" />
        </div>
      </div>
    </div>
  );
}
