import React from "react";
import { Navbar, IconButton } from "@material-tailwind/react";

/** Custom Imports */
import { PlusSVG } from "@/assets/svgs";
import { NAVIGATION_DATA, NavIconButton } from "./navigation.data";

export const BottomNavBar = () => {
  const leftIcons = NAVIGATION_DATA.filter(
    (nav) => nav.name === "Home" || nav.name === "Transactions"
  );
  const rightIcons = NAVIGATION_DATA.filter(
    (nav) => nav.name === "Reports" || nav.name === "Budgets"
  );

  return (
    <div className="flex lg:hidden">
      <Navbar className="rounded-none min-w-full px-0 py-0 h-16 flex flex-row justify-center items-center bg-white border-t border-t-gray-400">
        <div className="flex flex-grow flex-row justify-center items-center">
          {/* Home and Transaction Icon Buttons */}
          {leftIcons.map((nav, index) => {
            return (
              <div className="text-gray-800 px-0 rounded-none w-full flex flex-col justify-center items-center">
                <NavIconButton
                  key={index}
                  svg={nav.svg}
                  path={nav.path}
                  name={nav.name}
                />
              </div>
            );
          })}
        </div>

        {/* Add New Button */}
        <IconButton
          size="lg"
          onClick={(e) => e.preventDefault()}
          className="rounded-full shadow-md bottom-8"
        >
          <PlusSVG />
        </IconButton>

        <div className="flex flex-grow flex-row justify-center items-center">
          {/* Reports and Budgets Icon Buttons */}
          {rightIcons.map((nav, index) => {
            return (
              <div className="text-gray-800 px-0 rounded-none w-full flex flex-col justify-center items-center">
                <NavIconButton
                  key={index}
                  svg={nav.svg}
                  path={nav.path}
                  name={nav.name}
                />
              </div>
            );
          })}
        </div>
      </Navbar>
    </div>
  );
};
