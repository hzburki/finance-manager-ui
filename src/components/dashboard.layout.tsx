import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Drawer,
  Navbar,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

export default function DashboardLayout() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <div className="flex flex-col bg-blue-gray-50 min-h-screen">
      {/* Navbar */}
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

      <div className="flex flex-row flex-grow min-h-full">
        {/* Side Menu */}
        <div className="hidden lg:flex justify-start bg-white w-20 min-h-full shadow-r-md border-r border-r-gray-400 items-center gap-y-4 py-4 flex-col">
          <Button
            size="sm"
            variant="text"
            className="text-gray-800 px-0 rounded-none w-full flex flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <Typography
              as="span"
              variant="small"
              className="font-medium capitalize text-xs"
            >
              Home
            </Typography>
          </Button>
          <Button
            size="sm"
            variant="text"
            className="text-gray-800 px-0 rounded-none w-full flex flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
              />
            </svg>

            <Typography
              as="span"
              variant="small"
              className="font-medium capitalize text-xs"
            >
              Transactions
            </Typography>
          </Button>
          <Button
            size="sm"
            variant="text"
            className="text-gray-800 px-0 rounded-none w-full flex flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
            <Typography
              as="span"
              variant="small"
              className="font-medium capitalize text-xs"
            >
              Reports
            </Typography>
          </Button>
          <Button
            size="sm"
            variant="text"
            className="text-gray-800 px-0 rounded-none w-full flex flex-col justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              />
            </svg>

            <Typography
              as="span"
              variant="small"
              className="font-medium capitalize text-xs"
            >
              Budgets
            </Typography>
          </Button>
        </div>

        {/* Children */}
        <div className="min-h-full">
          <Outlet />
        </div>
      </div>

      {/* Drawer Menu */}
      <Drawer open={open} onClose={toggleDrawer} className="p-4">
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" className="text-gray-800">
            Finance Manager
          </Typography>
          <IconButton
            variant="text"
            className="text-gray-800"
            onClick={toggleDrawer}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
      </Drawer>
    </div>
  );
}
