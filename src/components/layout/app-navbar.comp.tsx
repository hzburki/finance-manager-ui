import React from "react";
import { IconButton, Navbar, Typography } from "@material-tailwind/react";

interface AppNavBarProps {
  toggleDrawer: () => void;
}

export default function AppNavBar(props: AppNavBarProps) {
  const { toggleDrawer } = props;

  return (
    <Navbar className="rounded-none min-w-full px-0 py-0 h-20 flex flex-row justify-start items-center shadow-none bg-white border-b border-b-gray-400">
      <div className="flex justify-center items-center h-full w-20">
        <IconButton variant="text" onClick={toggleDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </IconButton>
      </div>

      <div className="flex flex-grow flex-row h-full px-4 items-center">
        <Typography variant="h5" className="text-gray-800">
          Finance Manager
        </Typography>
      </div>
    </Navbar>
  );
}
