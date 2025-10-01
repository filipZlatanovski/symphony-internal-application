import TypographyText from "../TypographyText/TypographyText";
import CloseButton from "../CloseButton/CloseButton";
import InputField from "../InputField/InputField";
import { useState, type ChangeEvent } from "react";
import Button from "../Button/Button";
import ModalContainer from "../ModalContainer/ModalContainer";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export default function EditProfileModal({
  isOpen,
  onClose,
  onSubmit,
}: EditProfileModalProps) {
  const [nicknameValue, setNicknameValue] = useState<string | undefined>("");
  const [bankDetails, setBankDetails] = useState<number | undefined>();

  const handleNicknameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNicknameValue(event.target.value);
  };

  const handleBankDetailsChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!bankDetails) {
      event.preventDefault();
    }
    setBankDetails(parseInt(event.target.value));
  };

  // this will also be wrapped in a form input later on
  return (
    <ModalContainer open={isOpen} onClose={onClose}>
      <CloseButton onClose={onClose} />
      <TypographyText text="Edit Profile" variant="h3" />
      <InputField
        type="text"
        label="Nickname (Optional)"
        placeholder="Nickname"
        htmlFor="aria-nickname-input"
        htmlId="aria-nickname-input"
        value={nicknameValue}
        onValueChange={handleNicknameChange}
      />
      <InputField
        type="number"
        label="Update Bank Details"
        placeholder="e.g 30000XYZ"
        htmlFor="aria-update-bank-details"
        htmlId="aria-update-bank-details"
        value={bankDetails}
        onValueChange={handleBankDetailsChange}
      />
      <div className="flex justify-center items-center mt-5">
        <Button type="submit" content="Submit" handleClick={onSubmit} />
      </div>
    </ModalContainer>
  );
}
