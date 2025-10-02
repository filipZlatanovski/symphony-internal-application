import { Tooltip as MUITooltip } from "@mui/material";
import type { ReactElement } from "react";
import { tooltipStyles } from "./tooltip.styles";

interface TooltipProps {
  title: string;
  children: ReactElement;
  arrow?: boolean;
  placement?:
    | "top-start"
    | "top"
    | "top-end"
    | "left-start"
    | "left"
    | "left-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-start"
    | "bottom"
    | "bottom-end";
}

export default function Tooltip({
  title,
  children,
  arrow,
  placement,
}: TooltipProps) {
  return (
    <MUITooltip
      placement={placement}
      slotProps={{
        tooltip: {
          sx: tooltipStyles,
        },
      }}
      title={title}
      arrow={arrow}
    >
      {children}
    </MUITooltip>
  );
}
