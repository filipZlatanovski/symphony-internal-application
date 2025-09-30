import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import closeButtonStyles from "./closeButton.styles";

interface CloseIconProps {
  onClose: () => void;
}

export default function CloseButton({ onClose }: CloseIconProps) {
  return (
    <IconButton onClick={onClose} sx={closeButtonStyles} aria-label="close">
      <CloseIcon />
    </IconButton>
  );
}
