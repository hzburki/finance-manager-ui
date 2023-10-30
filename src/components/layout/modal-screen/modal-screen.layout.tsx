import React, { FC } from "react";

interface ModalScreenLayoutProps {
  addTopPadding?: boolean;
  children: React.ReactNode;
  showCancelButton?: boolean;
}

export const ModalScreenLayout: FC<ModalScreenLayoutProps> = (props) => {
  const { children, addTopPadding = true, showCancelButton = true } = props;

  return <div>{children}</div>;
};
