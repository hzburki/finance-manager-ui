import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// Custom Components
import SideMenu from "./side-menu.comp";
import AppNavBar from "./app-navbar.comp";
import DrawerMenu from "./drawer-menu.comp";

export default function DashboardLayout() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <div className="flex flex-col bg-blue-gray-50 min-h-screen">
      {/* Navbar */}
      <AppNavBar toggleDrawer={toggleDrawer} />

      <div className="flex flex-row flex-grow min-h-full">
        {/* Side Menu */}
        <SideMenu />

        {/* Children */}
        <div className="min-h-full">
          <Outlet />
        </div>
      </div>

      {/* Drawer Menu */}
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />
    </div>
  );
}
