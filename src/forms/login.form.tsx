import React from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Button, Input, Spinner, Typography } from "@material-tailwind/react";

type LoginFormType = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<LoginFormType>();

  const login = (data: LoginFormType) => {
    console.log(data);
    navigate("/home");
  };

  return (
    <form
      onSubmit={handleSubmit(login)}
      className="my-8 px-4 flex flex-col gap-y-4"
    >
      <div>
        <Input
          label="Email"
          type="email"
          {...register("email", {
            pattern: {
              message: "Please enter a valid email address",
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
            },
            required: { message: "Please enter your email", value: true },
          })}
          error={!!errors.email?.message}
        />
        {errors.email?.message && (
          <Typography color="red" variant="small">
            {errors.email?.message}
          </Typography>
        )}
      </div>

      <div>
        <Input
          label="Password"
          type="password"
          {...register("password", {
            required: { message: "Please enter your password", value: true },
            min: {
              message: "Password must be at least 6 characters",
              value: 6,
            },
          })}
          error={!!errors.password?.message}
        />
        {errors.password?.message && (
          <Typography color="red" variant="small">
            {errors.password?.message}
          </Typography>
        )}
      </div>

      <NavLink className="-mt-2" to="/forgot-password">
        <Typography className="text-sm text-right text-gray-600 hover:underline">
          Forgot password?
        </Typography>
      </NavLink>

      <Button
        size="sm"
        fullWidth
        type="submit"
        className="mt-4"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex justify-center items-center">
            <Spinner />
          </div>
        ) : (
          <Typography className="capitalize font-semibold" variant="paragraph">
            Login
          </Typography>
        )}
      </Button>
    </form>
  );
}
