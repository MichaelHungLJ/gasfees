import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Gasbar from "../components/Gasbar";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <div className="overview">
        <div className="currency">
          <span>Currency box here</span>
        </div>
        <div className="chain">
          <Gasbar chain="ETH" />
        </div>
      </div>
    </div>
  );
}
