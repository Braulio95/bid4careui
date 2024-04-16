import { Tooltip } from "@mui/material";
import React, { ReactElement } from "react";

interface IB4CTooltipProps {
  label: string;
  children: ReactElement<any, any>;
}

export const B4CTooltip = ({ children, label }: IB4CTooltipProps) => {
  return <Tooltip title={label}>{children}</Tooltip>;
};
