import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";

export default function SidebarLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
