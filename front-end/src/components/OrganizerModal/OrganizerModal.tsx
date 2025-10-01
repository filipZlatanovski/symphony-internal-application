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
  onClose: () => void;
  onSubmit: () => void;
}

export default function OrganizerModal({
  isOpen,
  onClose,
  onSubmit,
}: OrganizerModalProps) {
  const [contributionAmount, setContributionAmount] = useState<number>();
  const [bankDetails, setBankDetails] = useState<number>();

  const isFormValid =
    bankDetails === 0 ||
    contributionAmount === 0 ||
    typeof bankDetails !== "number" ||
    typeof contributionAmount !== "number" ||
    !bankDetails ||
    !contributionAmount;

  const handleContributionAmountChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setContributionAmount(parseInt(event.target.value));
  };

  const handleBankDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setBankDetails(parseInt(event.target.value));
  };

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
          value={contributionAmount!}
          onValueChange={handleContributionAmountChange}
        />
        <InputField
          type="number"
          placeholder="Enter your bank details - e.g 30000XXX"
          htmlFor="aria-bankDetails-label"
          htmlId="aria-bankDetails-label"
          label="Bank Details"
          value={bankDetails!}
          onValueChange={handleBankDetailsChange}
        />
        <div className="flex justify-center items-center mt-5">
          <Button
            type="submit"
            content="Submit"
            handleClick={onSubmit}
            disabled={isFormValid}
          />
        </div>
      </Box>
    </Modal>
  );
}
