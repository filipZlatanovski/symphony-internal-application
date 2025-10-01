import { Modal, Box } from "@mui/material";
import modalContainerStyles from "./ModalContainer.styles";

interface ModalContainerProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

export default function ModalContainer({ open, onClose, children }: ModalContainerProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalContainerStyles}>{children}</Box>
    </Modal>
  );
}
