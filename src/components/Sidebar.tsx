import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import ethlogo from "../assets/eth_logo.png";
import HomeIcon from "@mui/icons-material/Home";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";

interface SidebarLayoutProps {
  openModal: () => void;
}

export default function Sidebar({ openModal }: SidebarLayoutProps) {
  return (
    <div className="sidebar">
      <header>
        <div className="logo">
          <img src={ethlogo} alt="Ethereum coin" />
          <h1>Gas Fees WTF</h1>
        </div>
      </header>

      <div className="body">
        <Link to="/dashboard">
          <div className="body-item">
            <HomeIcon />
            <h3>Home</h3>
          </div>
        </Link>

        <div className="body-item" onClick={openModal}>
          <LocalGasStationIcon />
          <h3>Add Chain</h3>
        </div>
      </div>

      <div className="footer">
        <Link to="/">
          <div className="footer-item">
            <LogoutIcon />
            <h3>Logout</h3>
          </div>
        </Link>

        <div className="footer-item">
          <LightModeIcon />
          <h3>Dark Mode</h3>
        </div>
      </div>
    </div>
  );
}
