import { Outlet } from "react-router-dom";
import React from "react";
import Sidebar from "./Sidebar";

interface SidebarLayoutProps {
  openModal: () => void;
}

export default function SidebarLayout({ openModal }: SidebarLayoutProps) {
  return (
    <>
      <Sidebar openModal={openModal} />
      <Outlet />
    </>
  );
}
