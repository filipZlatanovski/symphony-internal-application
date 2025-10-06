import { useState } from "react";
import { Box, Modal } from "@mui/material";
import TypographyText from "../TypographyText/TypographyText";
import organizerModal from "./organizerModal.styles";
import InputField from "../InputField/InputField";
import CloseButton from "../CloseButton/CloseButton";
import Button from "../Button/Button";
import type { ChangeEvent } from "react";

interface OrganizerModalProps {
  isOpen: boolean;
  isMobile: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function OrganizerModal({
  isOpen,
  isMobile,
  onClose,
  onSubmit,
}: OrganizerModalProps) {
  const [bankDetails, setBankDetails] = useState<number>();

  const isFormValid =
    bankDetails === 0 || typeof bankDetails !== "number" || !bankDetails;

  const handleBankDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBankDetails(parseInt(event.target.value));
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={organizerModal}>
        {isMobile ? "" : <CloseButton onClose={onClose} />}
        {/* this should be wrapped in a form component later on */}
        <div className="text-center mt-5 pt-[1.2rem]">
          <TypographyText text="One Step Closer!" variant="h2" />
        </div>
        <InputField
          type="number"
          placeholder={
            isMobile
              ? "Transaction Account Number"
              : "Enter your bank details - e.g 30000XXX"
          }
          htmlFor="aria-bankDetails-label"
          htmlId="aria-bankDetails-label"
          label="Bank Details"
          value={bankDetails}
          onValueChange={handleBankDetailsChange}
        />
        <div className="flex justify-center items-center mt-5 gap-[3rem]">
          <Button
            variant={`${isFormValid ? "disabled" : "primary"}`}
            type="submit"
            content="Submit"
            handleClick={onSubmit}
            disabled={isFormValid}
          />
          {isMobile && (
            <Button
              variant="secondary"
              type="button"
              content="Close"
              handleClick={onClose}
            />
          )}
        </div>
      </Box>
    </Modal>
  );
}
