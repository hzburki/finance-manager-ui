import React, { FC } from "react";
import { CloseSVG } from "@/assets/svgs";
import { Button } from "@material-tailwind/react";
import { Outlet, useNavigate } from "react-router-dom";

// Custom Imports

export const ModalScreenLayout: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Top Div */}
      <div className="h-9 p-4 flex justify-end">
        <Button
          size="lg"
          variant="text"
          // navigate to previous page
          onClick={() => navigate(-1)}
          className="flex justify-center items-center rounded-full h-20 w-20"
        >
          <CloseSVG />
        </Button>
      </div>

      <Outlet />
    </div>
  );
};
