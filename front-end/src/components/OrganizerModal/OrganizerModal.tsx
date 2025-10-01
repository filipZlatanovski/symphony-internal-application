import { Box, Modal } from "@mui/material";
import TypographyText from "../TypographyText/TypographyText";
import organizerModal from "./organizerModal.styles";
import InputField from "../InputField/InputField";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";

interface OrganizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function OrganizerModal({
  isOpen,
  onClose,
  onSubmit,
}: OrganizerModalProps) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={organizerModal}>
        <CloseButton onClose={onClose} />
        {/* this should be wrapped in a form component later on */}
        <TypographyText text="One Step Closer!" variant="h3" />
        <InputField
          type="number"
          placeholder="Enter a contribution amount - e.g. 450"
          htmlFor="aria-amount-label"
          htmlId="aria-amount-label"
          label="Contribution Amount"
        />
        <InputField
          type="number"
          placeholder="Enter your bank details - e.g 30000XXX"
          htmlFor="aria-bankDetails-label"
          htmlId="aria-bankDetails-label"
          label="Bank Details"
        />
        <div className="flex justify-center items-center mt-5">
          <Button type="submit" content="Submit" handleClick={onSubmit} />
        </div>
      </Box>
    </Modal>
  );
}
