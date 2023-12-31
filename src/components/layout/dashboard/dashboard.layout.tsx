import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// Custom Components
import { SideMenu } from "./side-menu.comp";
import { TopNavBar } from "./top-navbar.comp";
import { DrawerMenu } from "./drawer-menu.comp";
import { BottomNavBar } from "./bottom-navbar.comp";

export const DashboardLayout = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <div className="flex flex-col bg-blue-gray-50 min-h-screen">
      {/* Top Navbar */}
      <TopNavBar toggleDrawer={toggleDrawer} />

      <div className="flex flex-row flex-grow min-h-full">
        {/* Desktop Side Menu */}
        <SideMenu />

        {/* Children */}
        <div className="min-h-full w-full">
          <Outlet />
        </div>
      </div>

      {/* Drawer Menu */}
      <DrawerMenu open={open} toggleDrawer={toggleDrawer} />

      {/* Bottom NavBar */}
      <BottomNavBar />
    </div>
  );
};
