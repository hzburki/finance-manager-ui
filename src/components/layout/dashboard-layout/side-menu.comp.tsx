import React from "react";
import { NAVIGATION_DATA, NavIconButton } from "./navigation.data";

/** Custom Imports */

export default function SideMenu() {
  return (
    <div className="hidden lg:flex justify-start bg-white w-20 min-h-full shadow-r-md border-r border-r-gray-400 items-center gap-y-4 py-4 flex-col">
      {NAVIGATION_DATA.map((nav, index) => {
        return (
          <div className="w-full">
            <NavIconButton
              key={index}
              svg={nav.svg}
              name={nav.name}
              path={nav.path}
            />
          </div>
        );
      })}
    </div>
  );
}
