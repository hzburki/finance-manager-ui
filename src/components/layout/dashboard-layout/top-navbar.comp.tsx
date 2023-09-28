import React from "react";
import {
  Button,
  IconButton,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface TopNavBarProps {
  toggleDrawer: () => void;
}

export default function TopNavBar(props: TopNavBarProps) {
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

      <div className="flex flex-grow flex-row justify-center lg:justify-between h-full px-4 items-center">
        {/* Left App Bar */}
        <div>
          <Typography
            variant="h5"
            //? transform -translate-x-4
            //?  => Moves the text to the left to offset the hamburger icon.
            //?  => Wihtout this the title is not in the center of the screens.
            className="text-gray-800 transform -translate-x-4 lg:-translate-x-0"
          >
            Finance Manager
          </Typography>
        </div>

        {/* Right App Bar */}
        <div className="hidden lg:block">
          <Link to="/add/transaction">
            <Button variant="filled" size="sm">
              <Typography
                variant="button"
                className="text-white text-sm font-medium"
              >
                Add Transaction
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </Navbar>
  );
}
