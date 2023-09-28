import { FC, ReactNode } from "react";
import { Button, Typography } from "@material-tailwind/react";

/** Custom Import */
import { BudgetSVG, HomeSVG, ReportSVG, TransactionSVG } from "@/assets/svgs";
import { Link } from "react-router-dom";

export const NAVIGATION_DATA = [
  {
    name: "Home",
    path: "/home",
    svg: <HomeSVG />,
  },
  {
    name: "Transactions",
    path: "/transactions",
    svg: <TransactionSVG />,
  },
  {
    name: "Reports",
    path: "/reports",
    svg: <ReportSVG />,
  },
  {
    name: "Budgets",
    path: "/budgets",
    svg: <BudgetSVG />,
  },
];

interface NavIconButtonProps {
  name: string;
  path: string;
  svg: ReactNode;
}

export const NavIconButton: FC<NavIconButtonProps> = ({ name, path, svg }) => {
  return (
    <Link to={path}>
      <Button
        size="sm"
        variant="text"
        className="text-gray-800 px-0 rounded-none w-full flex flex-col justify-center items-center"
      >
        {svg}
        <Typography
          as="span"
          variant="small"
          className="font-medium capitalize text-xs"
        >
          {name}
        </Typography>
      </Button>
    </Link>
  );
};
