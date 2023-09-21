import React from "react";
import { Typography } from "@material-tailwind/react";

import { LoginForm } from "@/forms";

export const LoginScreen = () => {
  return (
    <div className="flex shadow-sm rounded-sm flex-col justify-center items-center min-h-screen">
      <div className="w-full max-w-sm">
        <Typography variant="h2" className="text-center text-gray-800">
          Financial Manager
        </Typography>

        <Typography variant="paragraph" className="text-center text-gray-800">
          Empower your financial journey
        </Typography>

        <LoginForm />
      </div>
    </div>
  );
};
