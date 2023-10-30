import React, { FC } from "react";
import { Drawer, IconButton, Typography } from "@material-tailwind/react";

interface DrawerMenuProps {
  open: boolean;
  toggleDrawer: () => void;
}

export const DrawerMenu: FC<DrawerMenuProps> = (props) => {
  const { open, toggleDrawer } = props;

  return (
    <Drawer
      size={400}
      open={open}
      className="p-4"
      onClose={toggleDrawer}
      transition={{ type: "tween", duration: 0.3 }}
    >
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
  );
};
