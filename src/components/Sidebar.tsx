import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import ethlogo from "../assets/eth_logo.png";
import HomeIcon from "@mui/icons-material/Home";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import LightModeIcon from "@mui/icons-material/LightMode";
import LogoutIcon from "@mui/icons-material/Logout";

export default function Sidebar() {
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

        <Link to="/addchain">
          <div className="body-item">
            <LocalGasStationIcon />
            <h3>Gas Fees</h3>
          </div>
        </Link>
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
