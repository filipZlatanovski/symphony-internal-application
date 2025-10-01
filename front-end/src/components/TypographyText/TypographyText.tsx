import { Typography } from "@mui/material";
import type { TypographyProps } from "@mui/material";
import typographyStyle from "./typography.styles";

interface TypographyTextProps {
  text: string;
  variant: TypographyProps["variant"];
}

export default function TypographyText({ text, variant }: TypographyTextProps) {
  return (
    <Typography sx={typographyStyle} variant={variant}>
      {text}
    </Typography>
  );
}
